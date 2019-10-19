# C#/.NET编程

[欢迎使用 .NET](https://docs.microsoft.com/zh-cn/dotnet/welcome)

[异步编程](https://docs.microsoft.com/zh-cn/dotnet/csharp/async)

[集合和数据结构](https://docs.microsoft.com/zh-cn/dotnet/standard/collections/selecting-a-collection-class)

[线程安全集合](https://docs.microsoft.com/zh-cn/dotnet/standard/collections/thread-safe/)

[为多线程处理同步数据](https://docs.microsoft.com/zh-cn/dotnet/standard/threading/synchronizing-data-for-multithreading)

[托管线程处理的最佳做法](https://docs.microsoft.com/zh-cn/dotnet/standard/threading/managed-threading-best-practices)

[线程处理对象和功能-同步基元概述](https://docs.microsoft.com/zh-cn/dotnet/standard/threading/overview-of-synchronization-primitives)

[.NET 中的并行处理、并发和异步编程](https://docs.microsoft.com/zh-cn/dotnet/standard/parallel-processing-and-concurrency)

[lock 语句（C# 参考）](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/keywords/lock-statement)

[.NET多线程并发与同步](https://www.jianshu.com/p/ea79ba42bcc0)

[多线程中的锁 volatile、Interlocked、ReaderWriterLockSlim](https://cloud.tencent.com/developer/article/1131776)

[C#中的多线程 - 高级多线程](https://blog.gkarch.com/threading/part4.html)

[Implementing the Singleton Pattern in C#](https://csharpindepth.com/articles/Singleton)
```
导读：c#实现单例的6种模式
```

[Introducting Lazy Evaluation And Fair Scheduling In C#](https://www.codeproject.com/Articles/5162791/Introducting-Lazy-Evaluation-And-Fair-Scheduling-I)
```
导读：欣赏代码。
```

[Async OOP 2: Constructors](https://blog.stephencleary.com/2013/01/async-oop-2-constructors.html)
```
导读：async/await在构造函数中使用。
```

[Getting Started with NPOI](https://github.com/tonyqus/npoi/wiki/Getting-Started-with-NPOI)
```
导读：NPOI系列教程
```

[PDF File Writer C# Class Library](https://www.codeproject.com/Articles/570682/PDF-File-Writer-Csharp-Class-Library-Version-1-26)
```
技术点：PDF/C# .NET class library
```

[Converting PDF to Text in C#](https://www.codeproject.com/Articles/12445/Converting-PDF-to-Text-in-C)
```
导读：There are several main methods for extracting text from PDF files in .NET:
Microsoft IFilter interface and Adobe IFilter implementation.
iTextSharp
PDFBox
PDFlib（https://www.codeproject.com/Articles/4690/Text2PDF）
```
[MarkDig](https://github.com/lunet-io/markdig)
```
c# converter; convert .md to html
```

ConcurrentBag<T>、BlockingCollection<T>相关参考： <br />
[C#/.NET Little Wonders: ConcurrentBag and BlockingCollection](http://geekswithblogs.net/BlackRabbitCoder/archive/2011/03/03/c.net-little-wonders-concurrentbag-and-blockingcollection.aspx)

```
List<T> is a collection designed to use in single thread applications.

ConcurrentBag<T> is a subtype of ConcurrentCollection<T> designed to simplify using collections in multi-thread environments. If you use ConcurrentCollection you will not have to lock your collection to prevent corruption by other threads. You can insert or take data from your collection with no need to write special locking codes.

BlockingCollection<T> is designed to get rid of the requirement of checking if new data is available in shared collection between threads. if there is new data inserted to shared collection than your consumer thread will awake immediatily. So you do not have to check if new data is available for consumer thread in certain time intervals typically in a while loop.

Asp.Net Core Mvc

//add a action filter
services.AddMvc(opts=> {
    opts.Filters.Add(typeof(ModelStateFeatureFilter));
})

```

System.Threading.Timer和System.Timers.Timer执行异步方法：
```
//System.Threading.Timer
var timer = new System.Threading.Timer(async (e) =>
{
    await RunAsync();

}, null, TimeSpan.Zero,TimeSpan.FromSeconds(5));

//System.Timers.Timer
var _timer2 = new System.Timers.Timer(3000)
{
    AutoReset = true
};
_timer2.Elapsed += new ElapsedEventHandler(OnTimedEvent);
_timer2.Start();

private async Task RunAsync()
{
    await Task.Delay(1000);

    //do...
}

private async void OnTimedEvent(Object source, ElapsedEventArgs e)
{
    //do...
    Console.WriteLine(DateTime.Now.ToString("HH:mm:ss"));
}
```

多线程代码片段：
```
var t1 = new Thread(() =>
{
    RunTimer();
});
t1.Start();

var t6 = new Thread(new ThreadStart(RunTimer6));
t6.Start();
```

DateTime Local to DateTime Utc 时间戳：
```
private long ToUnixDateTime(DateTime dateTime)
{
    if(dateTime.Kind != DateTimeKind.Utc)
    {
        dateTime = dateTime.ToUniversalTime();
    }
    return (long)(dateTime.Subtract(new DateTime(1970, 1, 1))).TotalMilliseconds;
}
```

使用枚举：
```
根据当前值获取枚举项：Enum.TryParse(strStatus, true, out EnumStatus status);
```

密码生成器代码片段：
```
GenerateHelper.cs：

public class GenerateHelper
{
    private const string _sourceDefault = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private const string _sourceStrong = "`~!@#$%^&*()-_=+[]{}\\|;:'\",<.>/?";
    private static List<char> _sourceDefaultDatas => _sourceDefault.ToCharArray().ToList();
    private static List<char> _sourceStrongDatas => (_sourceDefault+_sourceStrong).ToCharArray().ToList();

    public static string CreateGenerateCode(PasswordType passwordType)
    {
        List<char> datas = null;
        int n = 0;

        switch (passwordType)
        {
            case PasswordType.Default:
                datas = _sourceDefaultDatas;
                n = 20;
                break;
            case PasswordType.Stronger:
                datas = _sourceStrongDatas;
                n = 30;
                break;
            default:
                throw new ArgumentException("不支持的密码类型", nameof(passwordType));
        }

        return string.Join("", CreateRandomCodes(datas,n));
    }

    private static IEnumerable<char> CreateRandomCodes(List<char> datas, int n)
    {
        byte[] bytes = new byte[n];
        using (var rng = RandomNumberGenerator.Create())
        {
            rng.GetBytes(bytes);
        }

        var itemLength = datas.Count;

        foreach (var item in bytes)
        {
            var index = item % itemLength;

            yield return datas[index];
        }
    }
}


EnumPasswordType.cs：

public enum PasswordType
{
    Default,
    Stronger
}
```

获取应用程序目录：

```
string path = "";

//获取和设置当前目录（即该进程从中启动的目录）的完全限定路径。 结果:E:\项目\Test
path = Environment.CurrentDirectory;

// 获取程序的基目录。结果：E:\项目\Test\
path = System.AppDomain.CurrentDomain.BaseDirectory;

// 获取和设置当前目录(该进程从中启动的目录)的完全限定目录。 结果：E:\项目\Test
path = System.Environment.CurrentDirectory ;

// 获取应用程序的当前工作目录，注意工作目录是可以改变的，而不限定在程序所在目录。 结果：E:\项目\Test
path = System.IO.Directory.GetCurrentDirectory();

// 获取和设置包括该应用程序的目录的名称。 结果：E:\项目\Test\
path = System.AppDomain.CurrentDomain.SetupInformation.ApplicationBase;

//获取项目下的Log文件路径 结果：E:\项目\Test\Log
path = System.Web.HttpContext.Current.Server.MapPath("~/Log");
```
