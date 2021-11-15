// 一个插件示例，弹框警告，后期可以完善为调用一个弹框组件

export const toast = {
  install (Vue) {
    Vue.prototype.$toast = (msg) => {
      alert(msg)
    }
  }
}
