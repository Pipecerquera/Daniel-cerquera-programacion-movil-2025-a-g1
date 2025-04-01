<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Estudiante</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Estudiante</ion-title>
        </ion-toolbar>
      </ion-header>

      <BasicData />

      <ion-list>
        <ion-item>
          <ion-label>Semestre</ion-label>
          <ion-select placeholder="Seleccione un semestre">
            <ion-select-option v-for="semestre in 9" :key="semestre" :value="semestre">
              {{ semestre }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Facultad</ion-label>
          <ion-select placeholder="Seleccione una facultad" v-model="selectedFacultad">
            <ion-select-option value="Ingeniería">Ingeniería</ion-select-option>
            <ion-select-option value="Economía">Economía</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item v-if="programas.length > 0">
          <ion-label>Programa</ion-label>
          <ion-select placeholder="Seleccione un programa" v-model="selectedPrograma">
            <ion-select-option
              v-for="programa in programas"
              :key="programa"
              :value="programa"
            >
              {{ programa }}
            </ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
      <ButtonComponent></ButtonComponent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/vue'
import { ref, computed } from 'vue'
import BasicData from '@/components/ComponentBasicData.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

const selectedFacultad = ref('')
const selectedPrograma = ref('')

const programas = computed(() => {
  if (selectedFacultad.value === 'Ingeniería') {
    return ['Sistemas', 'Industria', 'Ambiental', 'Mecatrónica', 'Energías Renovables']
  } else if (selectedFacultad.value === 'Economía') {
    return ['Negocios Internacionales', 'Mercadeo y Publicidad', 'Turismo']
  } else {
    return []
  }
})
</script>
