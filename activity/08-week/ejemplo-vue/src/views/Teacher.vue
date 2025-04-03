<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Profesor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profesor</ion-title>
        </ion-toolbar>
      </ion-header>

      <BasicData />
      
      <ion-list>
        <ion-item>
          <ion-input id="entryDate" label="Fecha Ingreso" type="date" placeholder="dd-mm-yyyy"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input id="salary" label="Salario" type="text" placeholder="1.430.000"></ion-input>
        </ion-item>
        <ion-item>
          <ion-checkbox slot="start" id="status"></ion-checkbox>
          <ion-label>Estado</ion-label>
        </ion-item>
      </ion-list>

      <ButtonComponent />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonCheckbox, IonLabel } from '@ionic/vue';
import BasicData from '@/components/ComponentBasicData.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>
