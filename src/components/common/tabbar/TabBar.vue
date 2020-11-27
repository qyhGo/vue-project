<template>
  <div class="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tabbar {
  display: flex;
  background-color: #f6f6f6;
  box-shadow: 0 2px 1px rgba(100, 100, 100, .2);
}
</style>