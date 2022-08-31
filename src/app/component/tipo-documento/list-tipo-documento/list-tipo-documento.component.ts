import { Component, OnInit } from '@angular/core';
import { GetPermissionService } from 'src/app/service/getPermissions.service';
import { tipodocumentoService } from 'src/app/service/tipodocumento.service';

@Component({
  selector: 'app-list-tipo_documento',
  templateUrl: './list-tipo-documento.component.html',
  styleUrls: ['./list-tipo-documento.component.css']
})
export class Listtipo_documentoComponent implements OnInit {
  public tipo_documentos: any
  puedeVer: boolean = false;
  puedeEliminar: boolean = false;
  puedeModificar: boolean = false;
  puedeCrear: boolean = false;

  constructor(
    private tipodocumentoService: tipodocumentoService,
    private getPermissionService: GetPermissionService
  ) {
    const permissions = this.getPermissionService.getPermissions();
    this.puedeVer = !!permissions.read;
    this.puedeEliminar = !!permissions.delete;
    this.puedeModificar = !!permissions.update;
    this.puedeCrear = !!permissions.create;
  }
  ngOnInit(): void {
    this.tipodocumentoService.Listtipodocumento().subscribe(result => {
      console.log(result);
      this.tipo_documentos = result;
    });
  }

  deletetipo_documento(id: any, iControl: any) {
    if (window.confirm("Desea borrar el registro?")) {
      this.tipodocumentoService.Deletetipodocumento(id).subscribe((respuesta) => {
        this.tipo_documentos.splice(iControl, 1)
      });
    }
  }

}
