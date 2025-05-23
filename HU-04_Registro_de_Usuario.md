# Historia de Usuario: Registro de Usuario

## Descripción

**Como visitante del sitio** quiero poder registrarme en el sistema proporcionando mis datos personales para crear una cuenta y acceder a los servicios del lavadero.

**Programador:** Daniel Cerquera

---

## Criterios de Aceptación

- El formulario de registro solicita: nombre, correo, contraseña, celular, cédula, tipo de cédula y rol.
- Las contraseñas se almacenan de forma encriptada en la base de datos.
- El sistema valida que el correo no esté previamente registrado.
- El usuario recibe una confirmación después del registro exitoso.
- El sistema implementa validaciones para asegurar que los datos ingresados sean correctos.

---

## Definición de Listo (DoR - Definition of Ready)

- Se han definido los campos necesarios para el registro.
- Se han establecido las validaciones requeridas para cada campo.
- Se ha definido el método de encriptación para las contraseñas.
- Se ha diseñado el flujo de registro y sus mensajes de confirmación/error.

---

## Definición de Hecho (DoD - Definition of Done)

- El formulario de registro funciona correctamente.
- Las validaciones previenen el ingreso de datos incorrectos.
- Las contraseñas se almacenan encriptadas en la base de datos.
- Las pruebas unitarias y de integración han sido ejecutadas exitosamente.
- La interfaz cumple con los estándares de diseño del sistema.

---

## Prioridad y Estimación

- **Prioridad:** Alta  
- **Estimación:** 4 días

---

## Tareas

- Diseñar e implementar el formulario de registro.
- Desarrollar el sistema de validación de datos.
- Implementar el sistema de encriptación de contraseñas.
- Crear el flujo de confirmación de registro.
- Realizar pruebas de validación y seguridad.

---

## Backend

```java
@PostMapping("/register")
public ResponseEntity<?> registerUser(@RequestBody User user) {
    try {
        User newUser = userService.registerUser(user);
        return ResponseEntity.ok(newUser);
    } catch (RuntimeException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
```
## Frontend

### registrarse.component.html

```html
<ion-content class="ion-padding">
  <div class="container ion-text-center">
    <ion-grid class="ion-no-padding" style="max-width: 900px; margin: auto;">
      <ion-row>
        <ion-col size="12" size-md="6" class="ion-hide-md-down">
          <img src="assets/Imagen6.png" alt="Lavadero Luxury" class="img-fluid" style="height: 100%; object-fit: cover;">
        </ion-col>
        <ion-col size="12" size-md="6">
          <h2 class="ion-text-center">Registrarse</h2>
          <form (ngSubmit)="register()" #form="ngForm" novalidate>
            <ion-item>
              <ion-label position="floating">Nombre *</ion-label>
              <ion-input [(ngModel)]="usuario.nombre" name="registroNombre" required></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Correo *</ion-label>
              <ion-input type="email" [(ngModel)]="usuario.correo" name="registroCorreo" required></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Contraseña *</ion-label>
              <ion-input type="password" [(ngModel)]="usuario.password" name="registroPassword" required></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Celular *</ion-label>
              <ion-input type="tel" [(ngModel)]="usuario.celular" name="registroCelular" required></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Cédula *</ion-label>
              <ion-input type="text" [(ngModel)]="usuario.cedula" name="registroCedula" required></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Tipo de Cédula *</ion-label>
              <ion-select [(ngModel)]="usuario.tipoCedula" name="registroTipoCedula" interface="popover" required>
                <ion-select-option value="CC">Cédula de Ciudadanía</ion-select-option>
                <ion-select-option value="CE">Cédula de Extranjería</ion-select-option>
                <ion-select-option value="TI">Tarjeta de Identidad</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-label>Rol *</ion-label>
              <ion-select [(ngModel)]="usuario.rol" name="registroRol" interface="popover" required>
                <ion-select-option value="cliente">Cliente</ion-select-option>
                <ion-select-option value="admin">Administrador</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-button expand="block" type="submit" color="dark" class="ion-margin-top">
              Registrarse
            </ion-button>
          </form>
          <ion-text class="ion-margin-top">
            ¿Ya tienes una cuenta?
            <a routerLink="/inicio-sesion">Iniciar Sesión</a>
          </ion-text>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
  <ion-alert
    *ngIf="alerta"
    [isOpen]="true"
    [header]="alerta.titulo"
    [message]="alerta.mensaje"
    [buttons]="[{ text: 'OK', role: 'confirm', handler: onAlertConfirm.bind(this) }]"
  ></ion-alert>
</ion-content>

```
### registrarse.component.ts

```java
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LavaderoService } from '../services/lavadero.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.scss',
  standalone: false,
})
export class RegisterComponent {
  usuario = {
    nombre: '',
    correo: '',
    password: '',
    celular: '',
    tipoCedula: 'CC',
    cedula: '',
    rol: ''
  };

  alerta: { titulo: string; mensaje: string } | null = null;

  constructor(private lavaderoService: LavaderoService, private router: Router) {}

  async register() {
    if (
      !this.usuario.nombre.trim() ||
      !this.usuario.correo.trim() ||
      !this.usuario.password.trim() ||
      !this.usuario.celular.trim() ||
      !this.usuario.cedula.trim() ||
      !this.usuario.tipoCedula.trim() ||
      !this.usuario.rol.trim()
    ) {
      this.mostrarAlerta('Campos incompletos', 'Por favor, complete todos los campos antes de registrarse.');
      return;
    }

    this.usuario.celular = this.usuario.celular.toString();
    this.usuario.cedula = this.usuario.cedula.toString();

    try {
      this.lavaderoService.registrarUsuario(this.usuario).subscribe({
        next: (response) => {
          this.mostrarAlerta('¡Registro exitoso!', 'Tu cuenta ha sido creada correctamente.');
          setTimeout(() => this.router.navigate(['/inicio-sesion']), 1500);
        },
        error: (err) => {
          let errorMessage = 'No se pudo completar el registro. Intenta de nuevo.';
          if (err.status === 400) {
            if (err.error.includes('correo')) {
              errorMessage = 'El correo ya está en uso.';
            } else if (err.error.includes('celular')) {
              errorMessage = 'El número de celular ya está en uso.';
            } else if (err.error.includes('cédula y tipo de cédula')) {
              errorMessage = 'Ya existe un usuario con esta cédula y este tipo de cédula.';
            } else {
              errorMessage = err.error;
            }
          } else if (err.status === 500) {
            errorMessage = 'Error en el servidor. Intente más tarde.';
          }
          this.mostrarAlerta('Error', errorMessage);
        }
      });
    } catch (error) {
      this.mostrarAlerta('Error', 'Error al intentar registrar usuario.');
    }
  }

  mostrarAlerta(titulo: string, mensaje: string) {
    this.alerta = { titulo, mensaje };
  }

  onAlertConfirm() {
    this.alerta = null;
  }
}

```