import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  contactMode: string = '';
  @ViewChild('stdSignUpForm')stdSignUpForm !:NgForm

userInfo={
  fname:"rosh",
  lname:"Patil",
  userDetails:{
    username:"roshni",
    email:"rosh123@gmail.com"
  },
  contact:"6677889934",
  contactMode:"phone",
  secreateQuestion:"favoriteTeacher",
  answer:"Ravi sir",
}
  constructor() { }

  ngOnInit(): void {
  }
  stdForm(){
if(this.stdSignUpForm.valid){
console.log(this.stdSignUpForm.value);
  this.stdSignUpForm.reset()
}
  }
}
