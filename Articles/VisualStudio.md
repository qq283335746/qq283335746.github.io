# Visual Studio / Visual Studio Code

[Visual Studio 文档](https://docs.microsoft.com/zh-cn/visualstudio/windows/?view=vs-2019)

[适用于 Linux 的 Windows 子系统文档](https://docs.microsoft.com/zh-cn/windows/wsl/)

[Visual Studio Live Share 介绍 -官方](https://docs.microsoft.com/zh-cn/visualstudio/liveshare/)

[Remote Development using SSH -官方](https://code.visualstudio.com/docs/remote/ssh)

[Remote development over SSH -官方](https://code.visualstudio.com/docs/remote/ssh-tutorial)

[Visual Studio 调试程序文档](https://docs.microsoft.com/zh-cn/visualstudio/debugger/?view=vs-2019)

[使用visual studio code - .NET 基础知识](https://docs.microsoft.com/zh-cn/dotnet/core/tutorials/library-with-visual-studio-code)

[VSCode Debugging](https://code.visualstudio.com/docs/editor/debugging)

[Java in Visual Studio Code](https://code.visualstudio.com/docs/languages/java)

[Getting Started with Java in VS Code](https://code.visualstudio.com/docs/java/java-tutorial)

[带有 Swagger/OpenAPI 的 ASP.NET Core Web API 文档](https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-6.0)

[Java Debug Configuration](https://github.com/microsoft/vscode-java-debug/blob/master/Configuration.md)

[VSCode使用Remote-SSH免密码登陆远程服务器](https://www.cnblogs.com/pzzrudlf/articles/12287162.html)

### vscode + extension for Visual Studio Code
```
远程协同工作插件：Visual Studio Live Share

C# --Microsoft
C# XML Documentation Comments  --Keisuke Kato
SQLTools --Matheus Teixeira + SQLTools Microsoft SQL Server/Azure
SQl Server Client(mssql)  --Weijan Chen 
```

### vscode快捷键：
```
控制台清屏：Terminal: Clear
转到方法定义后返回：windows: alt + ← ，ubuntu: Ctrl + alt + -
visual studio 转到定义后返回：ctrl+-
代码格式化：windows:Shift + Alt + F，ubuntu: Ctrl + Shift + I
删除当前行：CTRL + shift + K

调出命令面板：Ctrl+Shift+P

ctrl+k+8 --#region #endregion全部折叠
ctrl+k+9 --#region #endregion全部展开
ctrl+shift+[  --折叠
ctrl+k ctrl+0  --折叠全部
ctrl+shift+]  --展开
ctrl+k ctrl+j  --展开全部

ctrl+shift+f  --查找内容（工作区）
ctrl+f  --查找内容（当前文件）
ctrl+p  --查找文件

```

### vscode remote:
```
vscode+WSL:
1、点击左下角><图标
2、New WSL Window
3、即可进入

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

//vscode 自带命令行开启远程开发：
code tunnel --accept-server-license-terms
[Developing with Remote Tunnels](https://code.visualstudio.com/docs/remote/tunnels)

--install code-server


```

### code-server
```
[install code-server](https://coder.com/docs/code-server/latest/install#debian-ubuntu):
curl -fOL https://github.com/coder/code-server/releases/download/v4.10.0/code-server_4.10.0_amd64.deb
sudo dpkg -i code-server_4.10.0_amd64.deb
sudo systemctl enable --now code-server@yibi
sudo systemctl start code-server@yibi

--code-server后台运行：
sudo systemctl restart code-server@$USER

--code-server启动输出：
Using config file ~/.config/code-server/config.yaml --可修改ip与端口
HTTP server listening on http://0.0.0.0:8088/  --打开chrome等浏览器即可浏览
Using password from ~/.config/code-server/config.yaml  --可修改连接密码

```

### vscode + c#
```
开发环境相关插件：
C#  --Microsoft
C# XML Documentation Comments  --Keisuke Kato
XML Tools  --Josh Johnson
JS-CSS-HTML Formatter  --lonefy

```

### vscode + java:

```
（ctrl+shift+p）Java: Clean the Java language server workspace
常用插件：springboot + Lombok
```

### vscode + .net cli:

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

### vscode + git
```
vscode git 每次都要求输入用户名和密码:git config --global credential.helper store  重启vscode

git pull "请在合并前提交或贮藏您的修改" : git config pull.rebase false

vscode创建标签后不自动提交，手动：git push --tags
```




