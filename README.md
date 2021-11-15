## vue/cli生成vue2工程推荐项目结构目录

main.js主入口，router路由划分
plugins 自己或第三方插件,包括但不限于plugins、components、directives、filters、third lib
pages 所有路由页面。原则：轻page，重component
components 所有组件。包括业务公用组件、页面独有组件
api api引入入口
assets less、图片资源入口，不常修改数据
utils 工具函数与配置文件夹
store 标准vuex格式，非必须

## 详细说明
.
|-- README.md  
|-- babel.config.js // babel配置  
|-- package-lock.json  
|-- package.json  
|-- public // 公用文件，不经过webpack处理  
|   |-- favicon.ico  
|    -- index.html  
|-- src  
|   |-- App.vue  // 主页面  
|   |-- api // 接口层  
|   |   |-- http.js  
|   |    -- index.js  
|   |-- assets // css、image、svg等资源  
|   |   |-- css // 基础less资源  
|   |   |   |-- global.less  
|   |   |   |-- reset.less  
|   |   |    -- variables.less  
|   |    -- img  
|   |        -- logo.png  
|   |-- components // 组件  
|   |   |-- common  
|   |    -- home  
|   |        -- HelloWorld.vue  
|   |-- main.js  
|   |-- plugins // 自己或第三方插件  
|   |   |-- directives.js  
|   |   |-- filters.js  
|   |    -- plugins.js  
|   |-- router  
|   |    -- index.js  
|   |-- store // vuex数据  
|   |   |-- index.js  
|   |    -- modules  
|   |       |-- counter.js  
|   |        -- index.js  
|   |-- utils  
|   |    -- config.js  
|    -- views // UI层(原则：轻page，重component)  
|       |-- about  
|       |    -- About.vue  
|       |-- home  
|       |    -- Home.vue  
|        -- todoList  
|            -- TodoList.vue  
 -- vue.config.js // vue-cli主配置，修改webpack  


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
