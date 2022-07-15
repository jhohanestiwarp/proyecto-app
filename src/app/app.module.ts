import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

//exportacion de componentes
//cargo
import { AddCargoComponent } from './component/cargo/add-cargo/add-cargo.component';
import { ListCargoComponent } from './component/cargo/list-cargo/list-cargo.component';
import { EditCargoComponent } from './component/cargo/edit-cargo/edit-cargo.component';
//prueba
import { AddPruebaComponent } from './component/prueba/add-prueba/add-prueba.component';
import { EditPruebaComponent } from './component/prueba/edit-prueba/edit-prueba.component';
import { ListPruebaComponent } from './component/prueba/list-prueba/list-prueba.component';
//tipo documento
import {Addtipo_documentoComponent  } from './component/tipo-documento/add-tipo-documento/add-tipo-documento.component';
import { Edittipo_documentoComponent } from './component/tipo-documento/edit-tipo-documento/edit-tipo-documento.component';
import { Listtipo_documentoComponent } from './component/tipo-documento/list-tipo-documento/list-tipo-documento.component';


@NgModule({
  declarations: [
    AppComponent,

    //cargo
    AddCargoComponent,
    ListCargoComponent,
    EditCargoComponent,
    //prueba
    AddPruebaComponent,
    EditPruebaComponent,
    ListPruebaComponent,
    //Tipo-documento
    Addtipo_documentoComponent,
    Edittipo_documentoComponent,
    Listtipo_documentoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
