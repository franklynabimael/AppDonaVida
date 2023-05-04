import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonationRecordResponse } from '../interfaces/responses/donationRecordResponse';

@Injectable({
  providedIn: 'root',
})
export class DonationRecordService {
  private urlApi = `https://localhost:7082/api/DonationRecords`;
  constructor(private http: HttpClient) {}

  getDonationRecords(): Observable<DonationRecordResponse> {
    return this.http.get<DonationRecordResponse>(`${this.urlApi}`);
  }

  getDonationRecord(
    donationRecordId: number
  ): Observable<DonationRecordResponse> {
    return this.http.get<DonationRecordResponse>(
      `${this.urlApi}/${donationRecordId}`
    );
  }

  getRecordUser(): Observable<DonationRecordResponse> {
    return this.http.get<DonationRecordResponse>(`${this.urlApi}/recordUser`);
  }
}
