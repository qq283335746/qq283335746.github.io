#  消息队列

RabbitMQ：
```
几个重要概念：

Broker：简单来说就是消息队列服务器实体。
Exchange：消息交换机，它指定消息按什么规则，路由到哪个队列。
Queue：消息队列载体，每个消息都会被投入到一个或多个队列。
Binding：绑定，它的作用就是把exchange和queue按照路由规则绑定起来。
Routing Key：路由关键字，exchange根据这个关键字进行消息投递。
vhost：虚拟主机，一个broker里可以开设多个vhost，用作不同用户的权限分离。
producer：消息生产者，就是投递消息的程序。
consumer：消息消费者，就是接受消息的程序。
channel：消息通道，在客户端的每个连接里，可建立多个channel，每个channel代表一个会话任务。

使用过程：

客户端连接到消息队列服务器，打开一个channel。
客户端声明一个exchange，并设置相关属性。
客户端声明一个queue，并设置相关属性。
客户端使用routing key，在exchange和queue之间建立好绑定关系。
客户端投递消息到exchange。
exchange接收到消息后，就根据消息的key和已经设置的binding，进行消息路由，将消息投递到一个或多个队列里。

```

[NetMQ](https://github.com/zeromq/netmq)

[EQueue - 一个C#写的开源分布式消息队列的总体介绍](https://www.cnblogs.com/netfocus/p/3595410.html)

