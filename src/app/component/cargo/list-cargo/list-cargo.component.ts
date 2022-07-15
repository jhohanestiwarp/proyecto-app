import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/service/cargo.service';

@Component({
  selector: 'app-list-cargo',
  templateUrl: './list-cargo.component.html',
  styleUrls: ['./list-cargo.component.css']
})
export class ListCargoComponent implements OnInit {
  public Cargos:any
  constructor(private cargoService:CargoService) { }

  ngOnInit(): void {
    this.cargoService.ListCargo().subscribe(result =>{console.log(result);
      this.Cargos =result;
  });
}

  deleteCargo(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.cargoService.DeleteCargo(id).subscribe((respuesta)=>{
      this.Cargos.splice(iControl, 1)
    });
  }
  }

}
