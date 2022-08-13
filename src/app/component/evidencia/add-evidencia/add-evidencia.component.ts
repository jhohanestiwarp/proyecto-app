import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { evidenciaService } from 'src/app/service/evidencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evidencia',
  templateUrl: './add-evidencia.component.html',
  styleUrls: ['./add-evidencia.component.css']
})
export class AddEvidenciaComponent implements OnInit {
  ListPersonaCarga:any;
  listActividadContrato:any;
  listPrueba:any;
  formevidencia:FormGroup;
  constructor(public formulario:FormBuilder,
    private evidenciaService:evidenciaService,
    private ruteador:Router ) {
      this.formevidencia=this.formulario.group({
        nombre:[''],
        descripcion:[''],
        ruta_almacenamiento:[''],
        fecha_cargue:[''],
        estado:[''],
        id_actividades_contrato:[''],
        id_prueba:[''],
        id_persona_carga:['']
      })

     }

ngOnInit(): void {
  const mirar =this.evidenciaService.Listactividadescontrato().subscribe(result =>{this.listActividadContrato= result }); 


  this.evidenciaService.Listprueba().subscribe(result =>{this.listPrueba = result });


  this.evidenciaService.Listpersonacarga().subscribe(result =>{this.ListPersonaCarga = result }); 

}


enviarDatos():any {
this.evidenciaService.Addevidencia(this.formevidencia.value).subscribe(result=>{
  alert("Registro agregado con exito")
  this.ruteador.navigateByUrl('/list-evidencia'); 

});

}
}



