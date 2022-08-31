import { Component, OnInit } from '@angular/core';
import { categoriaService } from 'src/app/service/categoria.service';
import { GetPermissionService } from 'src/app/service/getPermissions.service';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListcategoriaComponent implements OnInit {
  public categorias:any
  puedeVer: boolean = false;
  puedeEliminar: boolean = false;
  puedeModificar: boolean = false;
  puedeCrear: boolean = false;

  constructor(
    private categoriaService:categoriaService,
    private getPermissionService: GetPermissionService
     ) {
    const permissions = this.getPermissionService.getPermissions();
    this.puedeVer = !!permissions.read;
    this.puedeEliminar = !!permissions.delete;
    this.puedeModificar = !!permissions.update;
    this.puedeCrear = !!permissions.create;
  }

  ngOnInit(): void {
    this.categoriaService.Listcategoria().subscribe(result =>{console.log(result);
      this.categorias =result;
  });
}

  deletecategoria(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.categoriaService.Deletecategoria(id).subscribe((respuesta)=>{
      this.categorias.splice(iControl, 1)
    });
  }
  }

}
