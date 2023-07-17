import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HmlService } from '../Services/hml.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  TaskForm:FormGroup;
  list:any;
  submitted : boolean = false;
  cancal:boolean=false
  Category:any;
  ClientDtls:any;
  service: any;

  constructor(private fb:FormBuilder,private rout:Router,private hmlSer:HmlService) {

    this.TaskForm = this.fb.group({
      Category : ['',Validators.required],
      description : ['',Validators.required],
      sd: ['',Validators.required],
      dd: ['',Validators.required],
      Client:[null,Validators.required]

    })
  }

    ngOnInit(): void{
      if(this.TaskForm.invalid){
        return;
      }

    }

    // Getclient(){
    //   this.hmlSer.Getclient().subscribe((data:any)=>{
    //     if(data.success){
    //       this.ClientDtls=data.clientList;
    //     }
    //   })


     submit(){
        this.submitted= true;
          console.log(this. TaskForm.controls['CategoClientry'].value);
          console.log(this. TaskForm.controls['description'].value);
          console.log(this. TaskForm.controls['sd'].value);
          console.log(this. TaskForm.controls['description'].value);
          let input2 ={
            clientId:'',
            Client:this. TaskForm.controls['Client'].value,
            description:this. TaskForm.controls['description'].value,
             sd:this. TaskForm.controls[' sd'].value,
            dd:this. TaskForm.controls['dd'].value,
            createdBy:'1',

          };
          this.service.InsertAllocation(input2).subscribe((res:any)=>
          {
            alert(JSON.stringify(res));
            if(res.success==true){
              this.rout.navigateByUrl("/catad")

           }
           })}}

