import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SalariedService } from '../services/salaried.service';

@Component({
  selector: 'app-salaried',
  templateUrl: './salaried.component.html',
  styleUrls: ['./salaried.component.css']
})
export class SalariedComponent implements OnInit {
  
  salariedForm!: FormGroup;
  salaried:any;
  userId: any;
  
  constructor(private salariedSer:SalariedService,private fb: FormBuilder, private router: Router) { }

  ngOnInit(){
    this.userId = localStorage.getItem("user");
    this.salariedForm = this.fb.group({
      // srNo: ['', Validators.required],
      retirementAge: ['', Validators.required],
      monthlySalary: ['', Validators.required],
      organization: ['',Validators.required],
      user: [this.userId]
    });
    
  }

   onSubmit(){
    var payLoad = {
      'retirementAge': this.salariedForm.controls['retirementAge'].value,
      'monthlySalary': this.salariedForm.controls['monthlySalary'].value,
      'organization': this.salariedForm.controls['organization'].value,
      'user': {
          'userId' : this.userId
      }
    }
   this.salariedSer.addSalariedIncomeInfo(payLoad).subscribe(
       Response => {
                   console.log("record added")
                   this.salaried = Response;
                    console.log(this.salaried);
                    console.log(this.salaried.user.userId);
                    console.log(typeof this.salaried.user.userId);
                    this.router.navigate(['/property']);
                   }
     );
    
   }

  
}

