import { Component } from '@angular/core';
import { Etudiants as Etudiant, Class as Classe } from "../ipslModule";
import { listeEtudiants, ing3Info, ing3Civil } from "../data";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-etudiant',
  standalone: true,
  templateUrl: './add-etudiant.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: []
})
export class AddEtudiantComponent {
  // Liste des classes disponibles
  classes: Classe[] = [ing3Info, ing3Civil];

  // Étudiant à créer
  newEtudiant: Etudiant = {
    code: '',
    nom: '',
    prenom: '',
    adresse: '',
    telephone: '',
    email: '',
    classe: this.classes[0], // Par défaut, première classe de la liste
  };

  // Fonction appelée lors de la soumission du formulaire
  onSubmit() {
    // Ajouter le nouvel étudiant à la liste
    listeEtudiants.push({ ...this.newEtudiant });

    // Réinitialiser le formulaire
    this.newEtudiant = {
      code: '',
      nom: '',
      prenom: '',
      adresse: '',
      telephone: '',
      email: '',
      classe: this.classes[0],
    };

    alert('Étudiant ajouté avec succès !');
  }
}
