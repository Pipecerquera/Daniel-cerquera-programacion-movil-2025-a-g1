<template>
  <ion-list>
    <ion-item>
      <ion-label>Tipo de Documento</ion-label>
      <ion-select placeholder="Seleccionar">
        <ion-select-option value="CC">CC</ion-select-option>
        <ion-select-option value="TI">TI</ion-select-option>
        <ion-select-option value="DNI">DNI</ion-select-option>
        <ion-select-option value="Pasaporte">Pasaporte</ion-select-option>
        <ion-select-option value="CE">CE</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-input id="documentNumber" label="Número de Documento" type="number" placeholder="Ingresar número de documento"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input id="name" label="Nombre" type="text" placeholder="Ingresar nombre"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input id="lastname" label="Apellido" type="text" placeholder="Ingresar apellido"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input id="email" label="Correo" type="email" placeholder="email@preject.edu.co"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input id="phone" label="Teléfono" type="tel" placeholder="888-888-8888"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input id="dateBirth" label="Fecha Nacimiento" type="date" placeholder="mm/dd/yyyy"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonInput, IonItem, IonList, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
</script>