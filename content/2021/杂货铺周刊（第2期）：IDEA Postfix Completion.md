---
title: 杂货铺周刊（第2期）：IDEA Postfix Completion
excerpt: 介绍IDEA的代码补全功能使用技巧
date: 2021-12-04
category: 周刊
tags: ['IDEA', '开发工具', '效率']
---

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=370 height=86 src="//music.163.com/outchain/player?type=2&id=346576&auto=0&height=66"></iframe>

这里记录每周值得分享的内容，周六发布。

如果你有好的内容及建议，欢迎投稿，留言反馈。

<!--more-->

## 理财

### 1、股权融资

> 企业出让一定比例的股份来吸引新的股东加入，从而获取资金。

**方式**：比如股权质押，股权交易，私募发售等。

**影响**：稀释股东的股权，可能会影响公司的控制权。

**风险**：投资者自负盈亏。

### 2、债权融资

> 企业对外借钱，获取资金。

**方式**：比如银行贷款，发行债券，民间借贷等。

**影响**：债务到期时，企业要还本付息。

**风险**：如果企业暴雷，还不上钱，投资者可能血本无归。

## 开发

### 1、IDEA Postfix Completion

设置路径

**Windows**

> File -> Settings -> Editor -> General -> Postfix Completion

**Mac**

> IntelliJ IDEA -> Preferences -> Editor -> General -> Postfix Completion

