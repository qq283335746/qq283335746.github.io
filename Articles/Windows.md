# Windows开发人员宝典

[如何：安装和卸载 Windows 服务](https://docs.microsoft.com/zh-cn/dotnet/framework/windows-services/how-to-install-and-uninstall-services)
[Windows Server 文档](https://docs.microsoft.com/zh-cn/windows-server/)

[在 DNS 客户端上禁用 DNS 客户端缓存](https://docs.microsoft.com/zh-cn/windows-server/networking/dns/troubleshoot/disable-dns-client-side-caching)

[Clearing Your IP Cache on your local Computer](https://customercenter.karthost.com/knowledgebase.php?action=displayarticle&id=70#:~:text=%20%20%201%20You%20will%20need%20to,local%20machine.%20By%20using%20the%20Command...%20More%20)

[Stop and Start Windows DNS Cache, when “ipconfig /flushdns” not working](https://shellcreeper.com/stop-and-start-windows-dns-cache-when-ipconfig-flushdns-not-working/)

```
1、ipconfig /flushdns 2、ping tester.cimcparking.com 3、ipconfig /displaydns（显示） 4、net stop dnscache 5、net start dnscache 

```

[阿里云-Windows Server2012使用powershell安装IIS的方法](http://www.023dns.com/server_ECS/1560.html)
[阿里云-Windows Server半年渠道镜像与实例管理](https://help.aliyun.com/document_detail/113063.html?spm=a2c4g.11186623.2.13.3fda4c07dCFd0I)

[windows服务器管理](https://docs.microsoft.com/zh-cn/windows-server/administration/manage-windows-server)
[About Remote Troubleshooting](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_remote_troubleshooting?view=powershell-7)
[PowerShell下载](https://github.com/PowerShell/PowerShell/releases/tag/v7.0.1)
[什么是 PowerShell？](https://docs.microsoft.com/zh-cn/powershell/scripting/overview?view=powershell-7)
```
Enable-PSRemoting
winrm quickconfig --新购买的阿里云ECS启用windows admin center(WAC)进行管理时需执行此命令，执行后即可使用WAC远程。

失败：
about_Remote_Troubleshooting
Set-Item WSMan:\localhost\Client\TrustedHosts -Value *
Enter-PSSession -computer 120.24.35.134
Enter-PSSession 120.24.35.134 -Credential abc\administrator
```

使用windows admin center（WAC）管理计算机：
```
WAC连接阿里云ECS需开启端口：5985、5986 
```

[Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/zh-cn/windows/wsl/about)
```
技术点：了解适用于 Linux 的 Windows 子系统运行
```

Windows ADK:
```
WinPE:
显示命令窗口后，将运行 wpeinit 命令，它可以设置系统。这可能需要几分钟。
```

windows 命令行：
```
查看端口：netstat-a
开启端口：
rem Open TCP Port 80 inbound and outbound
netsh advfirewall firewall add rule name="Zoo TCP Port 80" dir=in action=allow protocol=TCP localport=80
netsh advfirewall firewall add rule name="Zoo TCP Port 80" dir=out action=allow protocol=TCP localport=80
```


