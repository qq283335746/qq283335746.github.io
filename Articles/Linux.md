# Linux开发人员宝典

[适用于 Linux 的 Windows 子系统文档](https://docs.microsoft.com/zh-cn/windows/wsl/)

[SecureCRT-linux远程工具](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt)

[WinSCP-linux文件管理工具](https://winscp.net/eng/download.php)

[ubuntu阿里云快速下载](http://mirrors.aliyun.com/ubuntu-releases/18.04/)

[ubuntu16 环境配置](https://cloud.tencent.com/developer/article/1342775)

[Ubuntu 18.04 包管理器 - 安装 .NET Core](https://docs.microsoft.com/zh-cn/dotnet/core/install/linux-package-manager-ubuntu-1804)

[.net core 下载与安装](https://dotnet.microsoft.com/download)

[使用 Nginx 在 Linux 上托管 ASP.NET Core](https://docs.microsoft.com/zh-cn/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-3.1)

[纯干货：23个服务器常见问题处理方法](https://baijiahao.baidu.com/s?id=1665926621488582098&wfr=spider&for=pc)

开发人员常用命令：
```

ssh root@xxx.xxx.xxx.xxx  --远程连接
reboot --重启
sudo apt install nginx  --ubuntu 安装nginx
systemctl status nginx  --查看nginx是否启动
nginx -s reload    -- /etc/nginx/sites-available/default文件修改后重加载
sudo -i 切换root

ss -an | grep 6379  --查看端口监听列表

cd /etc/ssh/
sudo vi ssh_config

lsb_release -a  --查看系统版本

查看端口相关操作：
查看指定端口，可以结合grep命令：sudo netstat -ap | grep 80 或 sudo netstat -apn | grep 80
22端口是否启动：lsof -i:22

------------------------------------------------------------
查看进程ID相关操作：
列出占用端口的进程ID: sudo netstat -antup 

查看磁盘空闲情况：df -a
查看内存使用量：top 或 free -m

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

sudo nano /etc/redis/redis.conf --nano 打开文件并编辑，ctrl+x退出 
sudo nano /etc/ssl/openssl.cnf

sudo update-ca-certificates --fresh  --更新证书

cat /etc/passwd

使用winscp远程连接工具，上传文件时报错：无法创建远程文件...无权访问，错误码3，服务器返回的错误信息：permission denied
解决：改etc/passwd文件，将当前登录用户的1000改为0即可。


```

# ubuntu 22.04 蓝牙
找不到蓝牙，运行：/usr/lib/bluetooth/bluetoothd -n -d ：
D-Bus setup failed connection 1.167 is not allow to own the service bluez due to security policies in the configuration file 
bluetoothd[8444] unable to get on D-Bus

