# Linux OS
[ChromeOS Flex](https://chrome100.dev/board/reven)

# Linux开发人员宝典

### [适用于 Linux 的 Windows 子系统文档](https://learn.microsoft.com/zh-cn/windows/wsl/)
```
问题：无法从'https://raw.githubusercontent.com/microsoft/WSL/master/distributions/DistributionInfo.json'提取列表分发。
无法解析服务器的名称或地址
解决：
1、在https://www.ipaddress.com输入raw.githubusercontent.com查询其ip4相关地址
打开C:\Windows\System32\drivers\etc\hosts，将上面得到的ip4地址添加，如：
185.199.108.133  raw.githubusercontent.com
185.199.109.133  raw.githubusercontent.com
185.199.110.133  raw.githubusercontent.com
185.199.111.133  raw.githubusercontent.com

--开启wsl2 systemd:
echo -e "[boot]\nsystemd=true" | sudo tee -a /etc/wsl.conf
wsl --shutdown --重启
systemctl list-unit-files --type=service --确认systemd是否已开启

```

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

--查看系统版本
lsb_release -a  
cat /proc/version 
uname -a

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

ubuntu 修改文件：sudo gedit xxx.conf sudo xedit main.conf

--创建文件夹/文件名
mkdir 文件夹名
touch 文件名.后缀类型

ubuntu 添加dotnet tool到环境变量：
cat << \EOF >> ~/.bash_profile
# Add .NET Core SDK tools
export PATH="$PATH:/home/yibi/.dotnet/tools"
EOF

```

### Postman linux
```
https://community.postman.com/t/interceptor-integration-for-postman-native-apps/5290
```

### ubuntu 为URL创建快捷方式：
[Create a shortcut for URL?](https://askubuntu.com/questions/359492/create-a-shortcut-for-url#:~:text=Additionally%2C%20like%20all%20solutions%20that%20involve%20a%20command,click%20on%20the%20shortcut%20and%20add%20execution%20permissions)

# ubuntu 22.04 蓝牙

问题：设置-蓝牙已关闭，点击开关无反应，运行：/usr/lib/bluetooth/bluetoothd -n -d 见：
D-Bus setup failed connection 1.167 is not allow to own the service bluez due to security policies in the configuration file 
bluetoothd[8444] unable to get on D-Bus

解决：？

/etc/bluetooth/main.conf：改为：ControllerMode=bredr，命令：sudo xedit main.conf
打开蓝牙：sudo hciconfig hci0 up
扫描蓝牙：sudo hciconfig iscan
启动蓝牙程序：bluetoothctl
启动/关闭蓝牙电源：power on/off
sudo journalctl -fu bluetooth.service
sudo hciconfig hci0 piscan:can't set scan mode on hci0:network is down (100)
sudo hciconfig hci0 up:can't init device hci0:Invalid request code (56)
sudo hciconfig hci0 reset
sudo lsmod

### [Fix Bluetooth rtl8761b Problem on Linux (Ubuntu 22.04)](https://fosspost.org/fix-bluetooth-rtl8761b-problem-on-linux-ubuntu-22-04/)
```
sudo dmesg | grep bluetooth
cd /lib/firmware/rtl_bt
sudo ln -s rtl8761b_config.bin rtl8761bu_config.bin
sudo ln -s rtl8761b_fw.bin rtl8761bu_fw.bin
```

关注下：Kodi播放器