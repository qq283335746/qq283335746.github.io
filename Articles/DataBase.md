# 数据库之Sqlite

[DB Browser for SQLite - SQLite客户端工具](https://sqlitebrowser.org/)
[.net core 使用sqlite](https://docs.microsoft.com/zh-cn/ef/core/get-started/netcore/new-db-sqlite)
[在 ASP.NET Core MVC 项目中使用 SQLite](https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/first-mvc-app-xplat/working-with-sql)
[How can I access sqlite DB from another machine?](https://www.codeproject.com/Questions/1166694/How-can-I-access-sqlite-DB-from-another-machine)

```
导读：Sqlite is file-based only. There is no way to talk to it over TCP/IP.

Like an Access database file, you have to have the database file in a network shared folder. The path is usually going to be a UNC path, like "\\server\sharename\folderpath\databasefile".

The "DataSource" part has to be part of the string you build. You don't have that. You need this:
string connString = @"Data Source=\\" + txtipaddress.Text + @"\qscanDBAttacheds\test.s3db;Version=3;New=False;Compress=True;"

```

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

MySQL：

```
修改字段类型：
ALTER TABLE `YourDb`.`YourTable` 
CHANGE COLUMN `YourColumn` `YourColumn` CHAR(36)  not null

创建索引：
alter table `YourDb`.`YourTable` add index Index_OrderCode(`OrderCode`);

```

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

# 数据库之MongoDB

[Install MongoDB](https://docs.mongodb.com/manual/installation/)
```
1、选择windows、linux
2、点击“ MongoDB Download Center”或“https://www.mongodb.com/download-center/community?jmp=docs”，下载相应的安装包
3、运行安装
4、cd C:\Program Files\MongoDB\Server\4.2\bin 或配置系统环境变量Path
5、Mongo命令查看已安装信息（版本等）
```

管理工具客户端：
```
Robomongo
mongodb compass
```

MongoDB.Driver C#创建数据表索引：
```
方式1：
var userIndexModels = new List<CreateIndexModel<UserInfo>>();
var userIndexKeysByName = Builders<UserInfo>.IndexKeys.Combine(Builders<UserInfo>.IndexKeys.Ascending(m => m.AppId), Builders<UserInfo>.IndexKeys.Ascending(m => m.Name));
var userIndexKeysByPhone = Builders<UserInfo>.IndexKeys.Ascending(m => m.MobilePhone);
userIndexModels.Add(new CreateIndexModel<UserInfo>(userIndexKeysByName, new CreateIndexOptions { Unique = true, Name = "IndexKey_Name" }));
_db.GetCollection<UserInfo>("Users").CreateMany(userIndexModels);

方式2：
var userIndexModels = new List<CreateIndexModel<UserInfo>>();
userIndexModels.Add(new CreateIndexModel<UserInfo>("{ AppId: 1,Name:1 }", new CreateIndexOptions { Unique = true, Name = "IndexKey_Name" }));
userIndexModels.Add(new CreateIndexModel<UserInfo>("{ AppId: 1,MobilePhone:1 }", new CreateIndexOptions { Unique = true, Name = "IndexKey_MobilePhone" }));
_db.GetCollection<UserInfo>("Users").CreateMany(userIndexModels);

mongodb创建表时默认以Id创建了索引。

```

[Mongodb.Driver c# 开发示例文档](http://mongodb.github.io/mongo-csharp-driver/1.11/driver/)

[Mongodb .net driver 开发示例文档](http://mongodb.github.io/mongo-csharp-driver/2.4/getting_started/quick_tour/)

[关于Mongodb的全面总结](https://www.jianshu.com/p/7f4b8a97ecf0)

[fastdfs mongodb 几种分布式文件系统的性能对比](https://www.fuwuqizhijia.com/mongodb/201703/16550.html)

# 数据库技术集锦

[SQL Server 设置连接属性 --SQL Server 官方文档](https://docs.microsoft.com/zh-cn/sql/connect/jdbc/setting-the-connection-properties?view=sql-server-ver15)

[使用加密](https://docs.microsoft.com/zh-cn/sql/connect/jdbc/using-ssl-encryption?view=sql-server-ver15)

[DBConvert Studio 多数据库管理工具](https://dbconvert.com/download/)
[Navicat Premium 多数据库管理工具](https://www.navicat.com/en/products/navicat-premium)

[LiteDB(Embedded NoSQL database for .NET)](http://www.litedb.org/)

[LiteDBViewer(LiteDB数据库管理客户端)](https://github.com/falahati/LiteDBViewer)

[LiteDB github](https://github.com/mbdavid/LiteDB)

[LiteDB开发示例文档](https://github.com/mbdavid/LiteDB/wiki/Getting-Started)

SQLite + SpatiaLite、PostgreSQL + PostGIS

[Install MongoDB](https://docs.mongodb.com/manual/installation/)
```
MongoDB管理工具：Robo 3T
```

[使用 ASP.NET Core 和 MongoDB 创建 Web API](https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/first-mongo-app?view=aspnetcore-2.2&tabs=visual-studio)

[.NET Core Data Access](https://devblogs.microsoft.com/dotnet/net-core-data-access/)
```
技术点：ORM：EF Core，Dapper，NPoco
```

SQL Server：
```
windows身份认证连接字符串：Data Source=.;Integrated Security=SSPI;Initial Catalog=xxxDb;
```

数据库中的列转行、行转列
```
行转列  PIVOT
列转行  UNPIVOT

示例：
select y.*                                                            
 from (                                                                                                               
         select LNCode,CustStatus,Num                                                                                 
            from (                                                                                                    
                    select b.LNCode,isnull(CustStatus,'X') as CustStatus,COUNT(*) as Num                            
                      from table_1 a,users b where a.CheckType<>1 and a.SaleID=b.UserCode and b.LeaveStatus=0  
                      group by b.LNCode,isnull(CustStatus,'X')                                                      
                  ) x                                                                                                 
      ) act pivot(sum(Num) for CustStatus in (A,B,C,D,E,F,G,H,I,X)) y    

```
