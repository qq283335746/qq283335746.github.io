# java developer

[Microsoft Build of OpenJDK --微软java jdk](https://docs.microsoft.com/zh-cn/java/openjdk/)

[AdoptOpenJDK 11](https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/)

[How To Install Java with Apt on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04)

[maven的安装、路径配置、修改库文件路径和eclipse中的配置、创建maven工程（转）](https://www.cnblogs.com/myseries/p/10846197.html)

[java加载文件示例](https://xuexiyuan.cn/article/detail/40.html)

[Maven-打包和运行](https://blog.csdn.net/tjsahwj/article/details/84290760)

```
java jdks:
Microsoft Build of OpenJDK
AdoptOpenJDK as:
    AdoptOpenJDK 8
    AdoptOpenJDK 11
Red Hat OpenJDK
Oracle Java SE

jdk与jre：如果你的电脑不是用来开发 Java 程序的，而仅仅是用来部署和运行 Java 程序的，那么完全可以不用安装 jdk，只需要安装 jre 即可。

java maven编译项目：mvn package
maven打包后无法直接运行，需maven-shade-plugin，然后mvn clean install即可。

systemd 执行java -jar：ExecStart=/usr/bin/java -jar externalDemo-1.0.1-SNAPSHOT.jar

java加载文件（.properties）：
Properties properties = new Properties();
properties.load(MainApp.class.getClassLoader().getResourceAsStream("external.properties"));

java json序列化：
String jsonSource = JSON.toJSONString(result.getData());
JSONObject jobj = new JSONObject();
jobj.put("Stations", result.getData());
```