<template>
  <div class="persona-card">
    <h3>{{ persona.nombre }}</h3>
    <p><strong>Cédula:</strong> {{ persona.cedula }}</p>
    <p><strong>Teléfono:</strong> {{ persona.telefono }}</p>
    <p><strong>Correo:</strong> {{ persona.correo }}</p>
  </div>
</template>

<script>
export default {
  props: ['persona']
};
</script>

<style scoped>
.persona-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  background: white;
}
</style>
