# Linux开发人员宝典

[适用于 Linux 的 Windows 子系统文档](https://docs.microsoft.com/zh-cn/windows/wsl/)

[SecureCRT-linux远程工具](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt)

[WinSCP-linux文件管理工具](https://winscp.net/eng/download.php)

[ubuntu阿里云快速下载](http://mirrors.aliyun.com/ubuntu-releases/18.04/)

[ubuntu16 环境配置](https://cloud.tencent.com/developer/article/1342775)

[Ubuntu 18.04 包管理器 - 安装 .NET Core](https://docs.microsoft.com/zh-cn/dotnet/core/install/linux-package-manager-ubuntu-1804)

[.net core 下载与安装](https://dotnet.microsoft.com/download)

[使用 Nginx 在 Linux 上托管 ASP.NET Core](https://docs.microsoft.com/zh-cn/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-3.1)

开发人员常用命令：
```
远程连接：
ssh root@xxx.xxx.xxx.xxx

重启：reboot

22端口是否启动：lsof -i:22
cd /etc/ssh/
sudo vi ssh_config

查看端口相关操作：
查看指定端口，可以结合grep命令：sudo netstat -ap | grep 8500
------------------------------------------------------------
查看进程ID相关操作：
列出占用端口的进程ID: sudo netstat -antup 

查看磁盘空闲情况：df -a
查看内存使用量：top/free -m

.net core相关：
dotnet --list-sdks

systemctl操作应用的服务：
sudo systemctl start/stop/restart/status consul.service

查看服务日志：
sudo journalctl -fu consul.service

Linux wget 下载：
sudo wget https://vscode-update.azurewebsites.net/latest/linux-deb-x64/stable -O /tmp/code_latest_amd64.deb
sudo dpkg -i /tmp/code_latest_amd64.deb

测试端口：
telnet xxx.xxx.xx.xx 5000 

解压xxx.tar.gz文件：tar -zxvf studio.tar.gz

```
