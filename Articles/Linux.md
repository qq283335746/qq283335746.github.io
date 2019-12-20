# Linux开发人员宝典

[ubuntu16 环境配置](https://cloud.tencent.com/developer/article/1342775)

开发人员常用命令：
```
查看端口相关操作：
查看指定端口，可以结合grep命令：sudo netstat -ap | grep 8500
------------------------------------------------------------
查看进程ID相关操作：
列出占用端口的进程ID: sudo netstat -antup 

systemctl操作应用的服务：
sudo systemctl start/stop/restart/status consul.service

查看服务日志：
sudo journalctl -fu consul.service

Linux wget 下载：
sudo wget https://vscode-update.azurewebsites.net/latest/linux-deb-x64/stable -O /tmp/code_latest_amd64.deb
sudo dpkg -i /tmp/code_latest_amd64.deb
```
