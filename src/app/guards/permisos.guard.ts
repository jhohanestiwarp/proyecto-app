import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { permisosService } from '../service/permisos.service';
import { AuthResponse } from '../interfaces/login.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  constructor(private router: Router, private auth: permisosService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLogging(this.router.url);
  }

  private checkLogging(url: string): Observable<boolean> {
    return new Observable((obs) => {
      const authResponse: string = localStorage.getItem('auth');
      if (!authResponse) {
        obs.next(false);
        obs.complete();
      }
      return this.checkPermissions(JSON.parse(authResponse), url);
    });
  }

  private checkPermissions(authData: AuthResponse, url: string): boolean {
    const permissions = authData.permisos.filter((auth) => {
      return auth.url === url;
    });

    if (!permissions.length) return false;
    return true;
  }
}
