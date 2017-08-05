## 大罗 xx 项目

项目是外包项目，需要一套代码支持三个网站展示。

### 数据结构

三个网站分别是

* 大罗融资， 部署到 www.daluofinance.com
* 大罗经纪， 部署到 www.daluobroker.com
* 大罗科技， 部署到 www.daluotech.com

三个网站的区别在于

1. title 
2. Logo
3. 二维码
4. 详情页中有一个名字也不一样

于是有数据结构

```
// 使用如此长的名字是为了跟 router.url
site = {
    daluofinance:{
        name: '融资',
        logo: 'path/to/logo.png',
        qr: 'path/to/qr.png'
    },
    daluobroker:{
        name: '经纪',
        logo: 'path/to/logo.png',
        qr: 'path/to/qr.png'
    },
    daluotech:{
        name: '科技',
        logo: 'path/to/logo.png',
        qr: 'path/to/qr.png'
    }
}
```

## 页面结构

内容页面有六个

* 首页 home
* 气象风险 weather
* 解决方案 solution
* 强强联合 union
* 产品列表 product
* 联系我们 connect

功能页面有五个，由于是五个 modal 窗口，所以无需页面支持， 在 nav 中实现即可
 
* 扫我扫我 scan()
* 关于我们 about()
* 常见问题 faq()
* 在线咨询 online()
* 投诉建议 service()

### 导航栏

hover 状态展开，默认状态关闭，只显示 icon。所以宽度是固定到icon 宽度。

### 首页

首页为三个 icon + 
