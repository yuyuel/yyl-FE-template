# 快速启动模板

基于vue-cli3.o，集成vue-router，vueX，axios。

## 安装
```
yarn install
```

### 开发环境
```
yarn run dev
```

### 打包
```
yarn run build
```

### 测试
```
yarn run test
```

### Lints
```
yarn run lint
```

## 相关集成

### svg-icon

在阿里巴巴矢量图库，下载svg格式icon。导入src/icons/svg,即可使用，使用方式`<svg-icon icon-class="xxx" />`

[阿里巴巴矢量图库](https://www.iconfont.cn/)

### plopfile

通过运行`npm run new `来新建component或者view.创建基本模板。可进行进一步的配置。

[plopfile](https://github.com/amwmedia/plop)

### 数据模拟

使用[Easy Mock](https://easy-mock.com/)生成一些随机数据，具体写法可参考[Mock.js文档](http://mockjs.com/examples.html)

### css配置

配置了less与postcss,引入px-to-viewport的解决方案，移动端设计，设计为以750px宽度为基准