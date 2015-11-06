yf
==

yijile.com/f 易用轻css框架

> 本CSS为note4自用，可用于测试，note4随时可能会有大改动，再修复旧问题同时有些选择器可能也面目全非了。

# yf 1025重构
yf是一套基本css框架

### 基础样式

```html
<link href="css/style.css" rel="stylesheet" />
```

## yf5文件规范

### yf5-pc.html

浏览器兼容支持：IE7+，重点考虑PC桌面浏览器体验，并考虑少部分IE低版本用户

使用：HTML+5 （起初考虑使用XHTML，介于低版本浏览器使用**html5shiv**就能支持支持HTML5标签，所以放弃XHTML

```html
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<![endif]-->
```

<del> yf5-auto.html
浏览器兼容支持：IE8+，适用于电脑、平板、手机响应式设计开发
使用：HTML5
</del>
2014-11-19 删除，新解决方案通过综合pc+phone+plus达到相同目的及效果


### yf5-phone.html

浏览器兼容支持：不考虑PC桌面浏览器（只要指IE），用于移动设备端开发

使用：HTML5

### yf5-plus.html 一些常见的CSS解决方案



### 关于yf.html 

是最初yf框架最初版本，用到完全CSS重置，yf5建立在此基础上
