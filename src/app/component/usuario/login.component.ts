import { Component } from '@angular/core';
import { permisosService } from '../../service/permisos.service';
import { AuthResponse } from '../../interfaces/login.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario = {
    email: '',
    password: '',
  };

  constructor(private auth: permisosService) {}
  /*

*/

  ingresar() {
    if (!this.usuario.email || !this.usuario.password) return;
    this.auth
      .login(this.usuario.email, this.usuario.password)
      .subscribe((res: AuthResponse) => {
        window.localStorage.setItem('auth', JSON.stringify(res));
      });
  }
}
