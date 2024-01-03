// otp.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OtpService {
  private apiUrl = 'https://2factor.in/API/V1/5275a7d6-90da-11ee-8cbb-0200cd936042/SMS/';

  constructor(private http: HttpClient) {}

  sendOtp(mobileNumber: string): Observable<any> {
    const url = `${this.apiUrl}${mobileNumber}/AUTOGEN/OTP1`;
    return this.http.get(url);
  }
}