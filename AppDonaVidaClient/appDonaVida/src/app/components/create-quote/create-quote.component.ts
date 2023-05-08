import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { QuoteDTO } from '../../interfaces/quoteDTO';
import { CenterDonorResponse } from '../../interfaces/responses/centerDonorResponse';
import { QuoteResponse } from '../../interfaces/responses/quoteResponse';
import { CenterDonorService } from '../../services/center-donor.service';
import { QuotesService } from '../../services/quotes.service';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css'],
})
export class CreateQuoteComponent implements OnInit {
  quoteForm: FormGroup;
  centerList: any = [];
  selectedDate: Date;
  datePicker: MatDatepicker<Date>;

  @Input()
  minDate: Date = new Date();
  @Input()
  maxDate: Date = new Date(2024, 0, 1);
  @Input()
  startAt: Date = new Date();
  @Input()
  dateFilter: (date: Date) => boolean;
  @Input()
  color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input()
  touchUi = false;
  @Input()
  startView: 'month' | 'year' = 'month';
  @Input()
  startViewDate: Date = new Date();
  @Input()  
  startAtYear: number = new Date().getFullYear();
  @Input()
  startAtMonth: number = new Date().getMonth();
  @Input()
  startAtDate: number = new Date().getDate();

  constructor(
    private formBuilder: FormBuilder,
    private centerDonorService: CenterDonorService,
    private quoteService: QuotesService,
    private router: Router
  ) {
    this.quoteForm = this.formBuilder.group({
      date: ['', Validators.required],
      idCenter: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.onCenterList();
  }
  openDatePicker(datePicker: MatDatepicker<Date>) {
    this.datePicker = datePicker;
    this.datePicker.open();
  }

  onCenterList() {
    this.centerDonorService
      .getCenterDonors()
      .subscribe((response: CenterDonorResponse) => {
        this.centerList = response;
      });
  }

  onSubmit() {
    const formData: QuoteDTO = this.quoteForm.value;
    
    this.quoteService
      .createQuote(formData)
      .subscribe((response: QuoteResponse) => {
        this.router.navigate(['/home/quotes']);
      });
  }

  sweetAlert() {
    Swal.fire({
      title: 'Cita creada con éxito',
      text: 'La cita ha sido creada con éxito',
      icon: 'success',
    }).then((result) => {
      if (result.isConfirmed) {
        this.onSubmit();
      }
    });
  }

  validateForm() {
    if (this.quoteForm.valid) {
      this.sweetAlert();
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, rellene todos los campos',
        icon: 'error',
      });
    }
  }
}
