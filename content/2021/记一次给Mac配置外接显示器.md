---
title: 记一次给Mac配置外接显示器
excerpt: 记录配置外接显示器的过程和遇到的问题
date: 2021-12-20
category: 技术
tags: ['Mac', '显示器', '硬件']
---
    
通过什么值得买app，在翻看值榜单时，翻阅到显示器榜单，然后萌生了给自己配置一个显示器的念头，也因为自己看电脑时间久，眼睛会很不舒服的问题；通过多款显示器比较，评价及评测，最终选择了明基PD2500Q这款。

## 使用中遇到的问题

```
如何外接显示器
字体发虚
```
## 如何解决

### 外接显示器
1，首先将显示器与笔记本进行连接，我用的是type-c转HDMI转换器，将转换器直接和显示器带的HDMI线连接，连接好后，选取苹果菜单  > “系统偏好设置”，点按“显示器”，然后点按“排列”标签页。确保“镜像显示器”复选框处于选中状态。如下图所示：

![](https://api2.mubu.com/v3/document_image/847d2520-2cfd-41d6-9cda-9ea7b8277d72-977367.jpg)

2，也可使用扩展桌面模式
选取苹果菜单  > “系统偏好设置”，然后点按“显示器”。点按“排列”标签页。确保“镜像显示器”复选框处于未选中状态。排列您的显示器，以便与您办公桌上的布置保持一致。要更改显示器的位置，请将它拖移到所需位置。移动时，显示器周围会出现一个红色边框。要将另一台显示器设置为主显示器，请将菜单栏拖移到另一台显示器。主显示器是桌面图标和 App 窗口率先出现的位置。确保您的外置显示器已开启并已连接到您的 Mac。

![](https://api2.mubu.com/v3/document_image/5ad74437-c53d-456e-b794-bb449a64b135-977367.jpg)


### 字体发虚
 #### 开启HiDPI，效果如下：

![](https://api2.mubu.com/v3/document_image/862c40c9-5838-403b-9801-85a572b4cc80-977367.jpg)

#### 关闭 macOS 的 SIP
<font color='red'> SIP 「System Integrity Protection」即「系统完整性保护」</font>，先按照下面步骤把它关闭，以便后续操作：
1，关机
2，按一下电源键开机，然后按住 command（⌘）+ R，待进入恢复模式，松手
    ![](https://api2.mubu.com/v3/document_image/d0a44466-40b1-443f-b632-2a362f12245f-977367.jpg)
3，选择上边菜单栏的 实用工具 中的 终端。    
 ![](https://api2.mubu.com/v3/document_image/a3053736-aa09-4217-8bff-0d575423a70c-977367.jpg)
4，输入命令 csrutil disable。
![](https://api2.mubu.com/v3/document_image/5f286a6c-b6db-479b-a47e-1669561081b0-977367.jpg)
5，显示 「Successfully……」 说明关闭成功。可以输入 reboot 回车重启，或者点左上角
![](https://api2.mubu.com/v3/document_image/4d69bae5-7cac-471d-b80d-5da9fdcee56c-977367.jpg)

#### 下载one-key-hidpi自动脚本
链接: https://pan.baidu.com/s/1XlgYmuF-dBTNPMCmGOc9ag 提取码: 92c5 

1，首次运行时可能会提示”打不开“hidpi.command“，因为它来自身份不明的开发者”。需去“系统设置”——“安全与隐私”里面允许打开此软件。

![](https://api2.mubu.com/v3/document_image/28c04e07-9092-405d-a666-b64bd1e1e94e-977367.jpg)

2，输入本机macOS密码（密码不显示），回车。

![](https://api2.mubu.com/v3/document_image/58b61d4c-6643-4025-84e1-4f5c9e85d90b-977367.jpg)

3，按照提示，结合自身情况进行选择

![](https://api2.mubu.com/v3/document_image/063bc595-5d3d-45f7-b1fc-8dfded2cbf94-977367.jpg)

4，选择1开启HIDPI，回车。
如果选1有“花屏”或“电脑睡眠后必须通过开盖才能点亮外接显示器”的问题，则选2；
如果后续要关闭HiDPI，则选3。

![](https://api2.mubu.com/v3/document_image/efd83dbc-0f10-4664-b9fd-8f9e3f68db9e-977367.jpg)


5，最后出现这张图片，表明开启成功

![](https://api2.mubu.com/v3/document_image/6759ab66-185a-43f4-8898-b33778753bdd-977367.jpg)

最后可用RDM软件来切换hidpi分辨率(带闪电标志的)，RDM可比macOS分辨率缩放中show出更多hidpi分辨率。
(RDM需另外安装，注意Main Display，Display2和实物的对应关系)

![](https://api2.mubu.com/v3/document_image/8c038bd4-5e6b-4c47-ae4a-dc268d5b67f4-977367.jpg)

#### 恢复    

1，如果使用此脚本后，开机无法进入系统，请进macOS 恢复模式中或使用 clover -x 安全模式进入系统，打开“终端”，快捷恢复：

```
ls /Volumes/
cd /Volumes/你的系统盘/System/Library/Displays/Contents/Resources/Overrides/HIDPI
./disable
```

2，HiDPI成功开启后，为了系统的安全，一定记得重新开启macOS的SIP：
重复之前关闭SIP的步骤，打开“终端”，输入 csrutil enable并回车， 重启生效。
查看 SIP 当前状态，输入「csrutil status」后回车即可。

![](https://api2.mubu.com/v3/document_image/177bb805-6739-4bdf-a381-dc8cb3f9b4b6-977367.jpg)

## 使用感受

```
明基有多种图像模式，其中选择M-book模式，观感确实和原Mac体验差不多
因为购买的这款是2K屏，故即使在开启hdpi下，字体观感整体感受，还是逊于原显示器观感，不够细腻
明基的智慧调光和省电传感器，体验还是很棒的，前者就是可以根据当前环境自动调整屏幕亮度，后者是人离开屏幕会自动熄屏
```

## 购买建议

```
Mac用户，最好上4K
```
