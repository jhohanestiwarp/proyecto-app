import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//cargo
import { ListCargoComponent } from './component/cargo/list-cargo/list-cargo.component';
import { AddCargoComponent } from './component/cargo/add-cargo/add-cargo.component';
import { EditCargoComponent } from './component/cargo/edit-cargo/edit-cargo.component';

//prueba
import { ListPruebaComponent } from './component/prueba/list-prueba/list-prueba.component';
import { AddPruebaComponent } from './component/prueba/add-prueba/add-prueba.component';
import { EditPruebaComponent } from './component/prueba/edit-prueba/edit-prueba.component';

//tipo-documento
import { Addtipo_documentoComponent } from './component/tipo-documento/add-tipo-documento/add-tipo-documento.component';
import {Listtipo_documentoComponent  } from './component/tipo-documento/list-tipo-documento/list-tipo-documento.component';
import { Edittipo_documentoComponent } from './component/tipo-documento/edit-tipo-documento/edit-tipo-documento.component';


const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'list-cargo'},
  //cargo
  {path:'add-cargo', component:AddCargoComponent},
  {path:'list-cargo', component:ListCargoComponent},
  {path:'edit-cargo/:id_cargo', component:EditCargoComponent},

  //prueba
  {path:'add-prueba', component:AddPruebaComponent},
  {path:'list-prueba', component:ListPruebaComponent},
  {path:'edit-prueba/:id_prueba', component:EditPruebaComponent},

  //tipo-documento
  {path:'add-tipo_documento', component:Addtipo_documentoComponent},
  {path:'list-tipodocumento', component:Listtipo_documentoComponent},
  {path:'edit-tipo_documento/:id_prueba', component:Edittipo_documentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
