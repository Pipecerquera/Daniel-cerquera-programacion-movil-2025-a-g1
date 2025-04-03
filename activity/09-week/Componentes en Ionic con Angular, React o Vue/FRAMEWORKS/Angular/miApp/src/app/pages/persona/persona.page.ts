import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController } from '@ionic/angular';
import { Persona } from './persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PersonaPage {
  personas: Persona[] = [];

  constructor(private alertCtrl: AlertController) {}

  async agregarPersona() {
    const alert = await this.alertCtrl.create({
      header: 'Agregar Persona',
      inputs: [
        { name: 'nombre', type: 'text', placeholder: 'Nombre' },
        { name: 'edad', type: 'number', placeholder: 'Edad' },
        { name: 'correo', type: 'email', placeholder: 'Correo' }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Agregar',
          handler: (data) => {
            if (data.nombre && data.edad && data.correo) {
              this.personas.push({ id: Date.now(), ...data });
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async editarPersona(index: number) {
    const persona = this.personas[index];

    const alert = await this.alertCtrl.create({
      header: 'Editar Persona',
      inputs: [
        { name: 'nombre', type: 'text', value: persona.nombre },
        { name: 'edad', type: 'number', value: persona.edad },
        { name: 'correo', type: 'email', value: persona.correo }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            this.personas[index] = { ...persona, ...data };
          }
        }
      ]
    });

    await alert.present();
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }
}
