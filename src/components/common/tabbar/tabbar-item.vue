<template>
  <div class="tabbar-item" :style="activestyle" @click="btnChange">
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon2"></slot>
      <slot name="item-title"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activestyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    btnChange() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
.tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
}
/* .active {
  color: red;
} */
</style>