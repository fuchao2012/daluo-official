# Official

这个项目使用 [Angular CLI](https://github.com/angular/angular-cli) 1.0.0 版本生产.

### 开发服务

执行 `ng serve` 开启测试服务器，打开浏览器 `http://localhost:4200/`，应用会自动刷新修改。

### 代码块生成器

执行 `ng generate component component-name` 来生成新的组件，当然也可以用来生成其他的代码块 `ng generate directive/pipe/service/class/module`.

### 编译

执行 `ng build` 来编译项目，目标代码会自动生成到 `dist/` 目录. 使用 `-prod` 参数标识生成生产代码，这会打开 aoT 编译。

### 执行单元测试

执行 `ng test` 来启动 [Karma](https://karma-runner.github.io) 编写的单元测试代码。

### 执行端到端测试

执行 `ng e2e` 来启动 [Protractor](http://www.protractortest.org/) 编写的端到端测试，启动之前，需要确保开启了开发服务器。

### 更多帮助

执行 `ng help` 查看帮助文档，或者去网页查看 [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

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
