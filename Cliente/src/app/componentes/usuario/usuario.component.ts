
import { Component, OnInit } from '@angular/core';

//se importaron no venia por defecto
import { ServiciocrudService } from 'src/app/servicios/serviciocrud.service';
import { UsuarioInterface } from '../../models/interfaces';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  user={//es un objeto

    nombreu:"",
    telefonou:null,
    correou:"",
    contrau:""
    
  }

  put={
    telefonop:null,
    idusuariop:null
  }
  
 delete={
    idusuariod:null
 }


  constructor(private serviciocrud:ServiciocrudService) { }

  ngOnInit(): void {

    this.serviciocrud.getuser().subscribe((res:UsuarioInterface[])=>{//subscribe escucha si el servidor le va a decir algo 
      this.Usuarios=res;
      //console.log("-->",res)
    })


  }


  Usuarios: UsuarioInterface[] = [];



  AgregarUsuario(){

    if(this.user.nombreu==="" || this.user.telefonou===null || this.user.correou==="" || this.user.contrau===""){
      alert("Llene todos los campos correctamente");

    }else{

    this.serviciocrud.postuser(this.user.nombreu,this.user.telefonou,this.user.correou,this.user.contrau).subscribe(
      res=>{
        console.log("POST_USER: ",res);
        alert("Mensaje: Se registro un nuevo usuario correctamente.");
      },
      err =>{
        console.log(err);
        alert("Error: Datos incorrectos o datos no registrados");
      }
    )

    }

  }


  ActualizarUsuario(){
    
    if(this.put.telefonop===null || this.put.idusuariop===null){
      alert("Llene todos los campos correctamente");
    }else{

    this.serviciocrud.putuser(this.put.telefonop,this.put.idusuariop).subscribe(
      res=>{
        console.log("PUT_USER: ",res);
        alert("Mensaje: Se actualizo el numero de telefono correctamente.");
      },
      err =>{
        console.log(err);
        alert("Error: Datos incorrectos o datos no registrados");
      }
    )


    }

  }

  EliminarUsuario(){

    if (this.delete.idusuariod===null){
      alert("Llene todos los campos correctamente");

    }else{

    this.serviciocrud.deleteuser(this.delete.idusuariod).subscribe(
      res=>{
        console.log("DELETE_USER: ",res);
        alert("Mensaje: Se elimino un usuario correctamente.");
      },
      err =>{
        console.log(err);
        alert("Error: Datos incorrectos o datos no registrados");
      }
    )

  }


}

  

}
