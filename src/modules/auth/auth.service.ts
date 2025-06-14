import { Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import { RegisterUserDto } from '../users/dtos/registerUser.dto';
import { User } from 'generated/prisma';
import { CredentialRepository } from './credential.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly credentialRepository: CredentialRepository,
  ) {}

  async register({ confirmPassword, password, email, ...userData }: RegisterUserDto) {
    const user: User = await this.usersRepository.createUser({ email, ...userData });
    await this.credentialRepository.createCredential({
      password,
      email,
      user: { connect: { id: user.id } },
    });

    return {
      data: user,
      success: 'User registered successfully',
    };
  }
}
