import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StockCardComponent } from '../../components/stock-card/stock-card.component';
import {StocksService} from '../../services/stocks.service'
import { Stock } from '../../services/stocks-response.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [StockCardComponent, CommonModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.scss'
})
export class StocksComponent {
  stocks: Stock[] = [];

  constructor (private stocksService: StocksService) {}

  ngOnInit(): void {
    this.loadStocks();
  }
   
  loadStocks(): void {
    this.stocksService.getStocks().subscribe({
      next: (data) => {
        console.log('resposta: ', data.stocks)
        this.stocks = data.stocks || [];
      },
      error: (err) => {
        console.error('Erro ao carregar ações:', err);
      }
    });
  }
}
