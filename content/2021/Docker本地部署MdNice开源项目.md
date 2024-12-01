---
title: Docker本地部署MdNice开源项目
excerpt: 记录使用Docker部署MdNice项目的过程
date: 2021-06-15
category: 技术
tags: ['Docker', '部署', '开源项目']
---

## 本地部署

首先从 github 上 clone 下[项目](https://github.com/mdnice/markdown-nice "项目")

选择一个目录，git clone 项目地址



<!--more-->



```diff
➜  ~ cd GitHub
➜  GitHub git clone https://github.com.cnpmjs.org/mdnice/markdown-nice.git
```

然后用 IDE 打开项目，在项目终端执行命令

![安装yarn为全局变量](https://tva1.sinaimg.cn/large/008i3skNgy1gwrke0ys31j30o0086q37.jpg)

![安装依赖](https://tva1.sinaimg.cn/large/008i3skNgy1gwrkh8od52j30r206a3yp.jpg)

![运行项目](https://tva1.sinaimg.cn/large/008i3skNgy1gwrkjp13hdj30n807e0sw.jpg)

![项目展示](https://tva1.sinaimg.cn/large/008i3skNgy1gwrkzb93bej31ki0u0q7i.jpg)

可以看到本地已经可以使用了。

## Docker 部署

首先在项目终端执行命令，如图 1

![图1](https://tva1.sinaimg.cn/large/008i3skNgy1gwrl0wel5gj30mu070mxa.jpg)

![图2](https://tva1.sinaimg.cn/large/008i3skNgy1gwrl3qvfljj30l40owta6.jpg)

执行命令后，我们可以看到项目中多了目录 build，如图 2，这也是我们准备放到 nginx 上的内容。

打开 Docker，然后打开命令行，依次执行以下命令

安装 nginx 镜像，下图命令为获取最新版

```linux
docker pull nginx:latest
```

查看本地镜像

```linux
docker images
```

运行容器及项目

```linux
docker run --name nginx -p 8080:80 -v /GitHub/markdown-nice/build:/usr/share/nginx/html -d nginx:latest
```

参数说明：

- `--name nginx`：容器名称。
- `-p`： 端口进行映射，将本地 8080 端口映射到容器内部的 80 端口。
- `-v`： 主机目录 /GitHub/markdown-nice/build 映射到容器目录 /usr/share/nginx/html。
- `-d`： 设置容器在在后台一直运行。
