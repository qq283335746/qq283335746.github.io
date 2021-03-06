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

```