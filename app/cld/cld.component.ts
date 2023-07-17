import { Component, OnInit } from '@angular/core';
import { HmlService } from '../Services/hml.service';

@Component({
  selector: 'app-cld',
  templateUrl: './cld.component.html',
  styleUrls: ['./cld.component.scss']
})
export class CldComponent implements OnInit {
list:any
  constructor(private service:HmlService) { }
clientId:any;
clientName:any;
address:any;
phone:any;
gst:any;
contactPerson:any;
website:any;
phoneNumber:any;
email:any;
createdBy:any

  ngOnInit(): void {
  this.service.Getclient().subscribe((data: any) => {
    // this.clientId=data.clientList.clientId
    // this.clientName =data.clientList[1]
    // this.address=data.clientList[3]
    // this.phone=data.clientList[2]
    // this.gst=data.clientList[4]
    // this.contactPerson=data.clientList[7]
    // this.website=data.clientList[5]
    // this.phoneNumber=data.clientList[8]
    // this.email=data.clientList[6]
    // this.createdBy=data.clientList[11]


   console.log(this.list)
   this.list=data.clientList

     })

}}
