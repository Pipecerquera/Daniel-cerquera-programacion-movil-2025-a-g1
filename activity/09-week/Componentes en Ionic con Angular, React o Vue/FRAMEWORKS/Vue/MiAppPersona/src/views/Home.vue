<template>
  <div class="home">
    <h1>Bienvenido</h1>
    <p>Ingresa los datos de la persona:</p>
    <form @submit.prevent="guardarPersona">
      <input type="text" v-model="persona.nombre" placeholder="Nombre" required />
      <input type="email" v-model="persona.correo" placeholder="Correo" required />
      <input type="tel" v-model="persona.telefono" placeholder="Teléfono" required />
      <input type="text" v-model="persona.cedula" placeholder="Cédula" required />
      <button type="submit">Guardar</button>
      <button type="button" @click="cancelar">Cancelar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persona: {
        nombre: "",
        correo: "",
        telefono: "",
        cedula: ""
      }
    };
  },
  methods: {
    guardarPersona() {
      console.log("Datos guardados:", this.persona);
      alert("Persona guardada con éxito");
    },
    cancelar() {
      this.persona = { nombre: "", correo: "", telefono: "", cedula: "" };
    }
  }
};
</script>

<style scoped>
.home {
  max-width: 400px;
  margin: auto;
  text-align: center;
}

form input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}

button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
</style>
