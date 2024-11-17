import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuModule],
  template: `
    <div class="layout-wrapper">
      <div class="layout-sidebar">
        <h2>Espace Client</h2>
        <p-menu [model]="menuItems"></p-menu>
      </div>
      <div class="layout-main">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Informations Personnelles',
      icon: 'pi pi-user',
      routerLink: '/infos-personnelles'
    },
    {
      label: 'Contrat',
      icon: 'pi pi-file',
      routerLink: '/infos-contrat'
    },
    {
      label: 'Épargne',
      icon: 'pi pi-money-bill',
      routerLink: '/infos-epargne'
    }
  ];
}