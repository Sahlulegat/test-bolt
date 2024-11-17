import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'infos-personnelles', loadComponent: () => import('./pages/infos-personnelles/infos-personnelles.component').then(m => m.InfosPersonnellesComponent) },
  { path: 'infos-contrat', loadComponent: () => import('./pages/infos-contrat/infos-contrat.component').then(m => m.InfosContratComponent) },
  { path: 'infos-epargne', loadComponent: () => import('./pages/infos-epargne/infos-epargne.component').then(m => m.InfosEpargneComponent) },
  { path: 'mouvements', loadComponent: () => import('./pages/mouvements/mouvements.component').then(m => m.MouvementsComponent) },
  { path: '', redirectTo: '/infos-personnelles', pathMatch: 'full' }
];