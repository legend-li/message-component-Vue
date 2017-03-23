/**
 * Vue组件：消息弹窗
 * 
 * 作者：李增
 * 邮箱：634401745@qq.com
 * 
 * 组件安装方法：
 *   #1 引入Vue && message组件
 *     import Vue from 'Vue' 
 *     import Message from 'xxx/message'
 *   #2 安装组件
 *     Vue.use(Message);
 * 
 * 全局用法：
 *   Vue.prototype.$message(option);
 * 
 * 组件内部用法：
 *   this.$message(option);
 * 
 * options说明：
 * {
 *     title: '', // 弹窗标题内容，默认为空字符串，[type: String]
 *     content: '', // 弹窗正文内容，默认为空字符串，[type: String]
 *     transitionTime: 0.3, // 打开/关闭弹窗过渡时间，默认是0.3s，[type: Number, 单位:s]
 *     callback: '' // 回调函数，在弹窗关闭之后执行，[type: Function]
 * }
 */

import Message from './src/main.js';
Message.install = function (Vue, opts = {}) {
	Vue.prototype.$message = Message;
}
export default Message;