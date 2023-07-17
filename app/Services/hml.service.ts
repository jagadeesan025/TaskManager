import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HmlService {

  constructor(private http :HttpClient) { }
  Insertclient(input1:any){
    return this.http.post("http://catodotest.elevadosoftwares.com/Client/InsertClient",input1)
  }
  Getclient(){
    return this.http.get("http://catodotest.elevadosoftwares.com//Client/GetAllClientDetails")
  }
  Insertcatagry(input2:any){
    return this.http.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory",input2)
  }
  Getcatagry(){
    return this.http.get("http://catodotest.elevadosoftwares.com//Category/GetAllCategories")
  }
  Insertemployee(input3:any){
 return this.http.post("http://catodotest.elevadosoftwares.com/Employee/InsertEmployee",input3)
}
Getemployee(){
  return this.http.get("http://catodotest.elevadosoftwares.com/Employee/GetAllEmployeeDetails")

}
InsertAllocation(input2:any){
  return this.http.post("http://catodotest.elevadosoftwares.com/Allocation/InsertAllocation",input2)
}

}



