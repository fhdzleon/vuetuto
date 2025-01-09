<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>{{ registerStore.name }}</h3>
    <h3>{{ registerStore.email }}</h3>
    <h3></h3>
    <ul>
      <li>
        <router-link to="/contador">Contador</router-link>
      </li>
      <li>
        <router-link to="/lista-de-tareas">Lista de tareas</router-link>
      </li>
      <li>
        <router-link to="/registrar">Registate</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRegisterStore } from "@/modules/registro/stores/registerStore";

const registerStore = useRegisterStore();
</script>
<style scoped>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
