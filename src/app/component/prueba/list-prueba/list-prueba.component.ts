import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/service/prueba.service';

@Component({
  selector: 'app-list-prueba',
  templateUrl: './list-prueba.component.html',
  styleUrls: ['./list-prueba.component.css']
})
export class ListPruebaComponent implements OnInit {
  public Prueba:any
  constructor(private pruebaService:PruebaService) { }

  ngOnInit(): void {
    this.pruebaService.Listprueba().subscribe(result =>{console.log(result);
      this.Prueba =result;
  });
}

  deletePrueba(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.pruebaService.DeletePrueba(id).subscribe((respuesta)=>{
      this.Prueba.splice(iControl, 1)
    });
  }
  }

}