![](https://api2.mubu.com/v3/document_image/a46b3bb5-5d7e-4a37-bf24-385a70f21b9d-977367.jpg)

比如工作中经常用到 List，我们就可以设置一个快捷方式，如下图

![](https://api2.mubu.com/v3/document_image/2e91bd97-de1d-4a46-81de-c2c3b581d6f2-977367.jpg)

效果如下：

![](https://api2.mubu.com/v3/document_image/72c339d5-2972-4890-8c7f-cda0edcec1e4-977367.jpg)

美中不足的是，丢失了一个空格，目前没找到解决办法。

**参数说明**

- key：自定义后缀的名称。
- Minimum language level：最低语言水平。
- Applicable expression types：适用的表达式类型。
- Apply to the topmost expression：应用于最上面的表达式。
- Use `$EXPR$` variable to refer target expression：使用`$EXPR$`变量来引用目标表达式。

### 2、5个内置注解（JDK自带）

@Override 

> 继承父类方法

@Deprecated 

> 不鼓励使用的方法，通常指它很危险或者存在更好的选择。

@SuppressWarnings 

>抑制警告

```java

抑制所有类型的警告

@SuppressWarnings("all")

抑制与可序列化类的 serialVersionUID 字段丢失有关的警告

@SuppressWarnings("serial")

在类的参数上使用泛型时，抑制与非特定类型有关的警告。

@SuppressWarnings("rawtypes")

抑制与未检查的操作有关的警告,比如集合没有用泛型来指定类型

@SuppressWarnings("unchecked")

抑制与未使用的代码相关的警告

@SuppressWarnings("unused")

抑制与废弃有关的警告，比如使用了已过时的方法

@SuppressWarnings("deprecation

```

@FunctionalInterface 

> 函数式接口

@SafeVarargs 

> 抑制堆污染警告

### 3、 4个元注解（能注解到注解上的注解）

@Target

> 描述注解可以用到什么地方，比如方法，类等。

@Retention（SOURCE < CLASS < RUNTIME）

> 用于描述注解的生命周期。

@Documented

> 标明该注解可以包含在JavaDoc中

@Inherited

> 标明子类可以继承父类中的该注解


## 科普

1、[冬梦](https://baike.baidu.com/item/北京2022年冬奥会会徽/59199395?fromtitle=冬梦&fromid=22259439 "冬梦")

![](https://api2.mubu.com/v3/document_image/5cda0939-943a-4676-8cba-c32c3553709b-977367.jpg)

北京2022年冬奥会会徽，冬梦。主要由会徽图形、文字标志、奥林匹克五环标志三个部分组成。

会徽图形在设计格局上分为上中下三部分的方式，主体形如一个不同渐变色相间的汉字“冬”的写意草书，将抽象的滑道、冰雪运动形态与书法结合，“冬”字下方两点顺势融为2022。

2、 [飞跃](https://baike.baidu.com/item/北京2022年冬残奥会会徽/59199454?bkfr=detailtbl&fromtitle=飞跃&fromid=22259448 "飞跃")

![](https://api2.mubu.com/v3/document_image/2ed34977-d0bb-42a3-bb09-d919d7762134-977367.jpg)

北京2022年冬残奥会会徽，飞跃。整体形如汉字“飞”的书法形态，又由上下两部分构成对角线，既可以把上半部分看作一位冲刺的滑雪运动员、下半部分看作滑板，又可以将两者结合整体视作一位坐在轮椅上的运动员，以矢量图形巧妙地描绘出一个向前滑行、冲向胜利的运动员的形象，以形象化的表达将雪杖、轮椅等冬残奥会特殊运动器械形态融入其中，展现了“飞跃”的动感和力度。

3、[冰墩墩](https://baike.baidu.com/item/冰墩墩?bkfr=detailtbl "冰墩墩")

![](https://api2.mubu.com/v3/document_image/f0a0e4c1-fa97-4c65-a30a-256b64ae4053-977367.jpg)

2022年北京冬季奥运会的吉祥物，是熊猫形象与冰晶外壳相结合，体现了冬季冰雪运动的特点。
熊猫是世界公认的中国国宝，形象友好可爱、憨态可掬。

熊猫头部装饰彩色光环，其灵感源自于北京冬奥会的国家速滑馆——“冰丝带”。流动色彩线条，象征着冰雪运动的赛道和5G高科技；头部外壳造型取自冰雪运动头盔。熊猫整体造型像航天员，是一位来自未来的冰雪运动专家，寓意现代科技和冰雪运动的结合。

4、[雪容融](https://baike.baidu.com/item/雪容融?bkfr=detailtbl "雪容融")

![](https://api2.mubu.com/v3/document_image/4d23b5cf-9d52-42b9-95e4-cf1a7ce8865a-977367.jpg)

2022年北京冬季残奥会的吉祥物，整体设计与其灵感来源——灯笼的主要特征高度契合，并融入了大量中国传统文化符号和冬季的季节性要素。

从正面看，雪容融最突出的特点为面部的雪块，其样式是拍打积雪而形成的自然脸部形态，可在不同场景下作出丰富的表情变化。

细节方面，雪容融头顶有一个如意环，被雪覆盖住的一段纹样是长城的城墙图案；下一层为剪纸图案，采用正负形的设计手法，正形是北京“京鸽”图案，表示欢迎世界各地五洲四海的运动员来到中国参加体育盛会，负形则为北京地标性建筑——天坛的剪影。吉祥物的双足上还围绕有一圈如意纹。

## 工具

1、[Time Out](https://sspai.com/post/33602 "Time Out")

![](https://api2.mubu.com/v3/document_image/933bddbf-7bbd-47e2-9275-68e531a1d7e3-977367.jpg)

一个Mac端提醒休息的软件，使用了几天，感觉很有帮助，推荐。

2、 [自由钢琴](https://www.autopiano.cn/ "自由钢琴")

一个在线弹奏钢琴的网站，有曲谱及键位教学，还可以进行创作发布。

3、 [在线屏幕检测](https://screen.bmcx.com/#welcome "在线屏幕检测")

一个在线检测屏幕的网站，对于初步的检测还是蛮有帮助的，像我平时常用纯黑全屏，来擦屏幕。

4、 [地图搜租房](https://house-map.cn/#/ "地图搜租房")

![](https://api2.mubu.com/v3/document_image/66ea1793-a34a-445a-9578-94fc34cd37a6-977367.jpg)

可根据上班地址、出行一键查询附近可选择的出租信息，也可通过关键字快速定位，目前支持15个城市。

5、 [租房搜索助手](http://uz.yurixu.com/manage/beijing.php "租房搜索助手")

![](https://api2.mubu.com/v3/document_image/d73fcc9e-f737-4aec-9fc5-cae3385b88c7-977367.jpg)

主要分行政区域和地铁线路搜索租房，可搭配地图搜租房使用，目前支持12个城市。

6、[Nazo Game](https://nazo.one-story.cn/ "Nazo Game")

一个在线益智解密游戏，比较适合开发人员探索，难度有些高，目前只过了四关。


## 摘选

1、

低级的欲望，放纵即可获得，

高级的欲望，克制才能得到，

顶级的欲望，通过煎熬才能获得。

2、

岁月极美，

在于它必然的流逝。

春花、秋月、夏日、冬雪。

——[三毛《随想》](https://book.douban.com/subject/1061572/ "三毛《随想》")

3、 

现在是初冬，公园的树木都在主动凋零，无边落木萧萧下，它们放弃了一个春夏所积累的浮华。

但越是如此，越能减少水分的蒸发，从而熬过干冷的冬天。而且叶子少了，阻力也小了，在凛冽的北风下，树枝不容易折断，更容易保存下来。

止损也一样，它是放弃了亏损的持仓，也丢掉了风险，切断了亏损继续扩大的可能性，从而获得了生机。

不想放弃的根本，是不愿失去。

而要想不失去，不是靠自己紧紧抓住，最高明的方法是靠吸引力，让对方主动黏过来，甩也甩不掉。

——复利人生



