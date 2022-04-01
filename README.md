# my-nestjs-oauth2
NestJS backend with VueJS and Angular frontend to demonstrate how to login with Discord OAuth2 

## Installation

### NestJS Backend:
```
cd nestjs-oauth-discord
npm i
```

### Angular Frontend
```
cd nestjs-oauth-discord-ui-angular
npm i
```

### VueJs Frontend 
```
cd nestjs-oauth-discord-ui-vue
npm i
```

## Prerequisites
### Create a Discord Application
- go to [Discord Developer Portal](https://discord.com/developers/applications)
- click 'New Application' button
- under OAuth2/General:
  - add these URLs to Redirects:
```
http://localhost:18080/auth/discord
http://localhost:4200/home
```
  - get 'Client ID' and 'Client Secret' for configuration

## Configuration
### NestJS Backend:
Configuration file: _nestjs-oauth-discord/.env_
- Set 'Client ID' and 'Client Secret' for backend in:
```
CLIENT_APP_ID=123......
CLIENT_APP_SECRET=Abc.....
```
- Specify callback URL:
  - for Angular frontend:
  ```
  CALLBACK_URL=http://localhost:4200/home
  ```
  **OR (!!!)**
  
  - for Angular frontend:
  ```
  CALLBACK_URL=http://localhost:18080/auth/discord
  ```
  Add your Discord user to database
  File: _nestjs-oauth-discord/src/users/users.service.ts_:
  ```
	constructor() {
		// change one of the below discord_id to your Discord ID, else you'll never be able to log in
		this.users = [
			{
				userId    : 1,              // application level user ID (arbitrary unique)
				name      : 'bob',          // name (arbitrary)
				discord_id: '1234sfaf',     // Discord ID of user
			},
      ...
    }
  ```
  
  
### Angular Frontend
Configuration file: _nestjs-oauth-discord-ui-angular/src/environments/environment.ts_
Set 'Client ID':
```
clientAppId: '123.....',
```

### VueJs Frontend
Configuration file: _nestjs-oauth-discord-ui-vue/.env_
Set 'Client ID':
```
DISCORD_CLIENT_ID=123.....
```

  NOTE: Discord ID of the user can be retrieved from NestJS console log first time you try to login:
```
[Nest] 27580   - 04/01/2022, 11:32:25 PM   [RouterExplorer] Mapped {/auth/discord, GET} route +3ms
[Nest] 27580   - 04/01/2022, 11:32:25 PM   [NestApplication] Nest application successfully started +6ms
DiscordStrategy.validate(accessToken: FJEcnlwk20Xk8KvIBRkVOa46OrWETl)
Data from Discord:  {
  id: '1234sfaf',         <<<<<<< this is Discord ID of a user
  username: 'bob',
  avatar: null,
  discriminator: '5679',
  public_flags: 0,
  flags: 0,
  banner: null,
  banner_color: null,
  accent_color: null,
  locale: 'en-US',
  mfa_enabled: false
}
```

## Running
### NestJS Backend:
```
cd nestjs-oauth-discord
npm run start
```

### Angular Frontend
```
cd nestjs-oauth-discord-ui-angular
npm run start
```
Access: [Angular application](http://localhost:4200)

### VueJs Frontend 
```
cd nestjs-oauth-discord-ui-vue
npm run start
```
Access: [VueJS application](http://localhost:8081)
