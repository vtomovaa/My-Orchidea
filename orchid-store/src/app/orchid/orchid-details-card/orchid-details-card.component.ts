import { Component, Input } from '@angular/core';
import { IOrchid } from 'src/app/shared/interfaces/orchid';

@Component({
  selector: 'app-orchid-details-card',
  templateUrl: './orchid-details-card.component.html',
  styleUrls: ['./orchid-details-card.component.css']
})
export class OrchidDetailsCardComponent {
  @Input() orchid: IOrchid | undefined;
}
