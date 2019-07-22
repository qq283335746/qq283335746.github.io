# 分布式之Nacos

一、环境搭建
```
当前使用系统：Ubuntu18.04
安装与配置：
https://nacos.io/zh-cn/docs/quick-start.html

正常启动方式：
sh startup.sh -m standalone
但执行后报错，解决方法有2种：
方法1：bash -f ./startup.sh -m standalone
方法2：或者可以修改 startup.sh 头文件：
#!/bin/sh 改成 #!/bin/bash
然后采用 .startup.sh -m standalone &命令

运行成功后打开浏览器并访问：
http://192.168.21.131:8848/nacos/index.html
输入账号和密码：nacos
```