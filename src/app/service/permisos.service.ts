import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {permisos} from '../models/Permisos';
@Injectable({
  providedIn: 'root'
})
export class permisosService {
  Api: string = 'http://localhost:8090/api/permisos';

  Api2: string = 'http://localhost:8090/api/persona';

  Api3: string = 'http://localhost:8090/api/rol';

  constructor(private clienteHttp:HttpClient) { }

  Addpermisos(datopermisos:permisos):Observable<any>{
    return this.clienteHttp.post(this.Api,datopermisos);
  }

  Listpermisos(){
    return this.clienteHttp.get(this.Api);
    }

    Deletepermisos(id:string):Observable<any>{
      return this.clienteHttp.delete(this.Api +"/"+id);
    }

    Obtenerpermisos(id:string):Observable<any>{
      return this.clienteHttp.get(this.Api + "/"+id);
    }

    Updatepermisos(datospermisos:permisos):Observable<any>{
      return this.clienteHttp.put(this.Api,datospermisos );
    }

    
  Listpersona(){
    return this.clienteHttp.get(this.Api2);
    }

    Listrol(){
        return this.clienteHttp.get(this.Api3);
        }
    

}
