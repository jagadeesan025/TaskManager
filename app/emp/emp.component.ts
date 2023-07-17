import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HmlService } from '../Services/hml.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {


f:FormGroup;
submitted : boolean = false;
cancal:boolean=false

constructor(private fb:FormBuilder,private rout:Router,private service:HmlService) {

  this.f = this.fb.group({
    employeeName : ['',Validators.required],
    mobile:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required],
    confirmPassword:['',Validators.required],

  })
}

  ngOnInit(): void     {}
    submit2(){

      this.submitted= true;
      console.log(this.f.controls['employeeName'].value);
      console.log(this.f.controls['mobile'].value);
      console.log(this.f.controls['username'].value);
      console.log(this.f.controls['password'].value);
      console.log(this.f.controls['confirmPassword'].value);

      let input2 ={
        clientId:'',
        employeeName:this.f.controls['employeeName'].value,
        mobile:this.f.controls['mobile'].value,
        username:this.f.controls['username'].value,
        password:this.f.controls['password'].value,
        confirmPassword:this.f.controls['confirmPassword'].value,
        createdBy:'1',

      };
      if(this.f.invalid){
        return;
      }
      this.service.Insertcatagry(input2).subscribe((res:any)=>
      {
       alert(JSON.stringify(res));
       if(res.success==true){
         this.rout.navigateByUrl("/empd")

       }
      })
      }}
