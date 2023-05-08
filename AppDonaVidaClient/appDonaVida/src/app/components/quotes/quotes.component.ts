import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import { QuoteResponse } from '../../interfaces/responses/quoteResponse';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  citasList: any = [];

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.onCitasList();
  }

  Aprove(id: string) {
    this.quotesService.AcceptQuote(id).subscribe(() => {
      this.onCitasList();
    });
  }

  onCitasList() {
    this.quotesService.getQuotes().subscribe((response: any) => {
      this.citasList = response;
    });
  }
  onCitaAprobadaChange(cita: QuoteResponse, event: Event) {
    const target = event.target as HTMLInputElement;
    cita.isAproved = target.checked;
  }
}
