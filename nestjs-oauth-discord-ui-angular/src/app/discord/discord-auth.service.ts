import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OAUTH_API_SERVER_URL} from '../app.constants';
import {Observable} from 'rxjs';


export interface DiscordAuthResult {
  name: string;
  userId: string;
  discordId: string;
  discordInfo: DiscordUserInfo;
}

export interface DiscordUserInfo {
  id: string;
  username: string;
  avatar: any;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: any;
  banner_color: any;
  accent_color: any;
  locale: string;
  mfa_enabled: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DiscordAuthService {
  constructor(
    private http: HttpClient
  ) { }

  authorize(code: string): Observable<DiscordAuthResult> {
    console.log(`DiscordAuthService.authorize(${code})`);
    const url = OAUTH_API_SERVER_URL + '/auth/discord?code=' + code;
    return this.http.get<DiscordAuthResult>(url);
  }
}



