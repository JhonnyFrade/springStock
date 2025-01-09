import { Component, Input } from '@angular/core';
import { PoContainerModule } from '@po-ui/ng-components';
import { Stock } from '../../services/stocks-response.model';

@Component({
  selector: 'app-stock-card',
  standalone: true,
  imports: [PoContainerModule],
  templateUrl: './stock-card.component.html',
  styleUrl: './stock-card.component.scss'
})
export class StockCardComponent {
  @Input() stock!: Stock;
}
