<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="currentMenu"
        theme="dark"
        mode="horizontal"
        @click="handleToggleMenu"
      >
        <a-menu-item key="/">Home</a-menu-item>
        <a-menu-item key="/shop">Shop</a-menu-item>
        <a-menu-item key="/manage">Manage</a-menu-item>
      </a-menu>
      <!-- <a-avatar src="../assets/img/avatar.png" /> -->
    </a-layout-header>
    <a-layout-content style="height: 100%;padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Manage</a-breadcrumb-item>
        <!-- <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item> -->
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">Content</div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref, getCurrentInstance, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const instance: any = getCurrentInstance()
    const _this = instance.appContext.config.globalProperties
    // 切换顶部菜单
    const handleToggleMenu = (menu: any) => {
      _this.$router.push(menu.key)
    }
    onMounted(() => {})
    return {
      currentMenu: ref<string[]>([_this.$route.path]), // 当前选中项菜单
      handleToggleMenu
    }
  }
})
</script>
<style>
[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>