import { Component } from '@angular/core';
import { ContainerComponent } from '../ui/container/container.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css'],
  standalone: true,
  imports: [ContainerComponent, MatDividerModule, MatButtonModule],
})
export class InscriptionsComponent {}
