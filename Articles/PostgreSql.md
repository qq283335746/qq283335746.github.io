# 数据库之PostgreSql
一、环境搭建
```
当前使用系统：Ubuntu18.04

How To Install and Use PostgreSQL on Ubuntu 18.04：
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04

How to Set the Default User Password in PostgreSQL：
https://chartio.com/resources/tutorials/how-to-set-the-default-user-password-in-postgresql/

Success. You can now start the database server using:
/usr/lib/postgresql/10/bin/pg_ctl -D /var/lib/postgresql/10/main -l logfile start
Ver Cluster Port Status Owner    Data directory              Log file
10  main    5432 down   postgres /var/lib/postgresql/10/main /var/log/postgresql/postgresql-10-main.log

postgresql config path: /etc/postgresql/10/main

远程连接配置：
1.修改postgresql.conf文件，将数据库服务器的监听模式修改为监听所有主机发出的连接请求。
改为：listen_addresses='*'
2.修改pg_hba.conf文件，配置用户的访问权限
添加一行 host   all    all   0.0.0.0/0    md5
3.重启postgresql服务：sudo service postgresql restart

sudo -i -u postgres

修改密码：
$ sudo -u postgres psql postgres
postgres=# \password postgres
```

二、客户端工具

[pgAdmin](https://www.pgadmin.org/download/)