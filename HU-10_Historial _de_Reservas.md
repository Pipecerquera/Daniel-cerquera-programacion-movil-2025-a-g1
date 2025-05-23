# Historia de Usuario: Historial de Reservas

**Descripción:**

Como cliente registrado quiero poder ver el historial de mis reservas para dar seguimiento a los servicios solicitados y su estado.

**Programador:** Daniel Cerquera

---

## 🧪 Criterios de Aceptación

- Se muestra una lista con todas las reservas realizadas por el cliente.
- Cada entrada incluye: ID, fecha de la reserva, estado, servicio, método de pago y usuario.
- El cliente puede eliminar reservas desde el historial.
- Se implementan filtros por:
  - Fecha
  - Número de cédula
  - Placa
  - Tipo de vehículo
- La información se actualiza en tiempo real cuando se realizan nuevas reservas.

---

## ✅ Definición de Listo (DoR - Definition of Ready)

- Se ha definido la estructura para presentar el historial de reservas.
- Se han establecido los criterios de filtrado.
- Se ha diseñado la interfaz para mostrar esta información.
- Se ha definido el proceso para eliminar reservas.

---

## ✔️ Definición de Hecho (DoD - Definition of Done)

- La página de historial muestra correctamente todas las reservas del cliente.
- Los filtros funcionan adecuadamente y muestran los resultados esperados.
- La funcionalidad de eliminación de reservas funciona correctamente.
- La interfaz es intuitiva y fácil de usar.
- Las pruebas de funcionalidad han sido ejecutadas exitosamente.

---

## 📌 Prioridad y Estimación

- **Prioridad:** Media  
- **Estimación:** 3 días

---

## 📋 Tareas

- [ ] Diseñar la interfaz del historial de reservas.
- [ ] Implementar los filtros especificados.
- [ ] Desarrollar la funcionalidad para eliminar reservas.
- [ ] Crear la conexión con la base de datos para obtener la información actualizada.
- [ ] Realizar pruebas de usabilidad y funcionalidad.


## Backend

```java
 @GetMapping
    public ResponseEntity<List<Reserva>> listarReservas() {
        return ResponseEntity.ok(reservaService.getAllReservas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerReservaPorId(@PathVariable Long id) {
        Optional<Reserva> reserva = reservaService.getReservaById(id);
        return reserva.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/tipos-servicio")
public List<String> obtenerTiposPorVehiculo(@RequestParam String tipoVehiculo) {
    switch (tipoVehiculo.toLowerCase()) {
        case "automovil":
        case "carro":  // Añadir este caso
            return List.of("Lavado Express $100.000", "Lavado a vapor $110.000", "Lavado completo $100.000" , "Lavado de motor $90.000", "Lavado interno $80.000");
        case "moto":
            return List.of("Lavado básico moto $50.000", "Lavado cadena $20.000", "Engrase $30.000");
        case "bus":
            return List.of("Lavado general bus $50.000", "Limpieza de asientos $70.000");
        default:
            return List.of();
    }
}
@GetMapping("/usuario/{userId}")
public ResponseEntity<List<Reserva>> getReservasPorUsuario(@PathVariable Long userId) {
    List<Reserva> reservas = reservaService.getReservasPorUsuario(userId);
    return ResponseEntity.ok(reservas);
}
```
## Frontend

### historial.component.html

``` html
<ion-app>
  <ion-split-pane contentId="main-content">
  
    <ion-router-outlet id="main-content">
      <ion-header>
        <app-navbar></app-navbar>
      </ion-header>

      <ion-content class="ion-padding">
        <!-- Formulario filtros -->
        <form (ngSubmit)="aplicarFiltros()">

          <ion-item>
            <ion-label position="floating">Vehículo (Placa)</ion-label>
            <ion-input [(ngModel)]="filtros.placa" name="placa" type="text"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Tipo de vehículo</ion-label>
            <ion-select [(ngModel)]="filtros.tipoVehiculo" name="tipoVehiculo" interface="popover">
              <ion-select-option value="">Todos</ion-select-option>
              <ion-select-option value="Carro">Carro</ion-select-option>
              <ion-select-option value="Moto">Moto</ion-select-option>
              <ion-select-option value="Bus">Bus</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-label>Tipo de servicio</ion-label>
            <ion-select [(ngModel)]="filtros.servicio" name="servicio" interface="popover">
              <ion-select-option value="">Todos</ion-select-option>
              <ion-select-option value="Lavado Express $100.000">Lavado Express</ion-select-option>
              <ion-select-option value="Lavado a vapor $110.000">Lavado a vapor</ion-select-option>
              <ion-select-option value="Lavado completo $100.000">Lavado completo</ion-select-option>
              <ion-select-option value="Lavado de motor $90.000">Lavado de motor</ion-select-option>
              <ion-select-option value="Lavado interno $90.000">Lavado interno</ion-select-option>
              <ion-select-option value="Lavado básico moto $50.000">Lavado básico moto</ion-select-option>
              <ion-select-option value="Lavado cadena $20.000">Lavado cadena</ion-select-option>
              <ion-select-option value="Engrase $30.000">Engrase</ion-select-option>
              <ion-select-option value="Lavado general bus $50.000">Lavado general bus</ion-select-option>
              <ion-select-option value="Limpieza de asientos $70.000">Limpieza de asientos</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-button expand="block" type="submit" color="primary" class="ion-margin-top">Buscar</ion-button>
          <ion-button expand="block" type="button" color="medium" (click)="resetFiltros()">Limpiar</ion-button>
        </form>

        <!-- Título -->
        <h2 class="ion-text-center ion-margin-top">
          {{ isAdmin ? 'Historial de Reservas (Admin)' : 'Tu Historial de Reservas' }}
        </h2>

        <!-- Listado -->
        <ion-list *ngIf="reservas.length > 0; else noReservas">
          <ion-item *ngFor="let reserva of reservas" lines="full">
            <ion-label>
              <h3>ID: {{ reserva.id }}</h3>
              <p>Fecha: {{ reserva.fechaReserva | date:'dd/MM/yyyy' }}</p>
              <p>Servicio: {{ reserva.servicio }}</p>
              <p>Método de Pago: {{ reserva.metodoPago || 'No registrado' }}</p>
              <p *ngIf="isAdmin">Usuario: {{ reserva.user?.nombre || 'Sin nombre' }}</p>
              <p *ngIf="isAdmin">Vehículo: {{ reserva.vehiculo?.placa || 'Sin placa' }}</p>

              <ion-badge [color]="
                reserva.estado === 'Confirmada' ? 'success' :
                reserva.estado === 'Cancelada' ? 'danger' :
                'warning'
              ">
                {{ reserva.estado }}
              </ion-badge>
            </ion-label>

            <ion-button fill="clear" slot="end" color="danger"
              [disabled]="reserva.estado === 'Cancelada'"
              (click)="eliminarReserva(reserva.id)">
              Eliminar
            </ion-button>

            <ion-button fill="clear" slot="end" color="primary"
              [disabled]="reserva.estado === 'Cancelada'"
              (click)="actualizarReserva(reserva.id, 'cancelado')">
              Editar
            </ion-button>
          </ion-item>
        </ion-list>

        <ng-template #noReservas>
          <ion-text color="medium" class="ion-text-center ion-padding">
            No hay reservas disponibles.
          </ion-text>
        </ng-template>
      </ion-content>
    </ion-router-outlet>
  </ion-split-pane>

</ion-app>

```
### historial.component.ts:


