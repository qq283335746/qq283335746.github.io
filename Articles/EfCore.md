# Entity Framework Core

[迁移](https://docs.microsoft.com/zh-cn/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli)

代码片段备忘：

```
public Task<int> SaveChangesAsync() => SaveChangesAsync(default(CancellationToken));
```