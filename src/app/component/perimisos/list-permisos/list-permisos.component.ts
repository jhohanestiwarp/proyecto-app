import { Component, OnInit } from '@angular/core';
import { GetPermissionService } from 'src/app/service/getPermissions.service';
import { permisosService } from 'src/app/service/permisos.service';


@Component({
  selector: 'app-list-permisos',
  templateUrl: './list-permisos.component.html',
  styleUrls: ['./list-permisos.component.css']
})
export class ListpermisosComponent implements OnInit {
  public permisoss: any;
  puedeVer: boolean = false;
  puedeEliminar: boolean = false;
  puedeModificar: boolean = false;
  puedeCrear: boolean = false;
  constructor(
    private permisosService: permisosService,
    private getPermissionService: GetPermissionService
  ) {
    const permissions = this.getPermissionService.getPermissions();
    this.puedeVer = !!permissions.read;
    this.puedeEliminar = !!permissions.delete;
    this.puedeModificar = !!permissions.update;
    this.puedeCrear = !!permissions.create;
  }
  ngOnInit(): void {
    this.permisosService.Listpermisos().subscribe(result => {
      this.permisoss = result
    });
  }

  deletepermisos(id: any, iControl: any) {
    if (window.confirm("Desea borrar el registro?")) {
      this.permisosService.Deletepermisos(id).subscribe((respuesta) => {
        this.permisoss.splice(iControl, 1)
      });
    }
  }

}
