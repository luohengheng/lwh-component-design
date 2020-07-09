#### 该项目是仿Ant Design组件 主要技术就Hooks + TS

#### 前置学习知识
less基础  https://www.jianshu.com/p/d81496ed0e29

ts基础    https://ts.xcatliu.com/

hooks基础 https://reactjs.org/docs/hooks-intro.html

#### 开发模块

Button组件
* button类型包含'primary' | 'dashed' | 'dotted' | 'link'
* button支持icon属性
* button尺寸 
* link类型下href target属性
* 用户自定义样式
* 兼容button原生组件属性ButtonHTMLAttributes
* 兼容a链接原生组件属性AnchorHTMLAttributes

Icon组件
* (使用了react-fontawesome组件 https://github.com/FortAwesome/react-fontawesome)
* (图标库地址 https://fontawesome.com/icons?d=gallery)

安装
* npm i --save @fortawesome/fontawesome-svg-core 
* npm i --save @fortawesome/free-solid-svg-icons
* npm i --save @fortawesome/react-fontawesome

配置
>import { library } from '@fortawesome/fontawesome-svg-core'
 import { fas } from '@fortawesome/free-solid-svg-icons'
 library.add(fas)

功能
* 设置图标的主题色'primary' | 'success' | 'info' | 'warning' | 'danger'

