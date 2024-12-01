---
title: 杂货铺周刊（第11期）：Spring配置的三种依赖注入
excerpt: 详解Spring框架中的依赖注入配置方法
date: 2022-02-04
category: 周刊
tags: ['Spring', 'Java', '技术']
---

这里记录每周值得分享的内容，周六发布。

如果你有好的内容及建议，欢迎投稿，留言反馈。

<!--more-->

## 理财

1、[市盈率（P/E）](https://baike.baidu.com/item/%E5%B8%82%E7%9B%88%E7%8E%87/90136 "市盈率（P/E）")

股价/每股收益的值，可理解为按照当前的赚钱速度，多少年可以收回成本。

作用：判断股价贵不贵的重要指标（周期行业除外）。

比如，某只股票，股价是30元，每股收益是0.3元。 
市盈率就是 30 / 0.3 = 100 也就是说这个股票，保持当前盈利的情况下，需要100年才能回本。

2、[市净率（P/B）](https://baike.baidu.com/item/%E5%B8%82%E5%87%80%E7%8E%87/357567?fr=aladdin "市净率（P/B）")

股价/每股净资产的值

作用：判断公司是否值钱的指标。

一般市净率越低的股票，投资价值较高。

比如，一家公司股票的市净率是3，也可以理解为你用了3倍的价格买下了这个资产。

## 开发

1、[查看日志](http://linux.51yip.com/search/grep "查看日志")

文件很大的情况，可以通过**grep**进行筛选查看或者输出。

比如：


```java
grep -C 1000 ‘2022年02月08日 09时59分’ catalina.out > temp_test.txt
```

**参数说明**

-A：匹配行后多少行。  
-B：匹配行前多少行。  
-C：匹配行前后多少行。

2、[Spring配置的三种依赖注入](https://www.mubucm.com/doc/6u24EVaY-wT "Spring配置的三种依赖注入")

- 构造函数注入（ constructor injection ）


```xml
<bean id= id = "orderService"    class = "com.lianxi.spring.OrderService" > 
<constructor-arg  ref = "orderDAO"/>
</bean>
```

- setter注入（setter injection）


```xml
<bean id= id = "billingService" class = "com.lianxi.spring.BillingService" >
<property  name = "billingDAO" ref = "billingDAO"/>
</bean>
```

- 方法注入（ method injection ）


```xml
<bean id="b" class="com.bean.B" scope="prototype">
<bean id="a" class="com.bean.A">
<lookup-method name="createB" bean="b"/>
<bean>
```

一般在配置中，我们只用前两种。其中构造函数注入可以确保bean不会在一个非法状态下被创建，setter注入更加灵活且易于管理，尤其是在类包含许多属性，但其中一些为可选的情况。


3、[服务器网络连接数](http://linux.51yip.com/search/netstat "服务器网络连接数")

```linux
netstat -ano | wc -l
```

**参数说明**

netstat：显示网络连接相关信息。  
wc：统计字节数、单词数、行数，并将统计结果显示输出。



## 科普

[什么样的人不建议泡脚？](https://mp.weixin.qq.com/s/nOUON6X1kwV86l8ed7G3kQ "什么样的人不建议泡脚？")

- 心脏病、低血压、心功能不全、有晕厥前科的人群需要谨慎。

- 糖尿病患者要格外注意水温。

- 静脉曲张或血栓人群不建议泡脚。

具体原因可见文章。


## 工具

1、[捌零音乐论坛](https://www.maomicd.com/ "捌零音乐论坛")

![](https://api2.mubu.com/v3/document_image/55be917b-2fcd-4432-9c8e-60502fa315f6-977367.jpg)

一个可以在线听歌及下载的网站，提供网易云、QQ、酷狗、酷我和咪咕主流播放器的歌曲搜索。

2、[美国之声](https://www.51voa.com/ "美国之声")

![](https://api2.mubu.com/v3/document_image/edffaec8-4e47-49d7-8078-80a29942dbc2-977367.jpg)

一个对学习英语有帮助的网站，网站对内容进行了分类，可根据自己感兴趣的内容进行广读、学习。


## 摘选

1、

如果有一天，你不再寻找爱情，只是去爱；  
你不再渴望成功，只是去做；  
不再追求空泛的成长，只是开始修养自己的性情；  
你的人生一切，才真正开始。

——[纪伯伦](https://www.douyin.com/video/7062268002078657796 "纪伯伦")


2、

山近月远觉月小，便道此山大于月。  
若有人眼大如天，当见山高月更阔。

——[王阳明《蔽月山房》](https://mp.weixin.qq.com/s/-gS7VCMGHkTYZcrXVgfBCA  "王阳明《蔽月山房》")

以上，就是本周想和你分享的内容。
