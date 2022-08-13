import { Component, OnInit } from '@angular/core';
import { permisosService } from 'src/app/service/permisos.service';


@Component({
  selector: 'app-list-permisos',
  templateUrl: './list-permisos.component.html',
  styleUrls: ['./list-permisos.component.css']
})
export class ListpermisosComponent implements OnInit {
  public permisoss:any;
  constructor(private permisosService:permisosService) { }

  ngOnInit(): void {
    this.permisosService.Listpermisos().subscribe(result =>{this.permisoss = result
  });
}

  deletepermisos(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.permisosService.Deletepermisos(id).subscribe((respuesta)=>{
      this.permisoss.splice(iControl, 1)
    });
  }
  }

}
