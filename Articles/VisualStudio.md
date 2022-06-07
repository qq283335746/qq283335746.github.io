# Visual Studio / Visual Studio Code

[Visual Studio 文档](https://docs.microsoft.com/zh-cn/visualstudio/windows/?view=vs-2019)

[适用于 Linux 的 Windows 子系统文档](https://docs.microsoft.com/zh-cn/windows/wsl/)

[Visual Studio Live Share 介绍 -官方](https://docs.microsoft.com/zh-cn/visualstudio/liveshare/)

[Remote Development using SSH -官方](https://code.visualstudio.com/docs/remote/ssh)

[Remote development over SSH -官方](https://code.visualstudio.com/docs/remote/ssh-tutorial)

[Visual Studio 调试程序文档](https://docs.microsoft.com/zh-cn/visualstudio/debugger/?view=vs-2019)

[.NET CLI 概述](https://docs.microsoft.com/zh-cn/dotnet/core/tools/)

[使用visual studio code - .NET 基础知识](https://docs.microsoft.com/zh-cn/dotnet/core/tutorials/library-with-visual-studio-code)

[VSCode Debugging](https://code.visualstudio.com/docs/editor/debugging)

[Java in Visual Studio Code](https://code.visualstudio.com/docs/languages/java)

[Getting Started with Java in VS Code](https://code.visualstudio.com/docs/java/java-tutorial)

[带有 Swagger/OpenAPI 的 ASP.NET Core Web API 文档](https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-6.0)

[Java Debug Configuration](https://github.com/microsoft/vscode-java-debug/blob/master/Configuration.md)

[VSCode使用Remote-SSH免密码登陆远程服务器](https://www.cnblogs.com/pzzrudlf/articles/12287162.html)

vscode快捷键：
```
控制台清屏：Terminal: Clear
转到定义及返回：alt + ←

visual studio 转到定义后返回：ctrl+-
代码格式化：windows:Shift + Alt + F，ubuntu: Ctrl + Shift + I
删除当前行：CTRL + shift + K

调出命令面板：Ctrl+Shift+P

ctrl+shift+[  --折叠
ctrl+k ctrl+0  --折叠全部
ctrl+shift+]  --展开
ctrl+k ctrl+j  --展开全部

ctrl+shift+f  --查找内容（工作区）
ctrl+f  --查找内容（当前文件）
ctrl+p  --查找文件

```

vscode remote:

```
vscode Remote-SSH：
1、点击左下角><图标
2、Remote-SSH Connect to Host
3、ssh root@ip
4、选择 c:\Users\cimc\.ssh\config配置文件
5、输入远程Server的登录密码

vscode远程-免密连接linux --start：

1、生成ssh密钥（如git->git bash here）：ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa
2、生成后上传至服务器： ssh-copy-id root@ip
3、修改c:\Users\cimc\.ssh\config配置文件，添加如下配置节：
PubkeyAuthentication yes
IdentityFile ~/.ssh/id_rsa
--IdentityFile  "c:\Users\cimc\.ssh\id_rsa"

4、c:\Users\cimc\.ssh\config文件打开后应是：
Host 192.168.xxx.xx
  HostName 192.168.xxx.xx
  User aaa
  PubkeyAuthentication yes
  IdentityFile ~/.ssh/id_rsa_192-168-xxx-xx

vscode远程-免密连接linux --end：
```

vscode + c#
```
开发环境相关插件：
C#  --Microsoft
C# XML Documentation Comments  --Keisuke Kato
XML Tools  --Josh Johnson
JS-CSS-HTML Formatter  --lonefy

```

vscode + java:

```
（ctrl+shift+p）Java: Clean the Java language server workspace
常用插件：springboot + Lombok
```

vscode + .net cli:

```
创建解决方案：dotnet new sln -n YibiSample
创建.NET Standard 类库：dotnet new classlib -f netstandard2.0 -o Yibi.Core
添加到解决方案文件中：dotnet sln add Yibi.Core/Yibi.Core.csproj

创建.NET类库：dotnet new classlib -o Yibi.Hosting -f netcoreapp3.1
添加到解决方案文件中：dotnet sln add Yibi.Hosting/Yibi.Hosting.csproj

创建asp.net core空项目：dotnet new web -f netcoreapp3.1 -o Cimc

添加项目引用：dotnet add Yibi.Hosting/Yibi.Hosting.csproj reference Yibi.Core/Yibi.Core.csproj

添加nuget包：
dotnet add package --version 6.3.0 Swashbuckle.AspNetCore
dotnet add src/ExSaf/ExSaf.csproj package Swashbuckle.AspNetCore -v 6.3.0

```

