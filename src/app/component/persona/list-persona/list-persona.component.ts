import { Component, OnInit } from '@angular/core';
import { personaService } from 'src/app/service/persona.service';
import { GetPermissionService } from 'src/app/service/getPermissions.service';


@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListpersonaComponent implements OnInit {
  public personas:any;
  puedeVer: boolean = false;
  puedeEliminar: boolean = false;
  puedeModificar: boolean = false;
  puedeCrear: boolean = false;

  constructor(
    private personaService:personaService,
    private getPermissionService: GetPermissionService

    ) {
      const permissions = this.getPermissionService.getPermissions();
      this.puedeVer = !!permissions.read;
      this.puedeEliminar = !!permissions.delete;
      this.puedeModificar = !!permissions.update;
      this.puedeCrear = !!permissions.create;
    }
  

  ngOnInit(): void {
    this.personaService.Listpersona().subscribe(result =>{this.personas = result
  });
}

  deletepersona(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.personaService.Deletepersona(id).subscribe((respuesta)=>{
      this.personas.splice(iControl, 1)
    });
  }
  }

}
