# 数据库技术集锦

[SQL Server 设置连接属性 --SQL Server 官方文档](https://docs.microsoft.com/zh-cn/sql/connect/jdbc/setting-the-connection-properties?view=sql-server-ver15)

[使用加密](https://docs.microsoft.com/zh-cn/sql/connect/jdbc/using-ssl-encryption?view=sql-server-ver15)

[DBConvert Studio 多数据库管理工具](https://dbconvert.com/download/)
[Navicat Premium 多数据库管理工具](https://www.navicat.com/en/products/navicat-premium)

[LiteDB(Embedded NoSQL database for .NET)](http://www.litedb.org/)

[LiteDBViewer(LiteDB数据库管理客户端)](https://github.com/falahati/LiteDBViewer)

[LiteDB github](https://github.com/mbdavid/LiteDB)

[LiteDB开发示例文档](https://github.com/mbdavid/LiteDB/wiki/Getting-Started)

SQLite + SpatiaLite、PostgreSQL + PostGIS

[Install MongoDB](https://docs.mongodb.com/manual/installation/)
```
MongoDB管理工具：Robo 3T
```

[使用 ASP.NET Core 和 MongoDB 创建 Web API](https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/first-mongo-app?view=aspnetcore-2.2&tabs=visual-studio)

[.NET Core Data Access](https://devblogs.microsoft.com/dotnet/net-core-data-access/)
```
技术点：ORM：EF Core，Dapper，NPoco
```

SQL Server：
```
windows身份认证连接字符串：Data Source=.;Integrated Security=SSPI;Initial Catalog=xxxDb;
```

数据库中的列转行、行转列
```
行转列  PIVOT
列转行  UNPIVOT

示例：
select y.*                                                            
 from (                                                                                                               
         select LNCode,CustStatus,Num                                                                                 
            from (                                                                                                    
                    select b.LNCode,isnull(CustStatus,'X') as CustStatus,COUNT(*) as Num                            
                      from table_1 a,users b where a.CheckType<>1 and a.SaleID=b.UserCode and b.LeaveStatus=0  
                      group by b.LNCode,isnull(CustStatus,'X')                                                      
                  ) x                                                                                                 
      ) act pivot(sum(Num) for CustStatus in (A,B,C,D,E,F,G,H,I,X)) y    

```
