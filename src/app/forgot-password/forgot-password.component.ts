import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from '../services/forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email:string = "";
  constructor(private forgotpasswordService: ForgotPasswordService) { }
  
  forgetPassword(forgotform: any) {
    this.email = forgotform.email;
    this.forgotpasswordService.forgetPassword(this.email).subscribe(
      response => {
        alert("we have sent you email for setting");
      })
  }

  
  ngOnInit(): void {
  }
}
