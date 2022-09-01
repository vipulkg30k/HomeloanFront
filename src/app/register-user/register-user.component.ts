import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserHttpService } from '../services/register-user-http.service';

@Component({
  selector: 'app-register-user',
  templateUrl:'./register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  regform!: FormGroup;
   user:any;
   success = '';
   
 constructor(private regser:RegisterUserHttpService,private fb: FormBuilder, private router: Router) { }
 
   ngOnInit() {
       this.regform = new FormGroup({
           firstName: new FormControl('', Validators.required,),
           middleName: new FormControl(),
           lastName: new FormControl('', Validators.required),
           email: new FormControl('', Validators.compose([
             Validators.required,
             Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
           password: new FormControl('',[Validators.required,Validators.minLength(8)]),
           phone:new FormControl('', Validators.required,),
           dob:new FormControl('', Validators.required,),
           gender:new FormControl('', Validators.required,),
           nationality:new FormControl('', Validators.required,),
           aadharNo:new FormControl ('', Validators.required,),
           panNo:new FormControl('', Validators.required,)
         });
   }
 
   submitted = false;
   getfval(){
     this.regform.controls;
   }
 
   onSubmit() {
     if(this.regform.invalid){
       return;
     }
     this.submitted = true;
     this.user=this.regform.value;
    this.regser.registerUser(this.user).subscribe((response: any) => {
      this.user=response
      console.log(this.user);
      alert("Record added successfully");
      // localStorage.setItem("userId",this.user.userId);
      localStorage.setItem("user", JSON.stringify(this.user.userId));
      this.router.navigate(['/typesal']);
    })
  }
}
 