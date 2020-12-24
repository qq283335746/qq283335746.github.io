# Visual Studio / Visual Studio Code

[Visual Studio 文档](https://docs.microsoft.com/zh-cn/visualstudio/windows/?view=vs-2019)

[适用于 Linux 的 Windows 子系统文档](https://docs.microsoft.com/zh-cn/windows/wsl/)

[Visual Studio Live Share 介绍 -官方](https://docs.microsoft.com/zh-cn/visualstudio/liveshare/)

[Remote Development using SSH -官方](https://code.visualstudio.com/docs/remote/ssh)

[Visual Studio 调试程序文档](https://docs.microsoft.com/zh-cn/visualstudio/debugger/?view=vs-2019)

[.NET CLI 概述](https://docs.microsoft.com/zh-cn/dotnet/core/tools/)

[使用visual studio code - .NET 基础知识](https://docs.microsoft.com/zh-cn/dotnet/core/tutorials/library-with-visual-studio-code)

[VSCode Debugging](https://code.visualstudio.com/docs/editor/debugging)

[Java in Visual Studio Code](https://code.visualstudio.com/docs/languages/java)

[Getting Started with Java in VS Code](https://code.visualstudio.com/docs/java/java-tutorial)

[Java Debug Configuration](https://github.com/microsoft/vscode-java-debug/blob/master/Configuration.md)

[VSCode使用Remote-SSH免密码登陆远程服务器](https://www.cnblogs.com/pzzrudlf/articles/12287162.html)

vscode快捷键：
```
代码格式化：windows:Shift + Alt + F，ubuntu: Ctrl + Shift + I
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
vscode远程-免密连接linux --end：
```

vscode+java:

```
（ctrl+shift+p）Java: Clean the Java language server workspace
常用插件：springboot + Lombok
```

vscode cli:

```
控制台清屏：Terminal: Clear
转到定义及返回：alt + ←

创建解决方案：dotnet new sln -n YibiSample
创建.NET Standard 类库：dotnet new classlib -f netstandard2.0 -o Yibi.Core
添加到解决方案文件中：dotnet sln add Yibi.Core/Yibi.Core.csproj

创建.NET类库：dotnet new classlib -o Yibi.Hosting -f netcoreapp3.1
添加到解决方案文件中：dotnet sln add Yibi.Hosting/Yibi.Hosting.csproj

创建asp.net core空项目：dotnet new web -f netcoreapp3.1 -o Cimc

添加项目引用：dotnet add Yibi.Hosting/Yibi.Hosting.csproj reference Yibi.Core/Yibi.Core.csproj
```


