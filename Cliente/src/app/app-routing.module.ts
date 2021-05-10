import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//hay que importar los componentes que se crean en el proyecto
import { UsuarioComponent } from './componentes/usuario/usuario.component'

const routes: Routes = [

  {
    path:'usuariocrud',
    component: UsuarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
