---
title: GitHub Actions实现Hexo博客自动发布
excerpt: 使用GitHub Actions自动化部署Hexo博客
date: 2023-01-15
category: 技术
tags: ['GitHub', 'CI/CD', 'Hexo']
---

 记录GitHub Actions实现Hexo博客自动发布

<!--more-->

## 几个重要内容

### 仓库

一共涉及3个仓库：

1. GitHub私有库：存储Hexo项目文章及源码。
2. GitHub公共库：存储编译之后的静态页面。
3. Gitee私有库：和GitHub公共库内容一致，是通过GitHub公共库推送的。

### 思路

修改本地Hexo项目内容（GitHub私有库源码），触发Actions中的workflow，也就是deploy.yml的配置流程：

在源码push时，对Hexo项目进行编译打包，push到**GitHub公有库**，再将**GitHub公有库**同步到**Gitee私有库**，同步完成后，更新Gitee Pages。

### 配置

#### 一、在Hexo项目，打开控制台（Mac），执行下述命令：

```Bash
ssh-keygen -f hexo-deploy-key -t rsa -C "username@example.com"
```

说明：`username@example.com`可改成你的邮箱地址

会生成`hexo-deploy-key`、`hexo-deploy-key.pub`两个文件，分别代表私钥和公钥。

#### 二、 针对GitHub私有库进行下面配置：

GitHub私有库 -> Settings -> Secrets and variables -> Actions —> New repository secret

- Name：HEXO_DEPLOY_KEY
- Secret：`hexo-deploy-key` 的文件内容

再新建一个 GITEE_PASSWORD

- Name：GITEE_PASSWORD
- Secret：Gitee账号的密码

----
这一块后续在workflow中要用。

#### 三、针对GitHub公共库进行下面配置：

GitHub私有库 -> Settings -> Deploy keys —> Add deploy key

- Title：HEXO_DEPLOY_PUB
- Key：粘贴 `hexo-deploy-key.pub` 的文件内容

并勾选Read/write，Save。

#### 四、针对Gitee私有库进行下面配置：

账号 -> 设置 -> SSH公钥 -> 添加公钥

- 标题：HEXO_DEPLOY_KEY
- 公钥：粘贴 `hexo-deploy-key.pub` 的文件内容

#### 五、工作流

在**GitHub私有库**根目录下创建 .github/workflows/deploy.yml 文件，yaml文件名可以随意设置。

```yml

name: Automatic blog update # 该Action的名字

# on:何时触发该事件. 
on:
  # 在push或pull请求事件时触发工作流，但只针对主分支
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]


  # 允许从Actions选项卡手动运行此工作流
  workflow_dispatch:

# 工作流运行由一个或多个jobs组成，这些job可以按顺序或并行运行
jobs:
  # 此工作流包含一个名为“build-deploy”的job。
  build-deploy:
    # 改job运行于什么虚拟机上
    runs-on: ubuntu-latest

    # steps表示将作为job一部分执行的一系列任务
    steps:
      - uses: actions/checkout@master # 切换分支到master
        with:
         fetch-depth: 2 

      - name: Use Node.js 12.x  #使用nodejs 12.x版本
        uses: actions/setup-node@v1 
        with:
          node-version: '12.x'

      - name: install and build #安装以来并打包，执行的是项目我们定义的命令
        run: npm install && npm run build
        
      - name: deploy #部署
        uses: peaceiris/actions-gh-pages@v3 #和上面一样，这里使用的是他人写好的插件库，作用是发布到其他仓库中或者其他分支上，想要具体了解可以在插件库中搜索
        with:
          deploy_key: ${{ secrets.HEXO_DEPLOY_KEY }} # key
          external_repository: feizi-discipline/feizi-discipline-blog #推送到该仓库中，地址格式为github名称/仓库名，GitHub公共库
          publish_branch: master #分支名
          publish_dir: /home/runner/work/feizi-discipline/feizi-discipline/public #要推送的内容（打包后的博客文件夹）GitHub私有库
      - name: Sync to Gitee # 同步到Gitee
        uses: wearerequired/git-mirror-action@d5724af3876c8fdfdb59312c99df0d11b769ca8c
        env: # 注意在 Settings->Secrets 配置 GITEE_RSA_PRIVATE_KEY
          SSH_PRIVATE_KEY: ${{ secrets.HEXO_DEPLOY_KEY }}
        with:
          # 注意替换为你的 GitHub 公开仓库地址
          source-repo: git@github.com:feizi-discipline/feizi-discipline-blog.git #GitHub公共库
          # 注意替换为你的 Gitee 目标仓库地址
          destination-repo: git@gitee.com:feizi-discipline/feizi-discipline.git #Gitee私有库
      - name: deploy2 #部署到gitee
        uses: yanglbme/gitee-pages-action@main
        with:
          gitee-username: feizi-discipline
          gitee-password: ${{ secrets.GITEE_PASSWORD }} 
          gitee-repo: feizi-discipline/feizi-discipline #推送到该仓库中，地址格式为gitee名称/仓库名 Gitee私有库
          branch: master #分支名

```