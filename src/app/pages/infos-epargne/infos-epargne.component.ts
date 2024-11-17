import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-infos-epargne',
  standalone: true,
  imports: [CommonModule, TabViewModule, TableModule, ButtonModule, ChartModule],
  template: `
    <h2>Informations Épargne</h2>
    
    <div class="card">
      <div class="info-row">
        <span class="info-label">Valeur totale:</span>
        <span class="info-value">75 000 €</span>
      </div>
      <div class="info-row">
        <span class="info-label">Plus-value latente:</span>
        <span class="info-value">15 000 €</span>
      </div>
      <div class="info-row">
        <span class="info-label">Performance annuelle:</span>
        <span class="info-value">+4.5%</span>
      </div>
    </div>

    <p-tabView>
      <p-tabPanel header="Versements Facultatifs">
        <div class="card">
          <p-table [value]="versementsFacultatifs">
            <ng-template pTemplate="header">
              <tr>
                <th>Support</th>
                <th>Montant</th>
                <th>Répartition</th>
                <th>Performance YTD</th>
              </tr>
            </ng-template>
            <ng-template pTemplate="body" let-vf>
              <tr>
                <td>{{vf.support}}</td>
                <td>{{vf.montant}} €</td>
                <td>{{vf.repartition}}%</td>
                <td>{{vf.performance}}%</td>
              </tr>
            </ng-template>
          </p-table>
        </div>
      </p-tabPanel>

      <p-tabPanel header="Versements Obligatoires">
        <div class="card">
          <p-table [value]="versementsObligatoires">
            <ng-template pTemplate="header">
              <tr>
                <th>Support</th>
                <th>Montant</th>
                <th>Répartition</th>
                <th>Performance YTD</th>
              </tr>
            </ng-template>
            <ng-template pTemplate="body" let-vo>
              <tr>
                <td>{{vo.support}}</td>
                <td>{{vo.montant}} €</td>
                <td>{{vo.repartition}}%</td>
                <td>{{vo.performance}}%</td>
              </tr>
            </ng-template>
          </p-table>
        </div>
      </p-tabPanel>

      <p-tabPanel header="Participation aux bénéfices">
        <div class="card">
          <p-table [value]="participationBenefices">
            <ng-template pTemplate="header">
              <tr>
                <th>Année</th>
                <th>Montant</th>
                <th>Taux</th>
              </tr>
            </ng-template>
            <ng-template pTemplate="body" let-pb>
              <tr>
                <td>{{pb.annee}}</td>
                <td>{{pb.montant}} €</td>
                <td>{{pb.taux}}%</td>
              </tr>
            </ng-template>
          </p-table>
        </div>
      </p-tabPanel>
    </p-tabView>

    <div class="card">
      <p-button 
        label="Voir les derniers mouvements" 
        icon="pi pi-list" 
        (onClick)="voirMouvements()"
      ></p-button>
    </div>
  `
})
export class InfosEpargneComponent {
  constructor(private router: Router) {}

  versementsFacultatifs = [
    { support: 'Fonds Euro', montant: 30000, repartition: 40, performance: 2.5 },
    { support: 'UC - Actions Europe', montant: 22500, repartition: 30, performance: 6.8 },
    { support: 'UC - Obligations', montant: 15000, repartition: 20, performance: 3.2 },
    { support: 'UC - Immobilier', montant: 7500, repartition: 10, performance: 4.1 }
  ];

  versementsObligatoires = [
    { support: 'Fonds Euro Garanti', montant: 15000, repartition: 60, performance: 2.1 },
    { support: 'UC - Profil Prudent', montant: 10000, repartition: 40, performance: 3.5 }
  ];

  participationBenefices = [
    { annee: 2023, montant: 1200, taux: 2.8 },
    { annee: 2022, montant: 1100, taux: 2.5 },
    { annee: 2021, montant: 950, taux: 2.3 }
  ];

  voirMouvements() {
    this.router.navigate(['/mouvements']);
  }
}