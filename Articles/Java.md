# java developer

[AdoptOpenJDK 11](https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/)

[maven的安装、路径配置、修改库文件路径和eclipse中的配置、创建maven工程（转）](https://www.cnblogs.com/myseries/p/10846197.html)

[java加载文件示例](https://xuexiyuan.cn/article/detail/40.html)

```
java jdks:
AdoptOpenJDK as:
    AdoptOpenJDK 8
    AdoptOpenJDK 11
Red Hat OpenJDK
Oracle Java SE

java maven编译项目：mvn package

java加载文件（.properties）：
Properties properties = new Properties();
properties.load(MainApp.class.getClassLoader().getResourceAsStream("external.properties"));

java json序列化：
String jsonSource = JSON.toJSONString(result.getData());
JSONObject jobj = new JSONObject();
jobj.put("Stations", result.getData());
```