```java
import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../services/historial.service';
import { ReservaService } from '../services/reserva.service';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
  standalone: false,
})
export class HistorialComponent implements OnInit {
  filtros = {
    fechaInicio: '',
    fechaFin: '',
    placa: '',
    documento: '',
    tipoVehiculo: '',
    servicio: ''
  };

  reservasOriginal: any[] = [];  // Lista original sin filtrar
  reservas: any[] = [];          // Lista filtrada para mostrar
  isAdmin: boolean = false;
  userId: number = 0;

  constructor(
    private reservaService: ReservaService,
    private historialService: HistorialService
  ) {}

  ngOnInit(): void {
    const rol = localStorage.getItem('rol');
    const id = localStorage.getItem('userId');

    this.isAdmin = rol?.toUpperCase() === 'ADMIN';
    this.userId = id ? Number(id) : 0;

    if (this.isAdmin) {
      this.getAllReservas();
    } else {
      this.getReservasByUser();
    }
  }

  getAllReservas(): void {
    this.reservaService.getReservas().subscribe({
      next: (data) => {
        this.reservasOriginal = data;
        this.reservas = [...data];
      },
      error: (err) => console.error('Error cargando reservas:', err)
    });
  }

  getReservasByUser(): void {
    this.historialService.getReservasPorUsuario(this.userId).subscribe({
      next: (data: any[]) => {
        this.reservasOriginal = data.map((reserva) => ({
          ...reserva,
          vehiculo: {
            ...reserva.vehiculo,
            tipo: reserva.vehiculo?.tipo || ''
          },
          metodoPago: reserva.metodoPago || 'No registrado'
        }));
        this.reservas = [...this.reservasOriginal];
      },
      error: (err) => console.error('Error cargando reservas del usuario:', err)
    });
  }

  aplicarFiltros(): void {
    let reservasFiltradas = [...this.reservasOriginal];

    if (this.filtros.fechaInicio) {
      reservasFiltradas = reservasFiltradas.filter(r =>
        new Date(r.fechaReserva) >= new Date(this.filtros.fechaInicio)
      );
    }

    if (this.filtros.fechaFin) {
      reservasFiltradas = reservasFiltradas.filter(r =>
        new Date(r.fechaReserva) <= new Date(this.filtros.fechaFin)
      );
    }

    if (this.filtros.placa) {
      reservasFiltradas = reservasFiltradas.filter(r =>
        r.vehiculo?.placa?.toLowerCase().includes(this.filtros.placa.toLowerCase())
      );
    }

    if (this.filtros.documento) {
      reservasFiltradas = reservasFiltradas.filter(r =>
        r.user?.documento?.toString().includes(this.filtros.documento)
      );
    }

    if (this.filtros.tipoVehiculo) {
      reservasFiltradas = reservasFiltradas.filter(r =>
        r.vehiculo?.tipo === this.filtros.tipoVehiculo
      );
    }

    if (this.filtros.servicio) {
      reservasFiltradas = reservasFiltradas.filter(r =>
        r.servicio === this.filtros.servicio
      );
    }

    this.reservas = reservasFiltradas;
  }

  resetFiltros(): void {
    this.filtros = {
      fechaInicio: '',
      fechaFin: '',
      placa: '',
      documento: '',
      tipoVehiculo: '',
      servicio: ''
    };
    this.reservas = [...this.reservasOriginal];
  }

  eliminarReserva(id: number): void {
    this.historialService.deleteReserva(id).subscribe({
      next: () => {
        this.reservas = this.reservas.filter((reserva) => reserva.id !== id);
        console.log('Reserva eliminada:', id);
      },
      error: (err) => console.error('Error eliminando reserva:', err)
    });
  }

  actualizarReserva(id: number, estado: string): void {
    this.historialService.actualizarEstadoReserva(id, estado).subscribe({
      next: () => {
        if (this.isAdmin) {
          this.getAllReservas();
        } else {
          this.getReservasByUser();
        }
      },
      error: (err) => console.error('Error actualizando reserva:', err)
    });
  }
}

```


