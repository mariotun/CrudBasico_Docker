
import { Injectable } from '@angular/core';

//importaciones que na estan por defecto

import { HttpClient,HttpHeaders } from '@angular/common/http'//se tiene que importar para que se puesa user el protocolo http(para las consultas)
import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiciocrudService {

  constructor(private http:HttpClient,private router: Router) { }

  headers: HttpHeaders=new HttpHeaders({
    "Content-Type":"application/json"//tipo de dato que se va a estar enviando(json)
  })


  getuser(){
    const url="http://localhost:8123/usuarios";
    return this.http.get(url);
  }


  postuser(nombre:string,telefono:number,correo:string,contra:string){

    const url2="http://localhost:8123/post/post";

    return this.http.post(
      url2,
      { 
        "IdUsuario": null,
        "Nombre": nombre,
        "Telefono": telefono,
        "Correo": correo,
        "Contrasena": contra
        
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  

  }


  putuser(telefono:number,idusuario:number){

    const url3="http://localhost:8123/put/put";

    return this.http.put(
      url3,
      { 
        "Telefono": telefono,
        "IdUsuario": idusuario
        
      },
      { headers: this.headers }
    ).pipe(map(data => data));
  

  }


  deleteuser(idusuario:number){

    const url4="http://localhost:8123/delete/delete";

    return this.http.delete(
      url4+"/"+idusuario,
      { headers: this.headers }
    ).pipe(map(data => data));
  

  }


}
