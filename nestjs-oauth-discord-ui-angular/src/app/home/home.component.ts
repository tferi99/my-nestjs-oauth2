import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DiscordAuthResult} from '../discord/discord-auth.service';
import {KEY_CURRENT_DISCORD_USER} from '../app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user!: DiscordAuthResult;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userData = localStorage.getItem(KEY_CURRENT_DISCORD_USER);
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }
}
