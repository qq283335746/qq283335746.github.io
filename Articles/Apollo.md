
# 分布式之Apollo（阿波罗）配置中心

一、环境搭建
```
system requirements: ubuntu18.04 x64

Step1  Install Java:

https://askubuntu.com/questions/84483/how-to-completely-uninstall-java:
apt list installed |grep java

java 8:
sudo apt install openjdk-8-jdk
sudo apt install openjdk-8-jre
或 sudo apt install java-1.8.0-openjdk.x86_64

https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04:
1、sudo apt install default-jre
2、java -version
3、sudo apt install default-jdk
4、javac -version

uninstall Java:
sudo dpkg --list | grep -i jdk
sudo apt-get purge openjdk*

说明：经测试，Apollo（阿波罗）不适合安装java 10

Step2 Install Maven:

https://linuxize.com/post/how-to-install-apache-maven-on-ubuntu-18-04/:
sudo apt update
sudo apt install maven
mvn -version

Step3  Install MySQL:

https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04:
sudo apt update
sudo apt install mysql-server

Step4 Install Apollo（阿波罗）:
新建根目录：/Publish/CtripcorpApollo
apollo Releases：https://github.com/ctripcorp/apollo/releases
sudo wget https://github.com/ctripcorp/apollo/archive/v1.3.0.tar.gz（v1.3.0即是apollo Releases发布的最新版本）
tar zxvf v1.3.0.tar.gz
在上述根目录下新建目录：apollo-configservice、apollo-adminservice、apollo-portal、Logs

打开编辑apollo-1.3.0/scripts/build.sh文件，将
# apollo config db info、# apollo portal db info、# meta server url 填写自己服务器的相应信息，
打包，运行：apollo-1.3.0/scripts/build.sh
复制：
apollo-1.3.0/apollo-configservice/target/apollo-configservice-1.3.0-github.zip =》 /Publish/CtripcorpApollo/apollo-configservice

apollo-1.3.0/apollo-adminservice/target/apollo-adminservice-1.3.0-github.zip =》 /Publish/CtripcorpApollo/apollo-adminservice

apollo-1.3.0/apollo-portal/target/apollo-portal-1.3.0-github.zip =》 /Publish/CtripcorpApollo/apollo-portal

解压缩上述三个xxx-1.3.0-github.zip文件，并分别打开scripts/startup.sh，修改LOG_DIR=//Publish/CtripcorpApollo/Logs
运行scripts/startup.sh即可。

```