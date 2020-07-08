# Visual Studio Code

[Remote Development using SSH -官方](https://code.visualstudio.com/docs/remote/ssh)

[VSCode使用Remote-SSH免密码登陆远程服务器](https://www.cnblogs.com/pzzrudlf/articles/12287162.html)

vscode Remote-SSH：
1、点击左下角><图标
2、Remote-SSH Connect to Host
3、ssh root@ip
4、选择 c:\Users\cimc\.ssh\config配置文件
5、输入远程Server的登录密码

免密连接linux：
1、生成ssh密钥（如git->git bash here）：ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa
2、生成后上传至服务器： ssh-copy-id root@ip
3、修改c:\Users\cimc\.ssh\config配置文件，添加如下配置节：
PubkeyAuthentication yes
IdentityFile "c:\Users\cimc\.ssh\id_rsa"
完毕！

教程：
配置ssh的key：
cd ~/.ssh
ssh-keygen
ssh-copy-id root@ip


