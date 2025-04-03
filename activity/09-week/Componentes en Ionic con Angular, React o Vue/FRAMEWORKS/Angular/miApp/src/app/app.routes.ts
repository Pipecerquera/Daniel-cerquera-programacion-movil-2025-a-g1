import { Routes } from '@angular/router';
import { PersonaPage } from './pages/persona/persona.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'persona',
    pathMatch: 'full'
  },
  {
    path: 'persona',
    component: PersonaPage
  }
];

export default routes;  // 🚨 Asegúrate de que se exporta así
