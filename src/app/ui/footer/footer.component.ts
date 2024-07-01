import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const INSTAGRAM_SVG_URL = 'assets/footer/instagram.svg';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule],
})
export class FooterComponent {
  currentYear: number;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.currentYear = new Date().getFullYear();
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl(INSTAGRAM_SVG_URL)
    );
  }
}
