# 分布式之Consul

[示例源码](https://github.com/qq283335746/Yibi/tree/master/Src/Yibi/Consul)

一、环境搭建
```
当前使用系统：Ubuntu18.04
Consul安装与配置：
Deployment Guide:
https://learn.hashicorp.com/consul/advanced/day-1-operations/deployment-guide

How to setup Consul Cluster on Ubuntu 18.04 / Ubuntu 16.04 LTS：
https://computingforgeeks.com/how-to-install-consul-cluster-18-04-lts/

打开并修改 /etc/consul.d/server.hcl 为：
server = true
ui = true
client_addr = "0.0.0.0"

打开并修改 /etc/consul.d/consul.hcl 为:
datacenter = "dc1"
data_dir = "/opt/consul"
encrypt = "Luj2FZWwlt8475wD1WtwUQ=="

配置集群：
现有3台机器，分别是57、58、59，现思路是：将57作为集群中的server leader，58作为server,59作为client，他们的配置分别如下：
57的server.hcl保留上述配置并添加如下配置：
node_name="consul57" 
58的server.hcl保留上述配置并添加如下配置：
node_name="consul58"
retry_join=["xx.xxx.x.57"]
59的server.hcl保留上述配置并添加/修改如下配置：
server = false
node_name="consul59"
retry_join=["xx.xxx.x.57"]

分别启动运行consul服务即可。

```
二、Consul HTTP API
```
调用consul restful api，实现服务注册与发现。
```

三、相关参考链接

[consul ui官方](https://learn.hashicorp.com/consul/getting-started/ui)

[consul负载均衡-官方 Load Balancing Strategies for Consul](https://www.hashicorp.com/blog/load-balancing-strategies-for-consul/)

[注册中心 Consul 使用详解（含服务注册与发现比较）](http://www.360linker.com/wfw/657.jhtml)

[Consul负载均衡策略](https://juejin.im/post/5be4073df265da613b6f450a)

