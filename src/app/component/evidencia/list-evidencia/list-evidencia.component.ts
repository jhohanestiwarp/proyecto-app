import { Component, OnInit } from '@angular/core';
import { evidenciaService } from 'src/app/service/evidencia.service';


@Component({
  selector: 'app-list-evidencia',
  templateUrl: './list-evidencia.component.html',
  styleUrls: ['./list-evidencia.component.css']
})
export class ListevidenciaComponent implements OnInit {
  public evidencias:any;
  constructor(private evidenciaService:evidenciaService) { }


  ngOnInit(): void {
    this.evidenciaService.Listevidencia().subscribe(result =>{this.evidencias = result
  });
}

  deleteevidencia(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.evidenciaService.Deleteevidencia(id).subscribe((respuesta)=>{
      this.evidencias.splice(iControl, 1)
    });
  }
  }

}
