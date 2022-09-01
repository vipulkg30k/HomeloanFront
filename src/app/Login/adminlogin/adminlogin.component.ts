import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminloginService } from 'src/app/services/adminlogin.service';
import { AdminLogin } from 'src/app/admin-login';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

admin = new AdminLogin();

  constructor(private _service:AdminloginService , private route:Router) { }

  ngOnInit(): void {
  }

  adminlogin(){
    this._service.loginAdminFromRemote(this.admin).subscribe((response: any) => {
    console.log(this.admin = response);
   
    if(response){
      alert("log in success");
      this.route.navigate(['/admindashboard'])

    }else{
      alert("User does not exist");
    }
  })

}

}
