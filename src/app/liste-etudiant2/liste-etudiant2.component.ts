import { Component } from '@angular/core';
import { Etudiants as Etudiant, Filliere as Filiere } from "../ipslModule";
import { listeEtudiants } from "../data";
import { CommonModule, JsonPipe } from "@angular/common";

@Component({
  selector: 'app-liste-etudiant2',
  standalone: true,
  imports: [
    JsonPipe,
    CommonModule,
  ],
  templateUrl: './liste-etudiant2.component.html',
  styleUrls: []  // Pas de style dans le fichier SCSS
})
export class ListeEtudiant2Component {
  etudiants = listeEtudiants;
  selectedEtudiant?: Etudiant;

  // Fonction pour gérer la sélection d'un étudiant
  selectEtudiant(e: Etudiant) {
    this.selectedEtudiant = e;
  }

  // Fonction pour appliquer les styles aux lignes (paires, impaires et sélectionnées)
  getRowStyle(i: number, e: Etudiant) {
    let rowStyle: any = {};

    // Appliquer un fond pour les lignes paires/impaires
    if (i % 2 === 0) {
      rowStyle.backgroundColor = '#f2f2f2';  // Ligne paire
    } else {
      rowStyle.backgroundColor = '#ffffff';  // Ligne impaire
    }

    // Appliquer le fond pour la ligne sélectionnée
    if (this.selectedEtudiant?.code === e.code) {
      // Si l'étudiant appartient à la filière INF
      if (e.classe?.filliere?.code === 'INF') {
        rowStyle.backgroundColor = '#81c784';  // Vert clair pour INF
        rowStyle.color = 'white';
        rowStyle.fontWeight = 'bold';
      } else {
        // Si l'étudiant appartient à une autre filière
        rowStyle.backgroundColor = '#f44336';  // Rouge pour les autres filières
        rowStyle.color = 'white';
        rowStyle.fontWeight = 'bold';
      }
    }

    return rowStyle;
  }

  // Fonction pour gérer les styles des boutons
  getButtonStyles(e: Etudiant) {
    return {
      'background-color': e.classe?.filliere?.code === 'INF' ? '#4CAF50' : '#f44336',
      'color': 'white'
    };
  }
}
