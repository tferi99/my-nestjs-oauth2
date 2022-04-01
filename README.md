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
