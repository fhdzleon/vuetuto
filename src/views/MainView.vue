<template>
  <HeaderView />
  <div class="container">
    <Sidebar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/SidebarMenu.vue";
import HeaderView from "@/components/HeaderView.vue";
</script>

<style scoped>
.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
