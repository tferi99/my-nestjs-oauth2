import {
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService
{
	constructor(
		private readonly usersService: UsersService,
	) {
	}

	async findUserFromDiscordId(discordId: string): Promise<any> {
		console.log(`AuthService.findUserFromDiscordId(${discordId})`)
		const user = await this.usersService.findOne('discord_id', discordId);
		if ( !user ) {
			throw new UnauthorizedException();
		}
		console.log('findUserFromDiscordId.findUserFromDiscordId() - user found: ', user);
		return user;
	}
}
