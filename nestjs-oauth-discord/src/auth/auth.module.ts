import {
  HttpModule,
  Module,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { DiscordStrategy } from './discord.strategy';

@Module({
  imports    : [
    UsersModule,
    HttpModule,
  ],
  providers  : [
    AuthService,
    DiscordStrategy,
  ],
  controllers: [
    AuthController,
  ],
})
export class AuthModule
{
}
