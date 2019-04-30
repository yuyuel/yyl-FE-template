<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Index',
  components: { HelloWorld },
  props: {},
  data() {
    return {
      a: 'asd'
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
