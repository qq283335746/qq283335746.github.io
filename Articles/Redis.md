# 分布式架构之Redis

[redis Download](https://redis.io/download)

[Redis on Windows](https://github.com/microsoftarchive/redis/releases)

[在 windows 上安装 Redis](https://redis.com.cn/redis-installation.html)

[示例源码](https://github.com/qq283335746/Yibi/tree/master/Src/Yibi/Cache)

[安装Chocolatey Redis 包并安装redis](https://chocolatey.org/packages/redis-64/)

[How To Install and Secure Redis on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-install-secure-redis-centos-7)

[分布式缓存在 ASP.NET Core 中](https://docs.microsoft.com/zh-cn/aspnet/core/performance/caching/distributed?view=aspnetcore-2.2)

[ASP.NET Core 中的分布式缓存](https://docs.microsoft.com/zh-cn/aspnet/core/performance/caching/distributed?view=aspnetcore-3.1)

[Redis命令、教程等](http://www.redis.net.cn/order/3662.html)

[How To Run Redis On Windows 10](https://www.techomoro.com/how-to-run-redis-on-windows-10/)

一、环境搭建
```
当前使用系统：Ubuntu18.04
安装与配置：

How To Install and Secure Redis on Ubuntu 18.04:
https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04

How to Install Redis on Ubuntu 18.04 & 16.04 LTS:
https://tecadmin.net/install-redis-ubuntu/

sudo apt update
sudo apt install redis-server

```
二、相关工具
```
Redis数据管理工具：
redis-commander：
https://github.com/joeferner/redis-commander
redis-commander --open ，将使用浏览器打开

Install and Run：
npm install -g redis-commander
redis-commander

测试redis是否正常运行
C:\Program Files\Redis
redis-cli.exe -h 127.0.0.1 -p 6379
```

[RedisClient-redis可视化客户端工具](https://github.com/caoxinyu/RedisClient)

三、相关参考链接

DotNetCore+Redis
```
Microsoft.Extensions.Caching.Redis
Microsoft.Extensions.Caching.StackExchangeRedis
Stackexchange.redis
```
