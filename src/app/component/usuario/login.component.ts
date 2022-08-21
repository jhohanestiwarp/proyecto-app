import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  usuario = {
    email :'',
    password :''
  }




  ingresar() {
      console.log(this.usuario);
      localStorage.setItem("isLogin", JSON.stringify(this.usuario));
      
    }

  

  }
