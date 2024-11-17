import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

interface Mouvement {
  date: string;
  type: string;
  montant: number;
  statut: string;
  support: string;
}

@Component({
  selector: 'app-mouvements',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  template: `
    <div class="card">
      <div class="flex justify-content-between mb-3">
        <h2>Derniers Mouvements</h2>
        <p-button 
          label="Retour" 
          icon="pi pi-arrow-left" 
          (onClick)="retour()"
        ></p-button>
      </div>
      
      <p-table [value]="mouvements" [paginator]="true" [rows]="10">
        <ng-template pTemplate="header">
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Support</th>
            <th>Montant</th>
            <th>Statut</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-mouvement>
          <tr>
            <td>{{mouvement.date}}</td>
            <td>{{mouvement.type}}</td>
            <td>{{mouvement.support}}</td>
            <td>{{mouvement.montant}} €</td>
            <td>{{mouvement.statut}}</td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  `
})
export class MouvementsComponent {
  constructor(private router: Router) {}

  mouvements: Mouvement[] = [
    { date: '01/03/2024', type: 'Versement', montant: 1000, statut: 'Effectué', support: 'Fonds Euro' },
    { date: '15/02/2024', type: 'Arbitrage', montant: 500, statut: 'Effectué', support: 'UC - Actions Europe' },
    { date: '01/02/2024', type: 'Versement programmé', montant: 200, statut: 'Effectué', support: 'Fonds Euro' },
    { date: '15/01/2024', type: 'Arbitrage', montant: 1500, statut: 'Effectué', support: 'UC - Obligations' },
    { date: '01/01/2024', type: 'Versement', montant: 2000, statut: 'Effectué', support: 'UC - Immobilier' }
  ];

  retour() {
    this.router.navigate(['/infos-epargne']);
  }
}