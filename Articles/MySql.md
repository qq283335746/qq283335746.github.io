# 数据库之MySql

一、环境搭建
```
当前使用系统：Ubuntu18.04

How To Install MySQL on Ubuntu 18.04：
https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04

How to Install MySQL on Ubuntu 18.04：
https://linuxize.com/post/how-to-install-mysql-on-ubuntu-18-04/

How to Install and Configure MySQL in Ubuntu 18.04 LTS：
https://vitux.com/how-to-install-and-configure-mysql-in-ubuntu-18-04-lts/

How to Install MySQL on Ubuntu 18.04：
https://www.rosehosting.com/blog/how-to-install-mysql-on-ubuntu-18-04/

sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf 将bind-address = 127.0.0.1注释掉或改为0.0.0.0

sudo systemctl status mysql.service
sudo systemctl restart mysql.service
sudo netstat -tap | grep mysql
mysql -u root -p 
show databases; 
use mysql;
show tables;
```

二、客户端工具

[MySQL Workbench](https://dev.mysql.com/downloads/)

三、相关链接

[What is the best MySQL client for Mac OS X or Windows?](https://www.quora.com/What-is-the-best-MySQL-client-for-Mac-OS-X-or-Windows)