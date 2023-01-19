import { Component, OnInit } from '@angular/core';
import {AuthApiService} from './../../services/auth-api.service';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formularioLogin : FormGroup

  constructor(
    private authServi : AuthApiService,
    private builder : FormBuilder
  ) {
    this.formularioLogin = builder.group({
      username : ['', [Validators.required,Validators.maxLength(10), Validators.minLength(5)]],
      password : ['', [Validators.required, Validators.maxLength(16), Validators.minLength(5)]]
    })
  }

  ngOnInit() {
  }

  public validar(){
    const formularioValido = this.formularioLogin.valid;
    if(!formularioValido){
      return
    }
    this.authServi.autenticar({
      username : this.formularioLogin.value.username,
      password : this.formularioLogin.value.password
    })
  }

}
