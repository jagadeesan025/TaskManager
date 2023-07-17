import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HmlService } from '../Services/hml.service';
@Component({
  selector: 'app-cata',
  templateUrl: './cata.component.html',
  styleUrls: ['./cata.component.scss']
})
export class CataComponent implements OnInit {

  f:FormGroup;
  list:any;
  submitted : boolean = false;
  cancal:boolean=false

  constructor(private fb:FormBuilder,private rout:Router,private service:HmlService) {

    this.f = this.fb.group({
      Category : ['',Validators.required],
      description : ['',Validators.required],

    })
  }

    ngOnInit(): void{}
      submit1(){
        this.submitted= true;
        console.log(this.f.controls['Category'].value);
        console.log(this.f.controls['description'].value);
        let input2 ={
          clientId:'',
          Category:this.f.controls['Category'].value,
          description:this.f.controls['description'].value,
          createdBy:'1',

        };
        if(this.f.invalid){
          return;
        }
        this.service.Insertcatagry(input2).subscribe((res:any)=>
        {
         alert(JSON.stringify(res));
         if(res.success==true){
           this.rout.navigateByUrl("/cata")

         }
        })}}
