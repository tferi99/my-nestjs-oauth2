import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {OAUTH_AUTH_URL, OAUTH_REDIRECT} from '../app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  discordOauthLoginConfig = {
    url: OAUTH_AUTH_URL,
    query: {
      client_id: environment.clientAppId,
      redirect_uri: OAUTH_REDIRECT,
      response_type: 'code',
      scope: 'identify',
    },
  }

  constructor() { }

  ngOnInit(): void {
  }

  get loginUrl(): string {
    return this.discordOauthLoginConfig.url + Object.entries(this.discordOauthLoginConfig.query)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
  }
}
