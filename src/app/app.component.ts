import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnteteComponent } from "./frame/entete/entete.component";
import { MenuComponent } from "./frame/menu/menu.component";
import { AccueuilComponent } from "./accueuil/accueuil.component";
import { FooterComponent } from "./frame/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnteteComponent, MenuComponent, AccueuilComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularIng3IPSL';
}