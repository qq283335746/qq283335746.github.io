# Entity Framework Core

[EF Core 工具和扩展](https://docs.microsoft.com/zh-cn/ef/core/extensions/)

[迁移](https://docs.microsoft.com/zh-cn/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli)

[EF使用MySQL：Entity Framework 6 Support](https://dev.mysql.com/doc/connector-net/en/connector-net-entityframework60.html)

[Using PredicateBuilder with EF Core for Complex Queries](https://www.mitchelsellers.com/blog/article/using-predicatebuilder-with-ef-core-for-complex-queries)

[Async Streams with IAsyncEnumerable in .NET Core 3](https://anthonychu.ca/post/async-streams-dotnet-core-3-iasyncenumerable/)

### EF6 code-first：

```
vs-工具-NuGet包管理器-程序包管理器控制台：

Enable-Migrations –EnableAutomaticMigrations -ConnectionString "server=localhost;port=3306;uid=xx;password=xxx;database=xxxx;" -ConnectionProviderName MySql.Data.MySqlClient    --OK

Add-Migration -Name "DbMigrations001" -ConnectionString "server=localhost;port=3306;uid=xx;password=xxx;database=xxxx;" -ConnectionProviderName MySql.Data.MySqlClient   --OK

Update-Database -ConnectionString "server=localhost;port=3306;uid=xx;password=xxx;database=xxxx;" -ConnectionProviderName MySql.Data.MySqlClient    --OK
```

### EF Core code-first：

```
dotnet ef migrations add DbMigrations001 --output-dir DbMigrations --context MySqlSyncContext --startup-project ..\YourWeb\YourWeb.csproj
dotnet ef database update DbMigrations001 --context MySqlSyncContext --startup-project ..\YourWeb\YourWeb.csproj

相关命令行：
更新ef core 版本：dotnet tool update --global dotnet-ef --version 3.1.5

dotnet ef dbcontext scaffold "YourConnString" Microsoft.EntityFrameworkCore.SqlServer --context SqlServerContext --output-dir Models --namespace ExSaf.Core --startup-project ..\xxxx\xxxx.csproj --table Table1 --table Table2

LinqKit.Core包使用PredicateBuilder多条件拼接查询

```

### EF Core 事务
```
//https://learn.microsoft.com/zh-cn/dotnet/framework/data/transactions/implementing-an-implicit-transaction-using-transaction-scope
//System.Transactions.IsolationLevel:https://learn.microsoft.com/zh-cn/dotnet/api/system.transactions.isolationlevel?view=net-8.0
//System.Transactions.TransactionScopeOption:https://learn.microsoft.com/zh-cn/dotnet/api/system.transactions.transactionscopeoption?view=net-8.0
using (var scope = new TransactionScope(TransactionScopeOption.Required,
    new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted })
)
{
    scope.Complete();
}

System.Transactions 的限制:
1、EF Core 依赖数据库提供程序以实现对 System.Transactions 的支持。 如果提供程序未实现对 System.Transactions 的支持，则可能会完全忽略对这些 API 的调用。 SqlClient 支持它。
2、System.Transactions 中的分布式事务支持已添加到仅适用于 Windows 的 .NET 7.0。 尝试在较旧的 .NET 版本或非 Windows 平台上使用分布式事务将失败。
```

### 代码片段备忘：

```

-----------------------------------------------------------------------------------
List<string>属性映射：
public List<string> RelatedSo { get; set; }
entity.Property(e => e.RelatedSo)
    .HasConversion(v => JsonSerializer.Serialize(v, default),
        v => JsonSerializer.Deserialize<List<string>>(v, default))
    .Metadata
    .SetValueComparer(new ValueComparer<List<string>>(
    (c1, c2) => c1.SequenceEqual(c2),
    c => c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
    c => c.ToList()));
-------------------------------------------------------------------------------------

public Task<int> SaveChangesAsync() => SaveChangesAsync(default(CancellationToken));

SQL 转 Entity Framework Core 查询：
Sql：
select u.UserCode as DirectorCode,u.UserName as DirectorName,a.[Year],sum(ISNULL(ut.SalerCnt,0)) as TotalInOffice,sum(b.SalerPlanNums) as TotalStaffing
from SaleBudgetPost a,SaleBudgetPostDetail b,Department d 
left join (select LNCode,count(*) as SalerCnt from Users u where (RoleCode='6010' or RoleCode='6020') and LeaveStatus=0 and UserType=0 and IsSaler=1 group by LNCode) ut on d.LNCode=ut.LNCode
left join Department pd on d.PLNCode=pd.LNCode
left join Users u on d.Director=u.UserCode
where a.SBPID=b.SBPID and b.LNCode=d.LNCode 
and a.[Year]=2022
group by u.UserCode,u.UserName,a.[Year]
order by u.UserCode

转 Entity Framework Core 语句：
var matches = await (from sbp in _context.ErpDbSaleBudgetPosts
                    from sbpd in _context.ErpDbSaleBudgetPostDetails
                    from d in _context.ErpDbDepmts
                    join ut in (from uut in _context.ErpDbUsers
                                where (uut.RoleCode == "6010" || uut.RoleCode == "6020") && uut.LeaveStatus == 0 && uut.UserType == 0 && uut.IsSaler == true
                                group uut by uut.Lncode into guut
                                select new
                                {
                                    LnCode = guut.Key,
                                    SalerCnt = guut.Count()
                                }) on d.LnCode equals ut.LnCode
                    join d2 in _context.ErpDbDepmts on d.PlnCode equals d2.LnCode
                    join u in _context.ErpDbUsers on d.Director equals u.UserCode
                    where sbp.Sbpid == sbpd.Sbpid && sbpd.Lncode == d.LnCode && sbp.Year == year
                    group new { u.UserCode, u.UserName, sbp.Year, sbpd.SalerPlanNums, ut.SalerCnt } by new { u.UserCode, u.UserName, sbp.Year } into g
                    orderby g.Key.UserCode
                    select new
                    {
                        DirectorCode = g.Key.UserCode,
                        DirectorName = g.Key.UserName,
                        Year = g.Key.Year,
                        TotalInOffice = g.Sum(m => m.SalerCnt),
                        TotalStaffing = g.Sum(m => m.SalerPlanNums)
                    }).ToListAsync();


```
