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