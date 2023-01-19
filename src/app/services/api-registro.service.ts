import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NuevoUser, RegistroRespuesta} from './../models/nuevoUser'

@Injectable({
  providedIn: 'root'
})
export class ApiRegistroService {

  public URL_REGISTRO : string =  'https://dummyjson.com/users/add';
  public datosReg : RegistroRespuesta | null = null;

  constructor(
    private cliente : HttpClient
  ) { }

  public registrar({firstName,lastName,age, username,
  password,birthDate,gender}:NuevoUser){
    this.cliente.post<RegistroRespuesta>(this.URL_REGISTRO,{
      firstName,
      lastName,
      age,
      username,
      password,
      birthDate,
      gender
    },{
      headers : {
        'Content-Type' : 'application/json'
      }
    }).subscribe((datosInternet)=>{
      this.datosReg = datosInternet
    })
  }

}
