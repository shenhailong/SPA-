# supermarket

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


遇到的坑
1、Me页面 路由切换watch没有监听到userInfo变化但是页面确实获取到了

解决：给主路由加上<keep-alive><／keep-alive>，主要用于保留组件状态或避免重新渲染。但不是很理解
