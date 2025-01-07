<template>
  <p>
    {{ contador }}
  </p>
  <button @click="incrementar">+</button>
  <button @click="decrementar">-</button>
</template>

<script setup>
import { ref } from "vue";

const contador = ref(10);

const incrementar = () => {
  contador.value++;
};

const decrementar = () => {
  contador.value--;
};
</script>

<style scoped></style>
