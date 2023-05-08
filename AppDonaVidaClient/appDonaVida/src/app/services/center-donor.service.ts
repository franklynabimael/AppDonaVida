import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonationRecordResponse } from '../interfaces/responses/donationRecordResponse';
import { CenterDonorResponse } from '../interfaces/responses/centerDonorResponse';

@Injectable({
  providedIn: 'root',
})
export class CenterDonorService {
  private urlApi = `https://localhost:7082/api`;
  constructor(private http: HttpClient) {}

  getCenterDonors(): Observable<CenterDonorResponse> {
    return this.http.get<CenterDonorResponse>(`${this.urlApi}/CentersDonor`);
  }
}