import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Auth,AuthResponse } from '../models/auth';
import {AlertController} from '@ionic/angular'
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  public URL_AUTH : string= 'https://dummyjson.com/auth/login';
  public datosUsuario : AuthResponse | null = null;

  constructor(
    private cliente : HttpClient,
    private mensaje: AlertController
  ) { }

  public autenticar({password,username}:Auth){
    this.cliente.post<AuthResponse>(this.URL_AUTH,{
      username,
      password
    },{
      headers: {
        'Content-Type' : 'application/json'
      }
    }).pipe(catchError(async(error : HttpErrorResponse)=>{
      if(error.status === 400){
        const alerta = await this.mensaje.create({
          message : 'Usuario o contraseña incorrecos',
          buttons : [
            {
              text : 'ok :(',
              role : 'confirm'
            }
          ]
        });
        await alerta.present();
      }
      return null
    }))
    .subscribe((datosInternet)=>{
      this.datosUsuario = datosInternet;
    })
  }


  public obtenerToken(){
    this.datosUsuario?.token
  }

}
