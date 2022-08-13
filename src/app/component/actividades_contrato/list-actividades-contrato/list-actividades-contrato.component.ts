import { Component, OnInit } from '@angular/core';
import { actividades_contratoService } from 'src/app/service/actividades_contrato.service';


@Component({
  selector: 'app-list-actividades_contrato',
  templateUrl: './list-actividades-contrato.component.html',
  styleUrls: ['./list-actividades-contrato.component.css']
})
export class Listactividades_contratoComponent implements OnInit {
  public actividades_contratos:any;
  constructor(private actividades_contratoService:actividades_contratoService) { }

  ngOnInit(): void {
    this.actividades_contratoService.Listactividades_contrato().subscribe(result =>{this.actividades_contratos = result
 
 
    });
}

  deleteactividades_contrato(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.actividades_contratoService.Deleteactividades_contrato(id).subscribe((respuesta)=>{
      this.actividades_contratos.splice(iControl, 1)
    });
  }
  }

}
