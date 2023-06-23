import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  standalone: true,
})
export class ContainerComponent {
  @Input() primary: boolean = false;

  get backgroundColor(): string {
    return this.primary ? '#28A9BC' : '#FFF';
  }
}
