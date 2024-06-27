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
  menuItems: { id: string; displayName: string }[] = [
    { id: 'sobre', displayName: 'Sobre' },
    { id: 'parceiros', displayName: 'Parceiros' },
    { id: 'inscricoes', displayName: 'Inscrições' },
    { id: 'contatos', displayName: 'Contatos' },
  ];

  constructor(private router: Router) {}

  goToSection(sectionId: string) {
    this.router.navigate([], { fragment: sectionId });
  }
}
