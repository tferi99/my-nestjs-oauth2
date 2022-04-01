import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService
{
	private readonly users: User[];

	constructor() {
		// change one of the below discord_id to your Discord ID, else you'll never be able to log in
		this.users = [
			{
				userId    : 1,
				name      : 'bob',
				discord_id: '1234sfaf',
			},
			{
				userId    : 2,
				name      : 'jeff',
				discord_id: 't4ege4yhesyhe',
			},
			{
				userId    : 3,
				name      : 'maria',
				discord_id: 'erh5ree45',
			},
			{
				userId    : 4,
				name      : 'tferi',
				discord_id: '426324681910517760',
			},
/*			{
				userId    : 5,
				name      : 'discord',
				discord_id: '959088233319383080',
			},*/
		];
	}

	async findOne(field: string, discordId: string): Promise<User | undefined> {
		console.log(`UsersService.findOne(${field}), ${discordId}`)
		const user = this.users.find(user => user[field] === discordId);
		console.log('UsersService.findOne() - user: ', user);
		return user;
	}
}
