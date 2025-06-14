import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { CredentialRepository } from './credential.repository';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, CredentialRepository],
})
export class AuthModule {}
