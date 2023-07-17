import { Component, OnInit } from '@angular/core';
import { HmlService } from '../Services/hml.service';

@Component({
  selector: 'app-catad',
  templateUrl: './catad.component.html',
  styleUrls: ['./catad.component.scss']
})
export class CatadComponent implements OnInit {

  list:any
  constructor(private service:HmlService) { }
categoryId:any;
category:any;
description:any;
createdBy:any

  ngOnInit(): void {
  this.service. Getcatagry().subscribe((data: any) => {
   console.log(this.list)
   this.list=data.categoryList

     })

}}
