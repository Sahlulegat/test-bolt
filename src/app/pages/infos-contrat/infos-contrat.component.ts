import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-infos-contrat',
  standalone: true,
  imports: [CommonModule, TabViewModule, TableModule],
  template: `
    <h2>Informations du Contrat</h2>
    <p-tabView>
      <p-tabPanel header="Informations générales">
        <div class="card">
          <div class="info-row">
            <span class="info-label">Numéro de contrat:</span>
            <span class="info-value">AV-123456789</span>
          </div>
          <div class="info-row">
            <span class="info-label">Date de souscription:</span>
            <span class="info-value">01/01/2020</span>
          </div>
          <div class="info-row">
            <span class="info-label">Type de contrat:</span>
            <span class="info-value">Assurance Vie Multisupport</span>
          </div>
          <div class="info-row">
            <span class="info-label">Statut:</span>
            <span class="info-value">Actif</span>
          </div>
        </div>
      </p-tabPanel>

      <p-tabPanel header="Options">
        <div class="card">
          <div class="info-row">
            <span class="info-label">Rachats programmés:</span>
            <span class="info-value">Non</span>
          </div>
          <div class="info-row">
            <span class="info-label">Versements programmés:</span>
            <span class="info-value">Oui - 200€/mois</span>
          </div>
          <div class="info-row">
            <span class="info-label">Option rééquilibrage:</span>
            <span class="info-value">Active</span>
          </div>
          <div class="info-row">
            <span class="info-label">Gestion pilotée:</span>
            <span class="info-value">Non</span>
          </div>
        </div>
      </p-tabPanel>

      <p-tabPanel header="Garanties">
        <div class="card">
          <div class="info-row">
            <span class="info-label">Garantie plancher:</span>
            <span class="info-value">Oui</span>
          </div>
          <div class="info-row">
            <span class="info-label">Garantie coup dur:</span>
            <span class="info-value">Non</span>
          </div>
          <div class="info-row">
            <span class="info-label">Garantie décès:</span>
            <span class="info-value">100% des versements nets</span>
          </div>
        </div>
      </p-tabPanel>

      <p-tabPanel header="Bénéficiaires">
        <div class="card">
          <p-table [value]="beneficiaires">
            <ng-template pTemplate="header">
              <tr>
                <th>Ordre</th>
                <th>Désignation</th>
                <th>Part</th>
              </tr>
            </ng-template>
            <ng-template pTemplate="body" let-benef>
              <tr>
                <td>{{benef.ordre}}</td>
                <td>{{benef.designation}}</td>
                <td>{{benef.part}}%</td>
              </tr>
            </ng-template>
          </p-table>
        </div>
      </p-tabPanel>
    </p-tabView>
  `
})
export class InfosContratComponent {
  beneficiaires = [
    { ordre: 1, designation: 'Conjoint', part: 50 },
    { ordre: 2, designation: 'Enfants nés ou à naître', part: 50 }
  ];
}