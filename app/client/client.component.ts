import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HmlService } from '../Services/hml.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {


  f:FormGroup;
  list:any
  submitted : boolean = false;
  cancal:boolean=false

  constructor(private service:HmlService,private fb:FormBuilder,private rout:Router) {

    this.f = this.fb.group({
      clientName: ['',Validators.required],
      address: ['',Validators.required],
      phone:['',Validators.required],
      gst:['',Validators.required],
      contactPerson:['',Validators.required],
      website:['',Validators.required],
      phoneNumber:['',Validators.required],
      email:['',Validators.required],

    })
  }
ngOnInit(): void {}

submit(){
       this.submitted= true;
       console.log(this.f.controls['clientName'].value);
       console.log(this.f.controls['address'].value);
       console.log(this.f.controls['phone'].value);
       console.log(this.f.controls['gst'].value);
       console.log(this.f.controls['contactPerson'].value);
       console.log(this.f.controls['website'].value);
       console.log(this.f.controls['phoneNumber'].value);
       console.log(this.f.controls['email'].value);


       let input1={
        clientId:1,
        clientName:this.f.controls['clientName'].value,
        address:this.f.controls['address'].value,
        phone:this.f.controls['phone'].value,
        gst:this.f.controls['gst'].value,
        contactPerson:this.f.controls['contactPerson'].value,
        website:this.f.controls['website'].value,
        phoneNumber:this.f.controls['phoneNumber'].value,
        email:this.f.controls['email'].value,
        createdBy:1
       };
       if(this.f.invalid){
        return;
      }
       this.service. Insertclient(input1).subscribe((res:any)=>
       {
        alert(JSON.stringify(res));
        if(res.success==true){
          this.rout.navigateByUrl("/cld")

        }
       })
  }
}
