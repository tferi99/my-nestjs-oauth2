import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {DiscordAuthService} from './discord-auth.service';
import {KEY_CURRENT_DISCORD_USER} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private discordAuthService: DiscordAuthService,
    private router: Router,
//    private route: ActivatedRoute,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> {
    console.log('AuthGuard.canActivate(): request: ' + route);
    const code = route.queryParams.code;
    if (!code) {
      console.log('No code: -> denied');
      this.router.navigateByUrl('/login');
      return false;
    }
    return this.discordAuthService.authorize(code).pipe(
      tap(data => {
        localStorage.setItem(KEY_CURRENT_DISCORD_USER, JSON.stringify(data));
      }),
      map(data => true),
      catchError(error => {
        console.error('Error during calling client application', error);
        this.router.navigateByUrl('/login');
        return of(false)
      })
    );
  }
}

