import { Component, OnInit } from '@angular/core';
import { contratosService } from 'src/app/service/contratos.service';


@Component({
  selector: 'app-list-contratos',
  templateUrl: './list-contratos.component.html',
  styleUrls: ['./list-contratos.component.css']
})
export class ListcontratosComponent implements OnInit {
  public contratoss:any;
  constructor(private contratosService:contratosService) { }

  ngOnInit(): void {
    this.contratosService.Listcontratos().subscribe(result =>{this.contratoss = result
  });
}

  deletecontratos(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.contratosService.Deletecontratos(id).subscribe((respuesta)=>{
      this.contratoss.splice(iControl, 1)
    });
  }
  }

}
