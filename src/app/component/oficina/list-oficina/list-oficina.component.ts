import { Component, OnInit } from '@angular/core';
import { oficinaService } from 'src/app/service/oficina.service';


@Component({
  selector: 'app-list-oficina',
  templateUrl: './list-oficina.component.html',
  styleUrls: ['./list-oficina.component.css']
})
export class ListoficinaComponent implements OnInit {
  public oficinas:any;
  constructor(private oficinaService:oficinaService) { }

  ngOnInit(): void {
    this.oficinaService.Listoficina().subscribe(result =>{this.oficinas = result
  });
}

  deleteoficina(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.oficinaService.Deleteoficina(id).subscribe((respuesta)=>{
      this.oficinas.splice(iControl, 1)
    });
  }
  }

}
