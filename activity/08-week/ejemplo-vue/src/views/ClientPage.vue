<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Cliente</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Cliente</ion-title>
        </ion-toolbar>
      </ion-header>
      <BasicData></BasicData>
      <ButtonComponent></ButtonComponent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import BasicData from '@/components/ComponentBasicData.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

</script>
