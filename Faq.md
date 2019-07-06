<h3>问：我们新项目需要使用新框架开发，应如何做？</h3>

```
答：已提供入门教程文档，见“dotnet core 新框架开发demo”。
```

<h3>问：新框架开发是使用nuget包分发的，我如何创建nuget包？</h3>

```
答：已提供nuget打包教程文档，见“dotnet core 新框架开发之NuGet打包教程”。
```

<h3>问：我使用新框架开发的项目，自测/联调时是否能随意挑选一台windows或linux服务器作为临时部署？</h3>

```
答：可以，建议优先考虑使用linux服务器部署，且上线时必须是linux服务器部署。
```



<h3>问：我使用新框架开发的项目，需要服务器做开发测试或上线，如何申请服务器？</h3>

```
答：新框架约定一台服务器只允许安装部署运行一个应用程序，可以使用钉钉申请服务器。切换至“深圳市前海云途物流有限公司”-审批-IT类申请-开发服务器申请。
```

<h3>问：在Asp.Net Core Web应用程序项目中使用“Nebula.Hosting.Mvc” nuget包，点击visual studio 调试-IIS Express调试时无法正常工作？</h3>

```
答：调试窗口-IIS Express 点击下拉，找到当前项目，选择当前项目调试运行。
```

<h3>问：在本机运行后，如何与组员联调？</h3>

```
答：需要申请开发服务器并部署到服务器后再与组员联调。
```

<h3>问：使用新框架如何批量注册/注入？</h3>

```
答：方法一：一个个services.Add…；方法二：以编程方式，如反射遍历所有类型并注册/注入。
```

<h3>问：t4模板使用到MySql组件，模板里有指定MySql.Data.dll程序集的加载路径，而新框架使用nuget包安装MySql组件，怎么办？</h3>

```
答：暂行方法：将MySql.Data.dll文件在解决方案目录下。
```

<h3>问：在新框架中使用T4模板自动生成代码，运行后不断转圈？</h3>

```
答：待研究T4模板在.net core环境下情况。
```

<h3>问：新框架身份认证系统需要满足哪些事项才能使用？</h3>

```
答：只有对外的系统才上线新框架的身份认证系统，对内的系统不需要；当某个系统需要使用新框架的身份认证系统时，需明确用户信息来源，并对接认证接口。
```

<h3>问：在vs2017解决方案的项目无法选择.net core框架版本？</h3>

```
答：升级vs2017即可。
```

<h3>问：使用Visual Studio调试时，提示加载符号且等待时间长，偶尔会弹出某个程序集未加载的提示？</h3>

```
答：工具-选项-调试，勾选“仅我的代码”。
```

<h3>问：.net core工程如何调用业务日志服务？</h3>

```
答：已提供调用demo
```

<h3>问：如何使用Db.T执行数据库操作</h3>

```
答：示例代码：
using(Db.UseDataBase("default")){
    Db.T("select Id from tableName")
}
```

<h3>问：.net core 环境如何引入业务日志接口服务并调用？</h3>

```
答：调用代码示例如下：
public DemoController(IApiClientProvider provider)
{
    client = provider.GetClient<ITraceLogService>();
}
```

<h3>问：.net framework环境如何引入业务日志接口服务并调用？</h3>

```
答：已提供demo。
```

<h3>问：.net framework环境引入业务日志接口服务并调用时发现
Newtonsoft.Json版本与现有项目中引入的
Newtonsoft.Json版本有冲突，如何解决？</h3>

```
答：在现有项目的config中配置Newtonsoft.Json的版本，如，显式指定某一版本。注意：如果现有项目中引入的Newtonsoft.Json为4.5等低版本，可能会无法使用业务日志接口服务。
```

<h3>问：在本机开发调试时发现hosting(通用宿主)连接的是生产环境的apollo（阿波罗）怎么办？</h3>

```
答：这是个莫名奇妙的问题，跟踪时发现监听的ip也不是本机ip。解决方法暂定为：
var host = new MvcHosting();
host.UseEnvironment("Development");
host.RunAsync().Wait();
```

<h3>问：某台生产服务器发现异常：cannot assign requested address，如何解决？</h3>

```
答：经排查代码发现每次请求都new HttpClient，当服务器配置较低时，开发调试时会遇上个问题，高配置的机器不会出现。
```

<h3>问：新框架提供的RabbitMQ如何使用？</h3>

```
nuget包：Nebula.Modules.RabbitMQ
```

<h3>问：新框架提供的Redis缓存如何使用？</h3>

```
nuget包：Nebula.Modules.Redis
```

<h3>问：Redis缓存如何自动更新数据？</h3>

```
暂未提供。
```


