import { PassportStrategy } from '@nestjs/passport';
import {
	HttpService,
	Injectable,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-oauth2';
import { stringify } from 'querystring';

const clientID = process.env.CLIENT_APP_ID;
const clientSecret = process.env.CLIENT_APP_SECRET;
const callbackURL = process.env.CALLBACK_URL;

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord')
{
	constructor(
		private authService: AuthService,
		private http: HttpService,
	) {
		super({
			authorizationURL: `https://discord.com/api/oauth2/authorize?${ stringify({
				client_id    : clientID,
				redirect_uri : callbackURL,
				response_type: 'code',
				scope        : 'identify',
			}) }`,
			tokenURL        : 'https://discord.com/api/oauth2/token',
			scope           : 'identify',
			clientID,
			clientSecret,
			callbackURL,
		});

		console.log(`DiscordStrategy for clientID: ${clientID}, callbackURL: ${callbackURL}`);
	}

	async validate(accessToken: string): Promise<any> {
		console.log(`DiscordStrategy.validate(accessToken: ${accessToken})`)
		const { data } = await this.http.get('https://discord.com/api/users/@me', {
			headers: { Authorization: `Bearer ${ accessToken }` },
		}).toPromise();

		console.log('Data from Discord: ', data);

		// getting user from local database by logged-in Discord user
		const user = await this.authService.findUserFromDiscordId(data.id);
		user.discordInfo = data;
		return user;
	}
}
