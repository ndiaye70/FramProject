import { Component } from '@angular/core';
import {Etudiants as Etudiant, Filliere as Filiere} from "../ipslModule";
import {listeEtudiants} from "../data";
import {CommonModule, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-liste-etudiant',
  standalone: true,
  imports: [
    JsonPipe,
    CommonModule,
  ],
  templateUrl: './liste-etudiant.component.html',
  styleUrl: './liste-etudiant.component.scss'
})
export class ListeEtudiantComponent {
  inputType="text";
  inputValue='ras';
  etudiants=listeEtudiants;
  selectedEtudiant?: Etudiant;

  styleInformatique={
    "color":"white",
    "font-weight":"bold",
    "background-color":"green"
  }

  styleCivil={
    "color":"white",
    "font-weight":"bold",
    "background-color":"red"
  }

  getEtudiantStyle(filiere: Filiere) {
    if (filiere.code=='INF'){
      return this.styleInformatique;
    }
    return this.styleCivil;
  }

  selectEtudiant(e: Etudiant) {
    this.selectedEtudiant=e;
  }
}
