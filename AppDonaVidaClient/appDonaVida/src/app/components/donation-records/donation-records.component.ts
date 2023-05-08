import { Component } from '@angular/core';
import { DonationRecordResponse } from '../../interfaces/responses/donationRecordResponse';
import { DonationRecordService } from '../../services/donation-record.service';

@Component({
  selector: 'app-donation-records',
  templateUrl: './donation-records.component.html',
  styleUrls: ['./donation-records.component.css'],
})
export class DonationRecordsComponent {
  registerDonationList: any = [];

  constructor(private donationRecordService: DonationRecordService) {}

  ngOnInit(): void {
    this.onRecordList();
  }
  onRecordList() {
    this.donationRecordService
      .getDonationRecords()
      .subscribe((response: DonationRecordResponse) => {
        this.registerDonationList = response;
      });
  }
}
