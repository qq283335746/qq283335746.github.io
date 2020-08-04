# Entity Framework Core

[EF使用MySQL：Entity Framework 6 Support](https://dev.mysql.com/doc/connector-net/en/connector-net-entityframework60.html)

[迁移](https://docs.microsoft.com/zh-cn/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli)

EF6 code-first：

```
vs-工具-NuGet包管理器-程序包管理器控制台：

Enable-Migrations –EnableAutomaticMigrations -ConnectionString "server=localhost;port=3306;uid=xx;password=xxx;database=xxxx;" -ConnectionProviderName MySql.Data.MySqlClient    --OK

Add-Migration -Name "DbMigrations001" -ConnectionString "server=localhost;port=3306;uid=xx;password=xxx;database=xxxx;" -ConnectionProviderName MySql.Data.MySqlClient   --OK

Update-Database -ConnectionString "server=localhost;port=3306;uid=xx;password=xxx;database=xxxx;" -ConnectionProviderName MySql.Data.MySqlClient    --OK
```

EF Core code-first：

```
dotnet ef migrations add DbMigrations001 --output-dir DbMigrations --context MySqlSyncContext --startup-project ..\YourWeb\YourWeb.csproj
dotnet ef database update DbMigrations001 --context MySqlSyncContext --startup-project ..\YourWeb\YourWeb.csproj

相关命令行：
更新ef core 版本：dotnet tool update --global dotnet-ef --version 3.1.5
```

代码片段备忘：

```
public Task<int> SaveChangesAsync() => SaveChangesAsync(default(CancellationToken));
```
