import { Component, OnInit } from '@angular/core';
import { categoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListcategoriaComponent implements OnInit {
  public categorias:any
  constructor(private categoriaService:categoriaService) { }

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
