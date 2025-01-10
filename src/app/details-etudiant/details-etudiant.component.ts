import {Component, OnInit} from '@angular/core';
import {Carte, Etudiants} from "../ipslModule";
import {carteSylla, etudiantSylla} from "../data";
import {DatePipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-details-etudiant',
  standalone: true,
  imports: [
    JsonPipe,
    DatePipe
  ],
  templateUrl: './details-etudiant.component.html',
  styleUrls: ['./details-etudiant.component.scss']
})
export class DetailEtudiantComponent implements OnInit{
  etudiant?: Etudiants;
  carte?: Carte;

  ngOnInit(): void {
    this.etudiant=etudiantSylla;
    this.carte=carteSylla;

  }


  getAnneeScolaire():string{
    if(this.carte?.anneDebut)
    {
      // @ts-ignore
      return `${this.carte?.anneDebut} - ${this.carte?.anneDebut + 1}`;
    }
    return "Annee non detereminee";
  }
}
