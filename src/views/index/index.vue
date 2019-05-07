<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld />
    <transition
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <p v-if="show">dayjs: {{ dayjs }}</p>
    </transition>
    <button @click="show = !show">小动画</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import dayjs from 'dayjs'

export default {
  name: 'Index',
  components: { HelloWorld },
  props: {},
  data() {
    return {
      a: 'asd',
      show: true
    }
  },
  computed: {
    dayjs() {
      return dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
  },
  created() {},
  mounted() { },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
