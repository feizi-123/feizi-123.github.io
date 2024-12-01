---
title: 杂货铺周刊（第23期）：解决calibre导入书籍和传输书籍不是中文名称问题（mac）
excerpt: 分享在Mac系统下解决Calibre中文乱码的方法
date: 2022-05-29
category: 周刊
tags: ['技术', 'Mac', '电子书']
---

这里记录每周值得分享的内容，周六或周日发布。

如果你有好的内容及建议，欢迎投稿，留言反馈。

<!--more-->

## 理财

[你是跑赢CPI的穷人吗？如何正确理解通货膨胀](https://youzhiyouxing.cn/n/materials/766 "你是跑赢CPI的穷人吗？如何正确理解通货膨胀")

CPI是居民消费价格指数，反应的是消费价格的变动，也是观察通货膨胀的重要指标。但通货膨胀不等同于CPI的增长。国家统计局在官网有专门撰文解释，反映物价变化的CPI虽然是观察通胀的重要指标，却不是通货膨胀本身。**通货膨胀，是指货币发行量超过流通中实际所需量而引起的货币贬值现象。**

所以通货膨胀其实是货币贬值。那么我们该如何应对呢？

首先资产可以分为4大类：

> 1. 权益类资产，以股票指数基金为代表
>2. 债权类资产，以利率债指数基金为代表
>3. 大宗商品和REITs，以黄金、原油和REITs为代表
>4. 现金，为货币基金为代表

西格尔教授在《股市长线法宝》一书中，用142年的数据展示证明了
*在短期内（持有1年）股票、债券和短期国债都很难有效地对冲通胀风险，但是从长期来看（持有30年），股票的实际收益率几乎不受通胀影响，而债券收益率被远远抛在后面。*

如下图所示：

![数据来源：杰里米·西格尔，《股市长线法宝》](https://api2.mubu.com/v3/document_image/b16e566a-fa0f-46b6-9ff7-17f3aae0e574-977367.jpg)

当然，西格尔教授并不是第一个做出类似研究的人。早在1924年，埃德加·史密斯在《普通股长期投资》中以美国内战至20世纪初的数据证明：

*无论物价是上涨还是下跌，股票的表现都优于债券。*

所以我认为长期投资，最简单的策略，是股债组合，风险等级取决于股票仓位的比例，在市场整体低估时，卖债买股；在市场高估时，卖出部分股票仓位；这其中你的情绪变化是你自己要把握的，选择一个可以让你舒服的风险等级，比如说，你承受能力低，就选择债9股1，激进的时候，也只卖出少量债券，买入少量的股票，可能组合就变成债8股2的样子，当然你只有经历过一次大跌，才可能知道自己能承受多大的回撤，知道什么样的风险等级适合自己，投资理财的道路很长，我们一起修行，成为更好的人。

本周投资实证：

![](https://api2.mubu.com/v3/document_image/b683d179-1011-4f2e-bbcd-f2096204a38e-977367.jpg)

本周亏损0.38%，无操作。

## 开发

1、[BufferedReader读取UTF-8文件中文乱码问题](https://blog.csdn.net/maxracer/article/details/5436580 "BufferedReader读取UTF-8文件中文乱码问题")


```
BufferedReader read = new BufferedReader(new FileReader(new File(filename)));
```

换成

```
InputStreamReader inputStreamReader = new InputStreamReader(new FileInputStream(file), "UTF-8");
BufferedReader read = new BufferedReader(inputStreamReader);
```

2、[工厂模式](https://book.douban.com/subject/2243615/ "工厂模式")

*简单工厂*，它不是一个真正的模式，反而比较像是一种编程习惯。

像下面这样：

![](https://api2.mubu.com/v3/document_image/096573c5-984e-46ca-93f2-6eac7cba6d17-977367.jpg)

![](https://api2.mubu.com/v3/document_image/53a32450-bc35-4cf7-a7fe-f4dd11eacd0f-977367.jpg)

*工厂模式*：定义了一个创建对象的接口，但由子类决定要实例化的类是哪一个。工厂方法让类把实例化推迟到子类。

像下面这样：

![](https://api2.mubu.com/v3/document_image/7bb8a516-3f26-45fb-968c-088b47564e20-977367.jpg)
![](https://api2.mubu.com/v3/document_image/fdfd90b8-fa08-497a-9315-69763c870c31-977367.jpg)
![类图](https://api2.mubu.com/v3/document_image/d28f516a-b7bd-4be6-a53b-eed089e19007-977367.jpg)

上述类图，Creator就像是PizzaStore类，而ConcreteCreator就像是各个比萨店的子类，比如NYPizzaStore，
Product就是Pizza，ConcreteProduct是Product的各个子类，这里可以是NYStyleCheesePizza，然后是在NYPizzaStore中实际制造出的产品。

*抽象工厂模式*：提供了一个接口，用于创建相关或依赖对象的家族，而不需要明确指定具体类。

![](https://api2.mubu.com/v3/document_image/49145bc1-e730-48d0-8978-c07580e363f1-977367.jpg)

![](https://api2.mubu.com/v3/document_image/d18efb59-4a86-41f8-87d8-44d97916cd60-977367.jpg)

两张图结合来看，PizzaIngredientFactory这个类，定义了如何产生一个相关产品的家族，这个家族包含了所有制作比萨的原料。它的返回类型都是对象接口，而接口可以灵活实现多种类型，这里面的重点是，所有的工厂都是用来封装对象的创建，帮助我们针对接口编程，而不是针对具体类编程。

3、[解决calibre导入书籍和传输书籍不是中文名称问题（mac）](https://northmorn.com/post/calibre/calibre-utf8-name/ "解决calibre导入书籍和传输书籍不是中文名称问题")

参考文章，我做了以下几个步骤：

>1. 去官网下载最新版本软件，安装

>2. 下载源码

```
git clone https://github.com/kovidgoyal/calibre.git
```

>3. check out相应安装版本，根据需求修改源代码。

```
gco v5.43.0(gco = git checkout)
```
- 修改backend.py文件，删掉ascii_filename(）方法，解决导入书籍生成不是中文名称的问题。

- 修改smart_device_app包下的driver.py文件，修改内容如下：
  
  ![](https://api2.mubu.com/v3/document_image/7c898142-af69-435b-ac1d-76280e186321-977367.jpg)
  
  解决传输后书籍不是中文名称的问题。

>4. 创建快捷方式

```
vim /usr/local/bin/calibre-develop
```
写入内容

```
#!/bin/sh
export CALIBRE_DEVELOP_FROM="/Users/kovid/work/calibre/src"
calibre-debug -g
```
授予权限

```
chmod +x /usr/local/bin/calibre-develop
```
配置环境变量

```
#calibre
export CALIBRE=/Applications/calibre.app/Contents/MacOS
export PATH=$PATH:$CALIBRE
```

启动程序

```
calibre-develop 
```

## 科普

[病毒和细菌竟有这么多不同！](http://www.kepu.net.cn/ydrhcz/ydrhcz_zpzs/ydrh_2020/202002/t20200217_484465.html "病毒和细菌竟有这么多不同！")

抗生素是针对细菌感染的药物，对病毒感染无效。

细菌和病毒都是可能让人体生病的病原体，它们有以下不同：

1. 个体大小不同，细菌个体相对病毒药大得多。

2. 细胞结构不同，细菌是由单细胞或多细胞组成的简单生物，拥有细胞壁，而病毒不存在这种细胞结构。

3. 生存条件不同，病毒只能依靠其他生物的活细胞才能生存，细菌可以独立生存，也可寄生于生物体内，但仅寄生于细胞外。

4. 代谢方式不同，病毒没有自己的代谢系统，而细菌有很多不同的代谢方式。

5. 感染人的方式不同，细菌进入人体的方式有很多，且感染人不需要进入细胞，而病毒进入人体后，要想达到感染，还需要进入细胞。

6. 感染后的治疗方式不同，病毒感染使用抗病毒药物治疗，细菌感染，使用抗生素治疗。

## 工具

1、[书伴](https://bookfere.com/ "书伴")

![](https://api2.mubu.com/v3/document_image/b511285b-a649-42e7-b73f-a1d9674618a5-977367.jpg)

你的电子书伴侣，提供详细的越狱教程，这周我的Kindle越狱就是从这里学习的，网站也提供字典下载，越狱插件下载，后续的固件升级，以后一些Kindle常用工具和使用技巧。

2、[calibre](https://calibre-ebook.com/ "calibre")

![](https://api2.mubu.com/v3/document_image/0dccdf23-6a7c-4c6c-a133-104d48be1fc8-977367.jpg)

一个书籍管理库，支持本地阅读，格式转换，编辑书籍等，可以搭配Kindle实现无线传输和邮箱传输。


## 摘选


1、

随身携带地图是一回事，有人给你指路则完全是另一回事。

——[《十分钟冥想》](https://book.douban.com/subject/34888157/ "《十分钟冥想》")

2、


邮差一辈子都在路上，但终究只是个邮差。导游跑遍全世界，也还是导游。

眼界和格局的本质是，认知的广度和深度。不学习，不思考，哪怕行走万里，也不会有什么格局。

——[抓住本质](https://mp.weixin.qq.com/s/gaMR9CUqWXkkOb6ZC2xR8g "抓住本质")

3、

你看我们去赚钱，赚到了钱之后，我们可以用这个钱去买产品，买服务，但是我们去买这些产品，实际是获得感受。

当我们使用这些产品，当我们使用这些服务的过程中，我们获得了很美好的感受。

但其实我们每天工作的过程不就是感受，那这个比例怎么去计算呢，我们每个人每天8小时，这个8小时，一周就是40个小时，这么长的时间，你为什么要去为了换得那些钱去牺牲这个过程中的感受？

你换的那个钱不就是为了去买一些很好的感受或者怎么样的，所以我觉得它还是回到这个问题本身。

就我觉得从各个角度来讲，我们都应该去找自己真正喜欢真正擅长、真正热爱的事情，并且和自己尊敬的人一起去工作。

——[最好的投资，是投资自己](https://www.xiaoyuzhoufm.com/episode/628d02c183ddae2d9e72aa84?s=eyJ1IjogIjYyMzdlYWZmZWRjZTY3MTA0YTQzYTUyNSJ9 "最好的投资，是投资自己")

以上，就是本周想和你分享的内容。