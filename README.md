## vue+webpack+多页项目脚手架

移动端项目脚手架，项目所使用的工具如下：

> Node version v4.6.0

- webpack
- npm scripts

## 安装依赖包
- npm install ( 推荐使用cnpm，获取更快的下载速度以及防止node-sass未下载的情况 参考 [淘宝npm镜像](http://npm.taobao.org/) )


## 开发与上线
- npm run dev 启动webpack-dev-server和dev构建环境
- npm run build 启动webpack product构建可发布的资源

## 模块化

js使用es6模块化规范来组织

##目录结构

<pre>

  |__ .gitignore        # 忽略文件
  |__ build     #项目构建目录
    |__ alias.js        #别名配置
    |__ get-entry.js    #获取入口的功能函数
    |__ page-title.js   #不同页面的title配置
    |__ webpack.config.base.js      #webpack基础配置
    |__ webpack.config.dev.js       #webpack开发环境配置
    |__ webpack.config.product.js   #webpack生产环境配置
  |__ index.ejs     #基础模板
  |__ package.json      #项目配置
  |__ README.md     #项目说明
  |__ src
    |__ components      #组件
      |__ index      #首页的组件
      |__ login      #登录页的组件
    |__ entry       #入口
      |__ index.js      #首页入口
      |__ login.js      #登录页入口
    |__ images      #静态图片
    |__ scripts     #静态js
    |__ styles      #静态样式

</pre>