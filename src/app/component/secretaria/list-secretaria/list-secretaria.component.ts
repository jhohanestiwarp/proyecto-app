import { Component, OnInit } from '@angular/core';
import { secretariaService } from 'src/app/service/secretaria.service';


@Component({
  selector: 'app-list-secretaria',
  templateUrl: './list-secretaria.component.html',
  styleUrls: ['./list-secretaria.component.css']
})
export class ListsecretariaComponent implements OnInit {
  public secretarias:any;
  constructor(private secretariaService:secretariaService) { }

  ngOnInit(): void {
    this.secretariaService.Listsecretaria().subscribe(result =>{this.secretarias = result
  });
}

  deletesecretaria(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.secretariaService.Deletesecretaria(id).subscribe((respuesta)=>{
      this.secretarias.splice(iControl, 1)
    });
  }
  }

}
