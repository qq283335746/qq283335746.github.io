# LINQ多表、复杂查询

一个相等查询备忘
```
var ppsMatches = await (
    from pps in _context.ProjectProcessSchedules
    join dp in _context.DepmtProcesses on pps.DepmtProcessId equals dp.Id
    join p in _context.ProjectBases on pps.ProjectBaseId equals p.Id
    join pid in _context.ProjectsInDepmts on p.Id equals pid.ProjectBaseId
    where pps.IsDeleted == false && pps.AppId == appidOptions && pps.AssignedUserCode == userCode && pps.Month == month && pid.DepmtCode == depmtCode && p.Status == ProjectBaseStatusOptions.Running
    select new UserMonthDepmtProjectProcessScheduleModel
    {
        ProjectBase = _mapper.Map<ProjectBaseDto>(p),
        ProjectInDepmt = _mapper.Map<ProjectsInDepmtsDto>(pid),
        DepmtProcess = dp,
        ProjectProcessSchedule =  _mapper.Map<ProjectProcessScheduleDto>(pps),
    }
    ).Distinct().ToListAsync();

if (ppsMatches == null || !ppsMatches.Any()) return null;

var resModel = new List<UserMonthDepmtProjectProcessScheduleResponse>();

foreach (var item in ppsMatches)
{
    var userMonthDepmtProjectProcessScheduleResponse = new UserMonthDepmtProjectProcessScheduleResponse{
        ProjectBase = item.ProjectBase,
        ProjectInDepmt = item.ProjectInDepmt
    };
    var processSchedules = new List<ProcessForUserMonthDepmtProjectProcessScheduleResponse>();

    //var depmtProcessInfo = await _generalRepository.FindOneAsync<DepmtProcessInfo>(m=>m.Id.Equals(item.ProjectProcessSchedule.DepmtProcessId));
    
    var processForUserMonthDepmtProjectProcessScheduleResponse = new ProcessForUserMonthDepmtProjectProcessScheduleResponse{
        DepmtProcessId = item.DepmtProcess.Id,
        DepmtProcessName = item.DepmtProcess.Name,
    };
    //var reviewSteps = new List<ProjectProcessScheduleDto>();
    var reviewStepsInProjectProcessSchedules = ppsMatches.Where(m=>m.ProjectProcessSchedule.ProjectBaseId.Equals(item.ProjectProcessSchedule.ProjectBaseId) && m.ProjectProcessSchedule.DepmtProcessId.Equals(item.ProjectProcessSchedule.DepmtProcessId)).OrderBy(m=>m.ProjectProcessSchedule.ReviewStep).Select(m=>m.ProjectProcessSchedule);
    //var reviewStepsInProjectProcessSchedules = await _generalRepository.FindAsync<ProjectProcessScheduleInfo>(m=>m.ProjectBaseId.Equals(item.ProjectProcessSchedule.ProjectBaseId) && m.DepmtProcessId.Equals(item.ProjectProcessSchedule.DepmtProcessId),new SortModel{ColumnName="ReviewStep"});
    //var reviewSteps = _mapper.Map<IEnumerable<ProjectProcessScheduleDto>>(reviewStepsInProjectProcessSchedules);
    var reviewSteps = reviewStepsInProjectProcessSchedules;
    processForUserMonthDepmtProjectProcessScheduleResponse.ReviewSteps = reviewSteps;

    processSchedules.Add(processForUserMonthDepmtProjectProcessScheduleResponse);

    userMonthDepmtProjectProcessScheduleResponse.ProcessSchedules = processSchedules;

    resModel.Add(userMonthDepmtProjectProcessScheduleResponse);
}


上述相同结果语句类似：
var resModel = await (
    from pps in _context.ProjectProcessSchedules
    join dp in _context.DepmtProcesses on pps.DepmtProcessId equals dp.Id
    join p in _context.ProjectBases on pps.ProjectBaseId equals p.Id
    join pid in _context.ProjectsInDepmts on pps.ProjectBaseId equals pid.ProjectBaseId
    where pps.IsDeleted == false && pps.AppId == appidOptions && pps.AssignedUserCode == userCode && pps.Month == month && pid.DepmtCode == depmtCode && p.Status == ProjectBaseStatusOptions.Running
    orderby dp.Sort
    select new UserMonthDepmtProjectProcessScheduleResponse
    {
        ProjectBase = _mapper.Map<ProjectBaseDto>(p),
        ProjectInDepmt = _mapper.Map<ProjectsInDepmtsDto>(pid),
        ProcessSchedules = (from pda in _context.DepmtProcesses
                            join dida in _context.ProjectsInDepmts on pda.DepmtCode equals dida.DepmtCode
                            where pps.DepmtProcessId.Equals(pda.Id) && pps.ProjectBaseId.Equals(dida.ProjectBaseId)
                            orderby pda.Sort
                            select new ProcessForUserMonthDepmtProjectProcessScheduleResponse
                            {
                                DepmtProcessId = pda.Id,
                                DepmtProcessName = pda.Name,
                                ReviewSteps = (from ppsa in _context.ProjectProcessSchedules
                                                where ppsa.DepmtProcessId.Equals(pda.Id) && ppsa.ProjectBaseId.Equals(dida.ProjectBaseId)
                                                orderby ppsa.ReviewStep
                                                select _mapper.Map<ProjectProcessScheduleDto>(ppsa)
                                ).Distinct()
                            }).Distinct()
    }

).Distinct().ToListAsync();

```