import { Routes } from '@angular/router';
import { NavbarComponent } from './content/navbar/navbar.component';
import { AboutComponent } from './content/about/about.component';
import { CarrosselComponent } from './content/carrossel/carrossel.component';
import { IntroductionComponent } from './content/introduction/introduction.component';
import { HomeComponent } from './content/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, // Adicione esta linha
    { path: 'navbar', component: NavbarComponent },
    { path: 'about', component: AboutComponent },
    { path: 'carrossel', component: CarrosselComponent },
    { path: 'introduction', component: IntroductionComponent },
    { path: '**', redirectTo: '/home' } // Atualize para redirecionar para /home
];