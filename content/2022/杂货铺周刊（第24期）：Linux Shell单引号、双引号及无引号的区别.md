---
title: 杂货铺周刊（第24期）：Linux Shell单引号、双引号及无引号的区别
excerpt: 详解Linux Shell中各种引号的使用场景和区别
date: 2022-06-19
category: 周刊
tags: ['Linux', 'Shell', '技术']
---

这里记录每周值得分享的内容，周六或周日发布。

如果你有好的内容及建议，欢迎投稿，留言反馈。

<!--more-->

## 理财

[一次性买入与分批买入，我该怎么选？](https://youzhiyouxing.cn/n/materials/1256 "一次性买入与分批买入，我该怎么选？")

前情回顾：我有一笔钱，现在的温度不高，我该选择一次性投入还是分批买入？

我们可以假定只有这一次选择的机会，不可重复。两种选择的赔率差不多，输赢也只是收益率的差别而已，并不会有丢掉性命这样的极端情况，这种情况下理性的选择应该选择胜率更大的方式。

根据文章，从历史数据回测来看，市场相对低估值时，一次性买入要比分批买入的收益要高；而市场相对高估值时，分批买入的收益要比一次性买入要高。

![](https://api2.mubu.com/v3/document_image/41a2d10d-1099-4732-b9fc-bb6b48bdd257-977367.jpg)

我们可以结合有知有行的温度计，进行判断，当温度低估时，更适合一次性买入，就像前不久市场最低的时候，温度计是 0° ，但可能会给我们带来不好的体验；当温度中估或震荡市时，可以选择分批买入，而在温度高估时，如果必须要买，分批买入相对来说更好一些，但更多要做的其实是耐心持有，让子弹多飞一会儿，如果达到我们心里阈值的话，可以选择分批卖出。


## 开发

1、[linux shell单引号、双引号及无引号区别](https://blog.51cto.com/sunyu/799589 "linux shell单引号、双引号及无引号区别")

**单引号**

所见即所得，单引号里是什么内容，就输出什么内容。

**双引号**

如果双引号中的内容有命令、变量等，会先解析，再输出内容。

**不加引号**

如果内容中有命令、变量等，会先解析，再输出内容，如果字符中带有空格等特殊字符，则不能完整的输出，解决办法是加双引号。


2、[命令模式](https://book.douban.com/subject/2243615/ "命令模式")

*命令模式*，将“请求”封装成对象，以便使用不同的请求，队列或者日志来参数化其他对象。命令模式也支持可撤销的操作。

![](https://api2.mubu.com/v3/document_image/d6b47491-2c9f-43aa-99ed-6c216896e5bb-977367.jpg)

具体案例为遥控器，如上图类图展示，通过创建遥控器对象，将命令传递给遥控器对象，通过遥控中的开关按钮，实现每个命令，代码如下：

![](https://api2.mubu.com/v3/document_image/e32aed2b-596c-45fb-a905-e566ef270ccc-977367.jpg)

命令模式还可以用在队列请求，比如日程安排、线程池、工作队列等；命令模式还可以用在日志请求上，比如记录应用的所有动作，在应用死机后，重新调用这些动作恢复到之前的状态。

3、[MySQL的CASE WHEN用法](https://www.cnblogs.com/qlqwjy/p/7476533.html "MySQL的CASE WHEN用法")

归纳为两种用法：

>1. 单个值判断


```
# 简单case函数
case sex
when '1' then '男'
when '2' then '女’
else '其他' 
end
```

```
# case搜索函数
case 
when sex = '1' then '男'
when sex = '2' then '女'
else '其他' 
end  
```

>2. 多个值判断

```
case 
when col in ('a','b') then '第一类'
when col in ('c') then '第二类'
else '其他' 
end  
```

4、[MySQL中varchar类型数据排序的方法](http://t.csdn.cn/R1Sof "MySQL中varchar类型数据排序的方法")

归纳为两种方法：

>1. 手动转换类型

在排序字段+0即可，例如
```
select code from province 
order by code+0 desc limit 10;
```

>2. 使用转换函数CAST/CONVERT

例如：

```
select code from province order by 
CAST(server_id as SIGNED) desc limit 10;
或者
select code from province order by 
CAST(server_id as UNSIGNED INT) desc limit 10;
```
```
select code from province order by 
CONVERT (code, SIGNED) desc limit 10 ;
```

**SIGNED** 和 **UNSIGNED INT**的**区别**：

UNSIGNED 类型（<=0 || >=0）能保存2倍于 SIGNED 类型的正整数数据，且 UNSIGNED 类型数据为非负数（>=0）。

比如MySQL中signed int，取值是 $\ce{-2^31}$~$\ce{2^31 - 1}$，即：-2147483648 ~ 2147483647。
unsigned int，取值是0~$\ce{2^32 -1}$，即：0 ~ 4294967295。
可以看出 UNSIGNED 类型正整数数据是 SIGNED 类型正整数数据的2倍。

## 科普

[空调时开时关更省电？](https://www.fx361.cc/page/2021/0830/8812689.shtml "空调时开时关更省电？")

结论：频繁开关空调，反而更费电。

原因：空调启动阶段的能耗很高，如果多次重启，总能耗会超过空调一直开着的能耗。并且空调工作时间越长，对比越明显。

合理的做法：缩小室内外温度差，尽量减少室内和室外的热交换，是更有效的空调省电方法。也就是说关闭门窗，处于密闭状态，合理利用睡眠模式以及使用变频空调，可以起到省电作用。


## 工具

1、[i 微信读书插件](https://secreter.github.io/ireader/index.html "i 微信读书插件")

![](https://api2.mubu.com/v3/document_image/9926075f-5912-4fd4-be3d-ce57d161e688-977367.jpg)

微信读书网页版辅助工具，支持划线生成图片书签、笔记同步到第三方（readwise、flomo、notion）、 一键导出笔记、更换主题、更换字体等。

2、[Saladict 沙拉查词](https://saladict.crimx.com/ "Saladict 沙拉查词")

![](https://api2.mubu.com/v3/document_image/67f7fd08-fa63-451b-86c6-908d73981989-977367.jpg)
![](https://api2.mubu.com/v3/document_image/5522663a-26df-4c5f-a4b3-bf984266ed8f-977367.jpg)

一个网页端的查词辅助工具，可以双语言显示，如上图，它有多种查词模式，还支持多个词典，最重要的还是免费。

## 摘选


1、

如果人生的每一个阶段，都能清晰的知道自己该做什么，做对的事情，做核心的事情，人生就会越来越好。

——[清仓万科及投资反思](https://mp.weixin.qq.com/s/zU3kug3BXuV9azbkA_Itsw "清仓万科及投资反思")

2、

知识会弥补这种物质的渴望，物质的东西追求是没有止境的，更多的应该专注于自己要做的事情上，就当你把事情做成功的时候，这个物质的东西好像就没有那么重要了。

——[清北博士学霸夫妻：知识会弥补你对物质的渴望！](https://www.douyin.com/video/7106449257455996173 "清北博士学霸夫妻：知识会弥补你对物质的渴望！")

3、

天上的白云，蔚蓝的天空，舒服的小风，都是免费的。幸福，也很简单，它就在我们身边。

——[A股，太强了](https://mp.weixin.qq.com/s/QtpJ10nQbmRC_AgksE3F0A "A股，太强了")

4、

人类行为受到工作环境的强烈影响，你会变成环境要求你成为的样子。

要小心你的工作，它会改变你，让你成为另一个人。

——[科技爱好者周刊（第209期）：程序员是怎样的人](https://mp.weixin.qq.com/s/ihPq0Ka9faeodL-8pRsF1Q "科技爱好者周刊（第209期）：程序员是怎样的人")

以上，就是本周想和你分享的内容。