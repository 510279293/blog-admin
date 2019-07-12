# 遇坑 1
# typings-for-css-modules-loader 安装后报错，不使用css-module 可能存在类名污染的问题,查证后发现typings-for-css-modules-loader 目前仅支持 css-loader 1.0.0 版本，因此执行命令： yarn add css-loader@1.0.0 完美解决

# 诡异问题： react-route 路由传参 用 this.props.match.match.params 获取不到参数

