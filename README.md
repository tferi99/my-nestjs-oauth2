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
- get Application ID
- under OAuth2/General/Redirects add these URLs:
```
http://localhost:18080/auth/discord
http://localhost:4200/home
```
