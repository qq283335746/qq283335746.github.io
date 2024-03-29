# DotNetCore技术集锦

[Microsoft Docs](https://docs.microsoft.com/zh-cn/)

[下载 .NET](https://dotnet.microsoft.com/zh-cn/download/dotnet)

[.NET Core 指南](https://docs.microsoft.com/zh-cn/dotnet/core/)

[ASP.NET Core官方文档](https://learn.microsoft.com/zh-cn/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0)

[EF Core官方文档](https://docs.microsoft.com/zh-cn/ef/#pivot=efcore)

[使用 .NET CLI 发布 .NET 应用 --官方文档](https://docs.microsoft.com/zh-cn/dotnet/core/deploying/deploy-with-cli)

[SqlClient 故障排除指南](https://docs.microsoft.com/zh-cn/sql/connect/ado-net/sqlclient-troubleshooting-guide?view=sql-server-ver15)

[使用加密进行连接](https://docs.microsoft.com/zh-cn/sql/connect/jdbc/connecting-with-ssl-encryption?view=sql-server-ver15)

[.NET Core 和 .NET Standard 中的单元测试](https://docs.microsoft.com/zh-cn/dotnet/core/testing/)

[Azure 体系结构中心](https://docs.microsoft.com/zh-cn/azure/architecture/)
```
应用程序体系结构指南、云设计模式、云采用框架等等
```

[Global Error Handling in ASP.NET Core Web API](https://code-maze.com/global-error-handling-aspnetcore/)

[Orchard Core- DI中多租户的推荐模式](https://github.com/OrchardCMS/OrchardCore)

[在视觉工作室安装 FxCop 分析仪](https://docs.microsoft.com/zh-cn/visualstudio/code-quality/install-fxcop-analyzers?view=vs-2019)

[.NET 中的序列化](https://docs.microsoft.com/zh-cn/dotnet/standard/serialization/)

[Creating a rolling file logging provider for ASP.NET Core 2.0](https://andrewlock.net/creating-a-rolling-file-logging-provider-for-asp-net-core-2-0/)

[serilog日志写到文件-serilog-sinks-file](https://github.com/serilog/serilog-sinks-file)

[serilog日志配置参数-serilog-settings-configuration](https://github.com/serilog/serilog-settings-configuration)

[NLog.Extensions.Logging - NLog provider for Microsoft.Extensions.Logging](https://github.com/NLog/NLog.Extensions.Logging)

[NLog Targes:like LiteDB、MongoDB](https://nlog-project.org/config/?tab=targets)

[How to Write a Custom Logging Provider in ASP.NET Core](https://www.codeproject.com/Articles/1556475/How-to-Write-a-Custom-Logging-Provider-in-ASP-NET)

[Logging to a file in .Net Core](https://www.codeproject.com/Articles/4049519/Speed-up-ASP-NET-Core-WEB-API-application-Part-3)

asp.net core 日志记录
```
ILogger级别：Trace = 0、Debug = 1、Information = 2、Warning = 3、Error = 4、Critical = 5 和 None = 6
Serilog.Extensions.Logging.File、NLog、log4net

``` 

[学习.net/c#优秀博客](https://www.strathweb.com/)

[从控制器操作名称中剪裁的异步后缀，即方法GetAllAsync，请求应是GetAll](https://docs.microsoft.com/zh-cn/dotnet/core/compatibility/2.2-3.0)

[现代 ASP.NET Web 应用程序电子书](https://docs.microsoft.com/zh-cn/dotnet/architecture/modern-web-apps-azure/)

[github .NET Core Community](https://github.com/dotnetcore)

[Simplifying dependency injection for IConfigureOptions with the ConfigureOptions() helper](https://andrewlock.net/simplifying-dependency-injection-for-iconfigureoptions-with-the-configureoptions-helper/)

[.NET Core Dependency Injection - One Interface, Multiple Implementations](https://www.c-sharpcorner.com/article/net-core-dependency-injection-one-interface-multiple-implementation/)

[Dependency Injection with Multiple Implementations in ASP.NET Core](https://edi.wang/post/2018/12/28/dependency-injection-with-multiple-implementations-in-aspnet-core)

[Registering multiple implementations of the same interface in ASP.NET Core](https://dejanstojanovic.net/aspnet/2018/december/registering-multiple-implementations-of-the-same-interface-in-aspnet-core/)

[dotnetcore docs CAP](https://github.com/dotnetcore/CAP)

asp.net core 部署至windows：
```
第一步：下载并安装.net core sdk，使用浏览器访问 https://dotnet.microsoft.com/download
第二步：下载并安装，使用浏览器访问 https://download.visualstudio.microsoft.com/download/pr/5bed16f2-fd1a-4027-bee3-3d6a1b5844cc/dd22ca2820fadb57fd5378e1763d27cd/dotnet-hosting-3.1.4-win.exe

将 ASP.NET Core 应用发布到 IIS：https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/publish-to-iis?view=aspnetcore-3.1&tabs=visual-studio
```

[Microsoft.AspNetCore.Authentication.OAuth](https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.OAuth/)
```
技术点：ASP.NET Core 身份认证中间件;

相关案例源码参考：
【钉钉、QQ/Weixin 登录】 https://github.com/Kiakaa/ExternalLoginMiddleWare

【QQ登录】https://www.nuget.org/packages/AspNet.Security.OAuth.QQ/
【微信登录】 https://www.nuget.org/packages/AspNet.Security.OAuth.Weixin/
```

[AspNet.Security.OAuth.Providers](https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers)

[ASP.NET Core 中的那些认证中间件及一些重要知识点](https://www.cnblogs.com/savorboard/p/aspnetcore-authentication.html)

[ASP.NET Core 中的运行状况检查](https://docs.microsoft.com/zh-cn/aspnet/core/host-and-deploy/health-checks?view=aspnetcore-2.2)

[运行状况监视](https://docs.microsoft.com/zh-cn/dotnet/standard/microservices-architecture/implement-resilient-applications/monitor-app-health)
```
技术点：ASP.NET Core 服务中实现运行状况检查;使用监视程序（AspNetCore.Diagnostics.HealthChecks、AspNetCore.HealthChecks.UI）
```

[BETTER TIMEOUT HANDLING WITH HTTPCLIENT](https://thomaslevesque.com/2018/02/25/better-timeout-handling-with-httpclient/)
```
技术点：HttpClient设置超时最佳实践。
```

[.net core System.Net.Http Namespace](https://docs.microsoft.com/zh-cn/dotnet/api/system.net.http?view=netcore-2.2)

[Service Fabric 文档](https://docs.microsoft.com/zh-cn/azure/service-fabric/)

[确保 .NET 微服务和 Web 应用的安全性](https://docs.microsoft.com/zh-cn/dotnet/standard/microservices-architecture/secure-net-microservices-web-applications/)
```
技术点：ASP.NET Core身份认证、授权。
```

[异步编程中的最佳做法](https://msdn.microsoft.com/zh-cn/magazine/jj991977.aspx)
```
技术点：async await最佳做法、误区解答
```

[Designing Evolvable Web APIs with ASP.NET: Harnessing the Power of the Web](https://books.google.com.hk/books?id=xZ0TAwAAQBAJ&pg=PT491&lpg=PT491&dq=httpclient+CancellationToken&source=bl&ots=JIuxiwMjFZ&sig=ACfU3U3VkZGbNim8pkytwZsE60eCl8Wq9g&hl=zh-CN&sa=X&ved=2ahUKEwjbtvSE_OXiAhUF-2EKHdX_A104ChDoATAAegQIBhAB#v=onepage&q=httpclient%20CancellationToken&f=false)
```
技术点：HttpClient
```

[Introduction to ASP.NET Web API](https://dotnettutorials.net/lesson/web-api-architecture/)
```
技术点：ASP.NET Web API示例教程
```

[ASP.NET Core 数据保护](https://docs.microsoft.com/zh-cn/aspnet/core/security/data-protection/introduction?view=aspnetcore-2.2)
```
.net core应用程序中的数据保护、加解密；加解密中的salt(盐)：
// generate a 128-bit salt using a secure PRNG
byte[] salt = new byte[128 / 8];
using (var rng = RandomNumberGenerator.Create())
{
    rng.GetBytes(salt);
}

//利用redis生成唯一的订单号
public async Task<string> GenerateOrderCodeAsync(string key,string prefix)
{
    if (string.IsNullOrEmpty(prefix)) prefix = "1";
    var value = await Db.StringIncrementAsync(key);

    return $"{prefix}{value.ToString().PadLeft(9,'0')}";
}

```

[Microsoft.AspNetCore.DataProtection-示例0001](https://stackoverflow.com/questions/38795103/encrypt-string-in-net-core)
```
技术点：.net core数据保护、加解密；使用redis的数据保护包：Microsoft.AspNetCore.DataProtection.StackExchangeRedis
```

[Open-Source Service Discovery](http://jasonwilder.com/blog/2014/02/04/service-discovery-in-the-cloud/)
```
技术点：开源的服务注册与发现相关软件
```

[Dynamic ASP.NET Core Configurations With Consul KV](https://www.c-sharpcorner.com/article/dynamic-asp-net-core-configurations-with-consul-kv/)
```
技术点：asp.net core使用consul kv作为分布式配置中心。
```

[教程：在 ASP.NET Core 应用中使用动态配置](https://docs.microsoft.com/zh-cn/azure/azure-app-configuration/enable-dynamic-configuration-aspnet-core)
```
技术点：ASP.NET Core 有可插拔的配置系统，可以从各种源读取配置数据。IOptions<T> 、IOptionsSnapshot<T>
```

[ASP.NET Core 中的缓存](https://www.cnblogs.com/royzshare/p/9474740.html)
```
技术点：ASP.NET Core IOptions的使用；ServiceCollectionExtensions中Action的使用
```

[Injecting LiteDb as a service in ASP.NET Core](https://codehaks.github.io/2018/10/01/injecting-litedb-as-a-service-in-asp.net-core.html/)
```
技术点：ASP.NET Core IOptions的使用；ASP.NET Core LiteDB；LiteDB 限制：https://github.com/mbdavid/LiteDB/wiki/How-LiteDB-Works
```

[ASP.NET CORE Token Authentication and Authorization using JWT (No Cookies) – Part 1](https://www.codeproject.com/Articles/5160941/ASP-NET-CORE-Token-Authentication-and-Authorizatio)

[EF Core 实现多租户](http://www.sohu.com/a/275780125_468635)

[Defensive database context for multi-tenant ASP.NET Core applications --多租户实现](https://gunnarpeipman.com/net/ef-core-global-query-filters/)

[List of ASP.NET Web API and HttpClient Samples](https://devblogs.microsoft.com/aspnet/list-of-asp-net-web-api-and-httpclient-samples/)

[ASP.NET Core Dependency Injection Deep Dive](https://joonasw.net/view/aspnet-core-di-deep-dive)

[ASP.NET Core 2.2 - SMTP EmailSender Implementation](https://kenhaggerty.com/articles/article/aspnet-core-22-smtp-emailsender-implementation)

[SendGrid使用方法](http://blog.sina.com.cn/s/blog_517206ba01015o8x.html)

[asp.net core的虚拟目录](https://dotblogs.com.tw/supershowwei/2020/01/06/111404)

[ASP.Net core 中Server.MapPath的替换方法](https://blog.csdn.net/shanghaimoon/article/details/114338839)

### Http相关类
```
Microsoft.Net.Http.Headers.HeaderNames --headers
System.Net.Mime.MediaTypeNames
System.Net.Mime.MediaTypeNames.Application --Json
System.Net.Mime.MediaTypeNames.Image
System.Net.Mime.MediaTypeNames.Text --Xml
```

### Asp.Net Core 机密管理：
```
dotnet user-secrets init --project src\Yibi\Yibi.csproj
dotnet user-secrets list --project src\Yibi\Yibi.csproj
dotnet user-secrets set "db_Password" "yourpassword" --project src\Yibi\Yibi.csproj
```

### 数据保护：
```
引入包：<PackageReference Include="Microsoft.AspNetCore.DataProtection.Extensions" Version="$(MicrosoftAspNetCorePackageVersion)" />

services.AddDataProtection()
        .ProtectKeysWithCertificate(accessTokenOptions.Value.SecretKey)
        .UseCustomCryptographicAlgorithms(new ManagedAuthenticatedEncryptorConfiguration
        {
            // A type that subclasses SymmetricAlgorithm
            EncryptionAlgorithmType = typeof(Aes),
            // Specified in bits
            //EncryptionAlgorithmKeySize = 256,
            // A type that subclasses KeyedHashAlgorithm
            ValidationAlgorithmType = typeof(HMACSHA256)
        })
        //.UseCryptographicAlgorithms(new AuthenticatedEncryptorConfiguration
        //{
        //    EncryptionAlgorithm = EncryptionAlgorithm.AES_256_CBC,
        //    ValidationAlgorithm = ValidationAlgorithm.HMACSHA256
        //})
        ;

var _dataProtectionProvider = provider.GetRequiredService<IDataProtectionProvider>();
var _protector = _dataProtectionProvider.CreateProtector("ProtectorName");
var input = "123456";
var encryptInput = _protector.Protect(input);
_protector = _dataProtectionProvider.CreateProtector("ProtectorName");
var decryptInput = _protector.Unprotect(encryptInput);
```

### asp.net core 以编程方式发送电子邮件
```
1、SendGrid
2、MailKit and MimeKit
```

创建一个CancellationToken：var cancellationToken = default(CancellationToken);


### .Net Core依赖注入代码片段集锦：
```
public static void Main(string[] args)
{
    // add data protection services
    var serviceCollection = new ServiceCollection();
    serviceCollection.AddDataProtection();
    var services = serviceCollection.BuildServiceProvider();

    // create an instance of MyClass using the service provider
    var instance = ActivatorUtilities.CreateInstance<MyClass>(services);
    instance.RunSample();
}
public class MyClass
{
    public void RunSample()
    {
        
    }
}

IServiceProvider：

HttpContext --RequestServices
var someservice = (ISomeService)context.HttpContext.RequestServices.GetService(typeof(ISomeService));

IApplicationBuilder --ApplicationServices：
public void Configure(IApplicationBuilder app)
{
    var serviceProvider = app.ApplicationServices;
    var hostingEnv = serviceProvider.GetService<IHostingEnvironment>();
}

IServiceProvider provider：
provider.CreateScope().ServiceProvider.GetServices(typeof(IStudentService));

//Accept有效而Content-Type无效
services.AddHttpClient(HttpClientNames.DingtalkClient, client =>
{
    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
    client.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "application/json");
});
```
### .net core跨域设置代码片段：
```
public void Configure(IApplicationBuilder app)
{
    app.UseCors(SpecificOrigins.SpecificOriginName);
}

public IServiceProvider ConfigureServices(IServiceCollection services)
{
    services.AddCors(options =>
    {
        options.AddPolicy(SpecificOrigins.SpecificOriginName,
        builder =>
        {
            //builder.WithOrigins("http://signin.yunexpress.com", "https://signin.yunexpress.com")
            builder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
    });

    return services.BuildServiceProvider();
}
[EnableCors( SpecificOrigins.SpecificOriginName )]
public class AuthenticationController{
    
}
```

### asp.net core razor:
```
使用@: 或 <text> 可在c#代码中写js代码。
```
asp.net core IEndpointRouteBuilder 扩展示例
```
public static void MapOldParkingApiRoutes(this IEndpointRouteBuilder endpoints)
{
    endpoints.MapControllerRoute(
        name: Routes.OldParkingApiRouteName,
        pattern: "{[a-Z]}/openapi/v99999/parking/{action}",
        defaults: new { controller = "ParkingApi", action = "{action}" });
}

读取环境变量：Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")

机密管理：
var config = provider.GetRequiredService<IConfiguration>();
databaseOptions.Value.ConnectionString = databaseOptions.Value.ConnectionString.Trim(';') + $";Password={config["db_Password"]};";

```


### 开发过程问题备忘
```
添加Swagger后未看到相关Controller的接口，访问Swagger页面看到：No operations defined in spec!
解决方法：在Controller上添加 [Route("api/v1/[controller]/[action]")]

Asp.Net Core 6 接口输出json首字母小写格式，改为首字母大写格式的方法：
.AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = null;
});

在web.config配置运行环境：
<aspNetCore>
  <environmentVariables>
    <environmentVariable name="ASPNETCORE_ENVIRONMENT" value="Development" />
  </environmentVariables>
</aspNetCore>

.NET CLI 使用发布配置文件 (.pubxml)进行发布：
dotnet publish src/ExSaf/ExSaf.csproj /p:PublishProfile=FolderProfile.pubxml -o F:\Publish\Web
对比dotnet publish -c Release -r win-x64 -p:UseAppHost=false -f net6.0 --self-contained false -o F:\Publish\Web，发现使用发布配置文件 (.pubxml)在F:\Publish\Web目录下的文件最小。

FolderProfile.pubxml：
<?xml version="1.0" encoding="utf-8"?>
<!--
https://go.microsoft.com/fwlink/?LinkID=208121.
-->
<Project>
  <PropertyGroup>
    <DeleteExistingFiles>false</DeleteExistingFiles>
    <ExcludeApp_Data>false</ExcludeApp_Data>
    <LaunchSiteAfterPublish>true</LaunchSiteAfterPublish>
    <LastUsedBuildConfiguration>Release</LastUsedBuildConfiguration>
    <LastUsedPlatform>Any CPU</LastUsedPlatform>
    <PublishProvider>FileSystem</PublishProvider>
    <PublishUrl>F:\Publish\ExSaf\Web-Cli-4</PublishUrl>
    <WebPublishMethod>FileSystem</WebPublishMethod>
    <SiteUrlToLaunchAfterPublish />
    <TargetFramework>net6.0</TargetFramework>
    <RuntimeIdentifier>linux-x64</RuntimeIdentifier>
    <ProjectGuid>493c2626-ec27-4d26-a4fa-e3c9a0637b75</ProjectGuid>
    <SelfContained>false</SelfContained>
	<EnvironmentName>Development</EnvironmentName>
  </PropertyGroup>
</Project>

问题：efcore:A connection was successfully established with the server, but then an error occurred during the pre-login handshake. (provider: SSL Provider, error: 31 - Encryption(ssl/tls) handshake failed)
解决：
sudo nano /etc/ssl/openssl.cnf --打开编辑openssl.cnf文件，经测试未成功...

[SqlClient 故障排除指南](https://docs.microsoft.com/zh-cn/sql/connect/ado-net/sqlclient-troubleshooting-guide?view=sql-server-ver15)

[Released: General Availability of Microsoft.Data.SqlClient 4.0]https://techcommunity.microsoft.com/t5/sql-server-blog/released-general-availability-of-microsoft-data-sqlclient-4-0/ba-p/2983346

微软sql server技术支持电话：8008203800按2转企业然后按3转技术咨询

.NET6.0新的连接字符串属性（如 encrypt、trustServerCertificate、trustStore、trustStorePassword、hostNameInCertificate）
[使用加密进行连接](https://docs.microsoft.com/zh-cn/sql/connect/jdbc/connecting-with-ssl-encryption?view=sql-server-ver15)

导入导出Excel相关类库：
DocumentFormat.OpenXml、EPPlus

Controller Action：
using (var stream = new MemoryStream())
{
    workbook.SaveAs(stream);
    var content = stream.ToArray();

    return File(
        content,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "users.xlsx");
}

Timer使用：

public class TimerService : IDisposable
{
    private readonly static TimeSpan heartbeatTickRate = TimeSpan.FromSeconds(5);

    public async Task Start()
    {
        if (timer is null)
        {
            timer = new(heartbeatTickRate);

            using (timer)
            {
                while (await timer.WaitForNextTickAsync())
                {

                }
            }
        }
    }

    public void Dispose()
    {
        timer?.Dispose();
    }
}

```

