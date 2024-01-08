import { Component, OnInit } from '@angular/core';
import { OtpService } from './otp.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage  {
  mobileNumber: string = '';
  isOtpSent: boolean = false;

  constructor(private otpService: OtpService) {}

  generateOtp() {
    this.otpService.sendOtp(this.mobileNumber).subscribe(
      (response) => {
        this.isOtpSent = true;
        console.log('OTP Sent Successfully', response);
      },
      (error) => {
        console.error('Error generating OTP', error);
      }
    );
  }
}