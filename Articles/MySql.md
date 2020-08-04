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

safe-updates 模式下，无法执行update和delete 解决：
预先把这个模式关掉即可：SET SQL_SAFE_UPDATES=0;
```

二、客户端工具

[MySQL Workbench](https://dev.mysql.com/downloads/)

[Navicat Premium](https://www.navicat.com.cn/products/navicat-premium)

三、相关链接

[What is the best MySQL client for Mac OS X or Windows?](https://www.quora.com/What-is-the-best-MySQL-client-for-Mac-OS-X-or-Windows)

mysql开发常用代码
```
mysql启用事务：
using (MySqlConnection connection = new MySqlConnection(yourConnString))
{
    if (connection.State != System.Data.ConnectionState.Open) connection.Open();
    using (MySqlTransaction transaction = connection.BeginTransaction())
    {
        //...
    }
}
    
```