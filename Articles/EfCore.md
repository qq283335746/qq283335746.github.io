# Entity Framework Core

代码片段备忘：

```
public Task<int> SaveChangesAsync() => SaveChangesAsync(default(CancellationToken));
```