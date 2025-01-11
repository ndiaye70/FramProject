import { Component } from '@angular/core';
import {Etudiants} from "../ipslModule";
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

}
