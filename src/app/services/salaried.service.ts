import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalariedService {

  baseURL: string = "http://localhost:8090/homeloanappln";
  constructor(private httpSer: HttpClient) { }


  public addSalariedIncomeInfo(salaried:any){
              return this.httpSer.post<any>(this.baseURL + '/incomesalary',salaried);
  }
}
