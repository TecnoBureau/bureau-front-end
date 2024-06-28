import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class NavbarComponent {
  menuItems: { sectionId: string; displayName: string }[] = [
    { sectionId: 'sobre', displayName: 'Sobre' },
    { sectionId: 'parceiros', displayName: 'Parceiros' },
    { sectionId: 'inscricoes', displayName: 'Inscrições' },
    { sectionId: 'contatos', displayName: 'Contatos' },
  ];

  constructor(private router: Router) {}

  goToSection(sectionId: string) {
    this.router.navigate([`/${sectionId}`]).then(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
