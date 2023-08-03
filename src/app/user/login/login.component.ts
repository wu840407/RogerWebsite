import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;
  constructor(
      private fb: FormBuilder
  ) { }

  ngOnInit() {
    
      this.form = new FormGroup({
          username: new FormControl('', [Validators.pattern('^[a-zA-Z0-9-_]{5,20}'), Validators.required]),
          password: new FormControl('', [Validators.pattern('^[a-zA-Z0-9-_]{5,20}'), Validators.required]),
          rememberMe: new FormControl(true)
      })
  }
  get f(){
    return this.form.controls;
  }


  login() {
  }
}