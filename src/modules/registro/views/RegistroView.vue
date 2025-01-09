<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit" class="form">
      <div class="input">
        <label for="name">Nombre</label>
        <Field
          v-model="name"
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          id="name"
        />
        <ErrorMessage class="errorMesage" name="name" />
      </div>
      <div class="input">
        <label for="email">E-mail</label>
        <Field
          v-model="email"
          type="email"
          placeholder="Ingrese su email"
          name="email"
          id="email"
        />
        <ErrorMessage class="errorMesage" name="email" />
      </div>
      <button type="submit">Registrar</button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { schema } from "../schemas/validationSchema";
import { useRegisterStore } from "../stores/registerStore";
import { ref } from "vue";

const registerStore = useRegisterStore();
const name = ref("");
const email = ref("");

const onSubmit = (values, { resetForm }) => {
  registerStore.saveRegister(name.value, email.value);
  alert("Regitro enviado");
  resetForm();
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 20px;
}

.form button {
  background-color: blue;
  opacity: 70%;
  color: white;
  padding: 7px 0px;
}

.form input {
  padding: 5px 10px;
}

.input {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.errorMesage {
  color: #fe0000;
  font-size: medium;
}
</style>
