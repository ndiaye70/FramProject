
import { Routes } from '@angular/router';
import { AccueuilComponent } from './accueuil/accueuil.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListeEnseignantComponent } from './liste-enseignant/liste-enseignant.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
    {path: "",redirectTo:"/acceuil",pathMatch:'full'},
    {path: "acceuil",component:AccueuilComponent},
    {path:"etudiants",component:ListeEtudiantComponent},
    {path:"enseignants",component:ListeEnseignantComponent},
    {path:"",component:Error404Component}
];