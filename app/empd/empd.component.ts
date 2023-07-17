import { Component, OnInit } from '@angular/core';
import { HmlService } from '../Services/hml.service';

@Component({
  selector: 'app-empd',
  templateUrl: './empd.component.html',
  styleUrls: ['./empd.component.scss']
})
export class EmpdComponent implements OnInit {
  list:any
  constructor(private service:HmlService) { }
  employeeId:any;
  employeeName:any;
  mobile:any;
  userName:any;
  password:any;
  confirmPassword:any;
  createdBy:any



    ngOnInit(): void {
    this.service.Getemployee().subscribe((data: any) => {
     console.log(this.list)
     this.list=data.employeeList

       })

  }}
