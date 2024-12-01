---
title: 杂货铺周刊（第5期）：Merry Christmas
excerpt: 圣诞节特辑，分享节日见闻与感悟
date: 2021-12-25
category: 周刊
tags: ['生活', '节日', '随笔']
---

这里记录每周值得分享的内容，周六发布。

如果你有好的内容及建议，欢迎投稿，留言反馈。

<!--more-->

## 理财

[如何分析一只基金好不好？](http://fund.eastmoney.com/a/202004141454120795.html "如何分析一只基金好不好？")

- 判断它的类型

基金主要分为主动型和被动型，主动型分为股票型基金、债券型基金、混合型基金或者QDII等，被动型主要指指数基金，根据自己的风险选择相对应的基金。

- 查看它的成立时间及规模大小

成立时间选择3年及以上，有提供历史参考；规模大小不得少于1亿，有清盘风险，也不要选择规模超多100亿的基金，规模太大，影响灵活性，影响业绩收益。

- 查看它的历史业绩走势图

通过历史业绩和沪深300指数对比，看看它有没有整体跑赢大盘，我们也可以通过公式，算一下它的年化平均收益率。

![](https://api2.mubu.com/v3/document_image/6dbba5a0-020e-4ab2-9893-28a854fd6b34-977367.jpg)

- 查看它的年度涨幅

主要重点来看一下它在牛市和熊市的表现，是不是能达到我们的预期。

- 查看它的股债比例和持仓明细

虽然数据有一些滞后性，但也可以作为一些参考。
比如，通过股债比例，来判断基金经理是防守还是进攻；
通过持仓明细，看它的调仓换股的情况，看看基金经理有没有追点。

- 查看它的基金经理

如果发现基金经理换人了，那么就要多关注一下基金最近的业绩了。因为买主动型基金，其实也买的是基金经理。


## 开发

1、[日志记录最佳实践](https://tuhrig.de/my-logging-best-practices/ "日志记录最佳实践")

主要有以下几点：

- 记录之后，而不是之前。

```java
// don't do that
log.info("Making request to REST API")
restClient.makeRequest()

// do that
restClient.makeRequest()
log.info("Made request to REST API")

```

- 单独的参数和消息

```java
// don't do that
restClient.makeRequest()
log.info("Made request to {} on REST API.", url)

// do that
restClient.makeRequest()
log.info("Made request to REST API. [url={}]", url)
```

- 区分警告和错误

```java
try {
    restClient.makeRequest()
    log.info("Made request to REST API. [url={}]", url)
} catch(e: UnauthorizedException) {
    log.warn("Request to REST API was rejected because user is unauthorized. [url={}, result={}]", url, result)
} catch(e: Exception) {
    log.error("Request to REST API failed. [url={}, exception={}]", url, exception)
}
```

- INFO 适用于业务，DEBUG 适用于技术

```java
DEBUG | Saved user to newsletter list. [user="Thomas", email="thomas@tuhrig.de"]
DEBUG | Send welcome mail. [user="Thomas", email="thomas@tuhrig.de"]
INFO  | User registered for newsletter. [user="Thomas", email="thomas@tuhrig.de"]
DEBUG | Started cron job to send newsletter of the day. [subscribers=24332]
INFO  | Newsletter send to user. [user="Thomas"]
INFO  | User unsubscribed from newsletter. [user="Thomas", email="thomas@tuhrig.de"]
```

2、[GitHub Actions](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html "GitHub Actions") 

![](https://api2.mubu.com/v3/document_image/3c4b87a3-ca04-42cd-adfb-13053b3add14-977367.jpg)

这是一个功能强大的自动化工具，是2018年10月推出的。它通过workflow文件（存放在代码仓库的.github/workflows下），完成一系列操作，比如说检出代码、打包、运行服务、同步代码等。官方提供了一个[市场](https://github.com/marketplace?type=actions "市场")，可以搜索他人提交的actions，另外，还有一个[awesome actions](https://github.com/sdras/awesome-actions "awesome actions") 的仓库，也可以找到不少action。
workflow文件的配置字段非常多，详见[官方文档](https://docs.github.com/cn/actions/learn-github-actions/events-that-trigger-workflows "官方文档")。

这里简单说一下，我用它做了什么。
>1. 对博客源码私有库进行监听，如果有提交，触发workflow执行。
>2. 对源码进行检出，进行打包。
>3. 对打包好的内容，选择指定目录推送到另一个公开仓库。
>4. 将公开仓库代码同步到gitee私有仓库。
>5. 最后更新gitee仓库的pages，完成自动部署。

3、[Builder模式](https://jiapengcai.gitbooks.io/effective-java/content/ "Builder模式")

```java
public class NutritionFactsBuilder {
    private final int servingSize;
    private final int servings;
    private final int calories;
    private final int fat;
    private final int sodium;
    private final int carbohydrate;

    public NutritionFactsBuilder(Builder builder) {
        this.servingSize = builder.servingSize;
        this.servings = builder.servings;
        this.calories = builder.calories;
        this.fat = builder.fat;
        this.sodium = builder.sodium;
        this.carbohydrate = builder.carbohydrate;
    }

    public static class Builder {
        // Required parameters
        private final int servingSize;
        private final int servings;
        
        // Optional parameters - initialized to default values
        private int calories;
        private int fat;
        private int sodium;
        private int carbohydrate;

        public Builder(int servingSize, int servings) {
            this.servingSize = servingSize;
            this.servings = servings;
        }

        public Builder calories(int val) {
            calories = calories;
            return this;
        }

        public Builder fat(int val) {
            fat = val;
            return this;
        }

        public Builder sodium(int val) {
            sodium = val;
            return this;
        }

        public Builder carbohydrate(int val) {
            carbohydrate = val;
            return this;
        }

        public NutritionFactsBuilder builder(){
            return new NutritionFactsBuilder(this);
        }
    }
}
```

```java
NutritionFactsBuilder builder = new NutritionFactsBuilder
                .Builder(240, 33)
                .sodium(1).
                calories(2).
                fat(2).builder();
```

**实现：** 如上代码，客户端不直接调用所需对象，而是调用builder对象的setter相似方法来设置每个可选参数。最后，客户端调用一个无参的build方法来生成对象。

**优点：** 它结合了可伸缩构造方法模式的安全性和JavaBean模式的可读性。

**缺点：** 为了创建对象，首先必须要创建它的builder，性能上稍有下降。

**适用：** 四个或更多的参数及在将来可能添加更多的参数。 
## 科普

[蚝油瓶的设计为什么一直不改进？](https://www.kepuchina.cn/more/202109/t20210910_3031692.shtml "蚝油瓶的设计为什么一直不改进？")

![](https://api2.mubu.com/v3/document_image/bb6418bf-29ef-4563-989f-97b67165e8ce-977367.jpg)

文章介绍了什么是蚝油，以及蚝油的营养价值。然后通过材料、包装及商业，3个方面回答了蚝油瓶的设计为什么一直不改进。
## 工具

1、[全历史](https://www.allhistory.com/ "全历史")

![](https://api2.mubu.com/v3/document_image/4132585d-80b5-456d-a33d-45a3bde0cdf7-977367.jpg)

一个让你更好了解历史的工具，主要分为画作、古籍、帝国、人物、战争、古迹，可直接搜索即可。
其中，我浏览了一下古籍中的《史记》，有提供文言和白话对照，阅读较佳。
全历史提供网页端和手机端。

2、[微信文件传输助手网页版](https://filehelper.weixin.qq.com/ "微信文件传输网页版")

![](https://api2.mubu.com/v3/document_image/1aa2e06f-8110-475b-8ecb-8b8ecc15df1c-977367.jpg)

扫码登录，你只能与自己的文件传输助手进行聊天，传输文件。它不会加载你的微信对话、联系人，更轻、更保护隐私，比如在使用陌生电脑时，就无需在别人电脑上登录微信了。

3、[在线查毒网站](https://www.virustotal.com/gui/home/upload "在线查毒网站")

![](https://api2.mubu.com/v3/document_image/66c09c89-2353-4384-8f97-d7c88d0c43de-977367.jpg)

一个在线分析文件（最大支持650M）、网址、IP等内容是否存在风险监测网址。

4、[在线小霸王游戏](https://www.yikm.net/ "在线小霸王游戏")

![](https://api2.mubu.com/v3/document_image/45f5136e-33b8-43eb-a361-b24273dfd69b-977367.jpg)

在线游戏网站，可和小伙伴来一局小霸王游戏，找回童年的快乐。

5、[AI生成英文手写体](https://www.calligrapher.ai/ "AI生成英文手写体")

![](https://api2.mubu.com/v3/document_image/8b062f6f-722c-40ab-9387-e8b5940b4bd9-977367.jpg)

输入英文（仅支持英文），可自动生成不同风格的手写体，可下载svg格式文件。

## 摘选

1、

家人是同在屋檐下生活的、至关重要的人。
铺满人生旅程的，永远不是追逐财富和财富本身，而是那些错过了就找不回来的温馨记忆。

——[投资家庭](https://www.jianshu.com/p/8938f5f83823 "投资家庭")

2、

没有多少人能做到急流勇退，赚钱永远是没够的。

既然一辈子都要在股市，就不能让策略有漏洞，否则哪怕再小的概率，都可能让所有的努力付之东流。

要想活得久，就要多想想，错了怎么办？遇到最坏的情况如何应对？

—— [复利人生](https://mp.weixin.qq.com/s/ujhjRcxnW-LNqXGlk5I8zw "复利人生")

以上，就是本周想和你分享的内容。