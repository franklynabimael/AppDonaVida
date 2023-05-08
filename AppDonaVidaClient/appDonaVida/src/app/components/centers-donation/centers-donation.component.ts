import { Component, OnInit } from '@angular/core';
import { CenterDonorService } from '../../services/center-donor.service';
import { CenterDonorResponse } from '../../interfaces/responses/centerDonorResponse';

@Component({
  selector: 'app-centers-donation',
  templateUrl: './centers-donation.component.html',
  styleUrls: ['./centers-donation.component.css'],
})
export class CentersDonationComponent implements OnInit {
  centerDonationsList: any = [];

  constructor(private centerService: CenterDonorService) {}

  ngOnInit(): void {
    this.onCitasList();
  }

  onCitasList() {
    this.centerService.getCenterDonors().subscribe((response: CenterDonorResponse) => {
      this.centerDonationsList = response;
    });
  }
}
