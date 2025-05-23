# Página Principal - Lavadero Luxury

## 🧑‍💻 Historia de Usuario

**Como** usuario del sistema,  
**quiero** acceder a una página principal con información sobre el lavadero Luxury  
**para** conocer los servicios ofrecidos y la información de la empresa.

**Programador:** Daniel Cerquera

---

## ✅ Criterios de Aceptación

- La página principal muestra claramente los servicios ofrecidos por el lavadero.
- Se incluye un pie de página con información "sobre nosotros".
- El encabezado contiene enlaces para iniciar sesión y registrarse.
- La interfaz es intuitiva y visualmente atractiva para los usuarios.
- El diseño es responsivo y se adapta a diferentes dispositivos.

---

## 📋 Definición de Listo (DoR - Definition of Ready)

- Se ha definido la estructura y contenido que debe tener la página principal.
- Se han identificado los servicios clave que deben destacarse.
- Se cuenta con la información corporativa para la sección "sobre nosotros".
- Se han establecido los estándares de diseño y experiencia de usuario.

---

## 📦 Definición de Hecho (DoD - Definition of Done)

- La página principal muestra correctamente toda la información requerida.
- Los enlaces al registro e inicio de sesión funcionan correctamente.
- La página ha sido probada en diferentes dispositivos y navegadores.
- El equipo de desarrollo y stakeholders han validado el diseño y contenido.
- La página cumple con los estándares de accesibilidad web.

---

## 🚦 Prioridad y Estimación

- **Prioridad:** Alta  
- **Estimación:** 3 días

---

## 💻 Implementación Frontend

### `inicio.component.html`

```html
<app-header></app-header>

<ion-content class="ion-padding">
  <!-- Hero Section -->
  <section class="hero ion-text-center ion-margin-vertical">
    <ion-card>
      <img src="assets/fondopng.png" alt="Car Wash Luxury" />
      <ion-card-content>
        <ion-button expand="block" size="large" color="dark" routerLink="/registrarse">
          Comprar Ahora
        </ion-button>
      </ion-card-content>
    </ion-card>
  </section>

  <!-- Services Section -->
  <section class="services">
    <ion-text color="primary">
      <h2 class="ion-text-center">Servicios</h2>
    </ion-text>

    <ion-grid class="ion-margin-top">
      <ion-row class="ion-justify-content-center">
        <!-- Lavado Express -->
        <ion-col size="6" size-md="4" size-lg="2.4" class="ion-text-center">
          <ion-card>
            <img src="assets/Imagen1.png" alt="Lavado Express" />
            <ion-card-header>
              <ion-card-title>Lavado Express</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-button size="small" color="primary" expand="block">Saber más</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>

        <!-- Lavado Completo -->
        <ion-col size="6" size-md="4" size-lg="2.4" class="ion-text-center">
          <ion-card>
            <img src="assets/Imagen2.png" alt="Lavado Completo" />
            <ion-card-header>
              <ion-card-title>Lavado Completo</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-button size="small" color="primary" expand="block">Saber más</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>

        <!-- Lavado a vapor -->
        <ion-col size="6" size-md="4" size-lg="2.4" class="ion-text-center">
          <ion-card>
            <img src="assets/Imagen3.png" alt="Lavado a vapor" />
            <ion-card-header>
              <ion-card-title>Lavado a vapor</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-button size="small" color="primary" expand="block">Saber más</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>

        <!-- Lavado de motor -->
        <ion-col size="6" size-md="4" size-lg="2.4" class="ion-text-center">
          <ion-card>
            <img src="assets/Imagen4.png" alt="Lavado de motor" />
            <ion-card-header>
              <ion-card-title>Lavado de motor</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-button size="small" color="primary" expand="block">Saber más</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>

        <!-- Lavado interno -->
        <ion-col size="6" size-md="4" size-lg="2.4" class="ion-text-center">
          <ion-card>
            <img src="assets/Imagen5.png" alt="Lavado interno" />
            <ion-card-header>
              <ion-card-title>Lavado interno</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-button size="small" color="primary" expand="block">Saber más</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </section>
</ion-content>
```

 ### inicio.component.ts

```java 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: false,
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  servicios = [
    { nombre: 'Lavado Express', img: 'assets/Imagen1.png' },
    { nombre: 'Lavado Completo', img: 'assets/Imagen2.png' },
    { nombre: 'Lavado a vapor', img: 'assets/Imagen3.png' },
    { nombre: 'Lavado de motor', img: 'assets/Imagen4.png' },
    { nombre: 'Lavado interno', img: 'assets/Imagen5.png' },
  ];
}
```


