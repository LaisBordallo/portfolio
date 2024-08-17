import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, state, style, transition, animate } from '@angular/animations';


// Interface para definir a estrutura do carrossel de tecnologias
interface Testimonial {
  name: string;
  image: string;
}

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss'],
  animations: [
    trigger('autoHeight', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*', overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class CarrosselComponent {
  // Array de tecnologias
  testimonials: Testimonial[] = [
    {
      name: 'JavaScript',
      image: 'assets/images/javascript.svg'
    }
    ,
    {
      name: 'Typescript',
      image: 'assets/images/typescript.svg'
    }
    ,
    {
      name: 'HTML',
      image: 'assets/images/html.svg'
    }
    ,
    {
      name: 'CSS',
      image: 'assets/images/css.svg'
    }
    ,
    {
      name: 'Angular',
      image: 'assets/images/angular.svg'
    }
    ,
    {
      name: 'VS Code',
      image: 'assets/images/vscode.svg'
    }
    ,
    { name: 'Github',
      image: 'assets/images/github.svg'
    },
    { name: 'Git',
      image: 'assets/images/git.svg'
    }
    ,
    { name: 'Bootstrap',
      image: 'assets/images/bootstrap.svg'
    }
    ,
    { name: 'Figma',
      image: 'assets/images/figma.svg'
    }
    ,
    { name: 'Google Cloud',
      image: 'assets/images/googlecloud.svg'
    }
    ,
    { name: 'JQuery',
      image: 'assets/images/jquery.svg'
    }
    ,
    { name: 'Kotlin',
      image: 'assets/images/kotlin.svg'
    }
    ,
    { name: 'My SQL',
      image: 'assets/images/mysql.svg'
    }
    ,
    { name: 'NodeJS',
      image: 'assets/images/nodejs.svg'
    }
    ,
    { name: 'NPM',
      image: 'assets/images/npm.svg'
    }
    ,
    { name: 'Android',
      image: 'assets/images/android.svg'
    }
    
  ];  

  customOptions: OwlOptions = {
    loop: true,
    margin: 5,
    dots: false, 
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 1000,
    navText: ['PREV', 'NEXT'],
    nav: false,
    items: 1,
    stagePadding: 15,
    smartSpeed: 900,
    slideTransition: 'linear',

    responsive: {
      0: {
        items: 1 
      },
      600: {
        items: 3 
      },
      1000: {
        items: 7 
      }
    }

  };  

  
}