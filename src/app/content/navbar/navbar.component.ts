import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { NavbarService } from '../../services/navbar.services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HomeComponent, CarrosselComponent, AboutComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
[x: string]: any;
  constructor(private navbarService: NavbarService, private router: Router) {}

  navegarPara(path: string, event: Event) {
    event.preventDefault();
    this.router.navigate([path]);
    this.navbarService.closeNavbar();
  }

  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar')) {
      this.navbarService.closeNavbar();
    } else if (target.closest('.nav-link')) {
      this.navbarService.closeNavbar();
    }
  }

    scrollTo(sectionId: string): void {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
}
import { CarrosselComponent } from '../carrossel/carrossel.component';
