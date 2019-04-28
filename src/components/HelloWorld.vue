<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <svg-icon icon-class="bug" class="a" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Here we go'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.a {
  color: #42b983;
  font-size: 50px;
}
.hello {
  transform: translate(10, 10)
}
</style>
