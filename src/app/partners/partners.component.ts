import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
  standalone: true,
  imports: [MatDividerModule, MatGridListModule],
})
export class PartnersComponent {
  constructor(private router: Router) {}

  goToPartner(id: String) {
    this.router.navigate([`/parceiros/${id}`]);
  }
}
