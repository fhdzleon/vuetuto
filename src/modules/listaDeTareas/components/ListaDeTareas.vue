<script setup>
import { ref } from "vue";

let identificador = 0;
const tareas = ref([]);
const nuevaTarea = ref("");

// Agregar tarea
const addTarea = () => {
  if (tareas.value.some((tarea) => tarea.text === nuevaTarea.value.trim())) {
    alert("Ya tienes agregada esta tarea");
  } else if (nuevaTarea.value.trim() === "") {
    alert("El campo está vacío");
  } else {
    tareas.value.push({ id: identificador, text: nuevaTarea.value.trim() });
    identificador++;
    nuevaTarea.value = "";
  }
};

const borrarTarea = (id) => {
  tareas.value = tareas.value.filter((tarea) => tarea.id !== id);
};
</script>

<template>
  <div>
    <h2>Lista de Tareas</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea" />
    <ul>
      <li v-for="tarea in tareas" :key="tarea.id">
        {{ tarea.text }}

        <button @click="borrarTarea(tarea.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
