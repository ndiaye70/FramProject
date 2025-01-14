import { Component } from '@angular/core';
import {Etudiants, EtudiantDTO, Filliere} from "../ipslModule";
import {listeDept, listeEtudiants} from "../data";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-etudiant',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './add-etudiant.component.html',
  styleUrl: './add-etudiant.component.scss'
})
export class AddEtudiantComponent {
  listFilieres: Filliere[]=[];
  etudiant:EtudiantDTO= {
    code:'',
    nom:'',
    prenom:'',
    adresse:'',
    email:'',
    telephone:'',
    codeClasse:'',
    codeFiliere:'',
    codeDept:'GIT'
  }
  listeDept=listeDept;

  listeFiliere() {
    console.log("liste filiere");
    this.listFilieres=[];
    if (!this.etudiant.codeDept){
      console.log("Pas de departement");
      return;
    }

    var filiereMap: Map<String, Filliere> = new Map();
    const etudiants = listeEtudiants;
    for (let i=0; i<etudiants.length; i++){
      var filiere:Filliere = etudiants[i].classe.filliere;
      console.log("filiere", filiere.code,"departement",filiere.dept.code);
      if (filiere.dept.code==this.etudiant.codeDept)
      {
        if (!filiereMap.has(filiere.code)) {
          filiereMap.set(filiere.code, filiere);
          this.listFilieres.push(filiere);
        }
      }
    }
  }
}
