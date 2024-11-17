import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-infos-personnelles',
  standalone: true,
  imports: [CommonModule, TabViewModule, TableModule],
  template: `
    <h2>Informations Personnelles</h2>
    <p-tabView>
      <p-tabPanel header="Identité">
        <div class="card">
          <div class="info-row">
            <span class="info-label">Nom:</span>
            <span class="info-value">Dupont</span>
          </div>
          <div class="info-row">
            <span class="info-label">Prénom:</span>
            <span class="info-value">Jean</span>
          </div>
          <div class="info-row">
            <span class="info-label">Date de naissance:</span>
            <span class="info-value">15/03/1975</span>
          </div>
          <div class="info-row">
            <span class="info-label">Situation familiale:</span>
            <span class="info-value">Marié(e)</span>
          </div>
          <div class="info-row">
            <span class="info-label">Profession:</span>
            <span class="info-value">Cadre</span>
          </div>
        </div>
      </p-tabPanel>

      <p-tabPanel header="Adresses">
        <div class="card">
          <h3 class="section-title">Adresse principale</h3>
          <div class="info-row">
            <span class="info-label">Rue:</span>
            <span class="info-value">123 rue de Paris</span>
          </div>
          <div class="info-row">
            <span class="info-label">Code postal:</span>
            <span class="info-value">75001</span>
          </div>
          <div class="info-row">
            <span class="info-label">Ville:</span>
            <span class="info-value">Paris</span>
          </div>
          <div class="info-row">
            <span class="info-label">Pays:</span>
            <span class="info-value">France</span>
          </div>
        </div>
      </p-tabPanel>

      <p-tabPanel header="Contact">
        <div class="card">
          <div class="info-row">
            <span class="info-label">Email:</span>
            <span class="info-value">jean.dupont&#64;email.com</span>
          </div>
          <div class="info-row">
            <span class="info-label">Téléphone mobile:</span>
            <span class="info-value">06 12 34 56 78</span>
          </div>
          <div class="info-row">
            <span class="info-label">Téléphone fixe:</span>
            <span class="info-value">01 23 45 67 89</span>
          </div>
        </div>
      </p-tabPanel>

      <p-tabPanel header="Coordonnées bancaires">
        <div class="card">
          <div class="info-row">
            <span class="info-label">Titulaire:</span>
            <span class="info-value">M. Jean Dupont</span>
          </div>
          <div class="info-row">
            <span class="info-label">IBAN:</span>
            <span class="info-value">FR76 3000 1007 1234 5678 9012 345</span>
          </div>
          <div class="info-row">
            <span class="info-label">BIC:</span>
            <span class="info-value">BDFEFR2LXXX</span>
          </div>
          <div class="info-row">
            <span class="info-label">Banque:</span>
            <span class="info-value">Banque de France</span>
          </div>
        </div>
      </p-tabPanel>
    </p-tabView>
  `
})
export class InfosPersonnellesComponent {}