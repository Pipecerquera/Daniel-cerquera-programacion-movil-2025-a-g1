<template>
  <div class="persona-form">
    <h2>Detalles de Persona</h2>
    <p><strong>Nombre:</strong> {{ persona.nombre }}</p>
    <p><strong>Correo:</strong> {{ persona.correo }}</p>
    <p><strong>Teléfono:</strong> {{ persona.telefono }}</p>
    <p><strong>Cédula:</strong> {{ persona.cedula }}</p>
    <button @click="volver">Volver</button>
  </div>
</template>

<script>
export default {
  props: ["persona"],
  methods: {
    volver() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.persona-form {
  text-align: center;
  max-width: 400px;
  margin: auto;
}
button {
  margin-top: 10px;
  padding: 10px;
}
</style>
