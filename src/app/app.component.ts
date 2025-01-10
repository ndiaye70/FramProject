import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnteteComponent } from "./frame/entete/entete.component";
import { MenuComponent } from "./frame/menu/menu.component";
import { FooterComponent } from "./frame/footer/footer.component";
//import{AccueilComponent} from "./accueil/accueil.component"
import{AccueilComponent} from "./accueil/accueil.component"
import {DetailEtudiantComponent} from './details-etudiant/details-etudiant.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnteteComponent, MenuComponent, AccueilComponent, FooterComponent, DetailEtudiantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'FramProject';

}
