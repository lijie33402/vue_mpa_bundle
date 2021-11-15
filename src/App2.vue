<template>
  <div id="app">
    <a-button type="primary">使用Ant Design of Vue</a-button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import './assets/css/global.less';

#app {
  font-family: @font-family-regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
