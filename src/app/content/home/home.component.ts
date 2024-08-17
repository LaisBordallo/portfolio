import { Component } from '@angular/core';
import { IntroductionComponent } from "../introduction/introduction.component";
import { CarrosselComponent } from "../carrossel/carrossel.component";
import { AboutComponent } from "../about/about.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, IntroductionComponent, CarrosselComponent, AboutComponent, PortfolioComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
