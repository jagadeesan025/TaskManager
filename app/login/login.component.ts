import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email :string = ""
  model : any = {};

  constructor( private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:any)
  {
  this.route.navigateByUrl("/emp");

  }

}
