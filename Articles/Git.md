# git、github pages
```
导读：git开发使用技术、github pages相关技术等
```

[.gitignore 模板集合 ](https://github.com/github/gitignore)

[github docs](https://docs.github.com/cn)

[github pages帮助文档-中文](https://help.github.com/cn)

[开始使用 GitHub](https://docs.github.com/cn/enterprise-server@2.19/github/getting-started-with-github)

[Git 备忘清单 -中文](https://github.github.com/training-kit/downloads/zh_CN/github-git-cheat-sheet/)

[How to deploy Ionic 4 app to Github pages?](https://stackoverflow.com/questions/53036381/how-to-deploy-ionic-4-app-to-github-pages)

[Quickly deploy Angular CLI project to GitHub Pages：](https://medium.com/@swarnakishore/deploying-angular-cli-project-to-github-pages-db49246598a1)

[Operate Git with .NET Core](https://edi.wang/post/2019/3/26/operate-git-with-net-core)

[Getting Started with LibGit2Sharp](http://www.woodwardweb.com/git/getting_started_2.html)

[DocFx And Github Pages](http://www.hardkoded.com/blog/creating-docfx-site)

```
导读：使用DocFx生成适用于Github Pages。
```

[www.heroku.com](https://www.heroku.com/pricing)
```
免费的应用托管部署的云平台
```

git相关操作
```

git remote -v
git pull -f origin master

.gitignore不起作用解决方法：
git rm -r --cached .
git add .
git commit -m 'add .gitignore'
git push origin master

查找.svn目录并删除：
find . -name '.svn' -type d -print0 | xargs -0 rm -rf
git commit -a -m "Deleting all .svn folders and files"

git checkout --orphan gh-pages

# Always ensure you’re in the right place before deleting files with this command
git rm -rf .

创建新分支：git branch branchName
切换到新分支：git checkout branchName
```

TortoiseGit + Code Compare
```
TortoiseGit => 设置 => Diff Viewer：

第一个External：
C:\Program Files\Devart\Code Compare\CodeCompare.exe /B %base %mine

第二个External：
C:\Program Files\Devart\Code Compare\CodeCompare.exe

移除全局配置账户： git config --global --unset user.name
查看全局用户名：git config --global user.name
移除全局配置邮箱：git config --global --unset user.email
查看全局配置邮箱：git config --global user.email
移除全局配置密码：git config --global --unset user.password
查看全局配置密码：git config --global user.password
进入项目目录，打开终端输入以下命令进行绑定（每个仓库都需配置）:
git config user.name "qq283335746"
git config user.email "yourmail@email.com"
git config user.password "yourpassword"

使用 git remote set-url 命令将远程的 URL 从 SSH 更改为 HTTPS：
git remote set-url origin https://github.com/qq283335746/qq283335746.github.io.git


```

### git ssh-key
```

1、ssh-keygen -t rsa -C "yourname@email.com"
2、命名输入：id_rsa_github
3、输入密码：如123456
4、把上面得到的文件拷贝到git默认访问的.ssh目录：c:\用户\计算机名 => c:\用户\计算机名\.ssh
5、测试SSH密钥是否生效：ssh -T git@github.com 


```