import { ConflictException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import { RegisterUserDto } from './dtos/registerUser.dto';
import { AuthProvider, Credential, User } from 'generated/prisma';
import { CredentialRepository } from './credential.repository';
import { LoginDto } from './dtos/login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { validate } from 'class-validator';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly credentialRepository: CredentialRepository,
    private readonly jwtService: JwtService,
  ) {}

  private logger = new Logger(AuthService.name);

  async register({ confirmPassword, password, email, ...userData }: RegisterUserDto) {
    const userDb: User | null = await this.usersRepository.findUserByEmail(email);
    if (userDb) throw new ConflictException('An user with this email already exists');

    const user: User = await this.usersRepository.createUser({ email, ...userData });

    const passHashed = await bcrypt.hash(password, 12);
    await this.credentialRepository.createCredential({
      email,
      password: passHashed,
      user: { connect: { id: user.id } },
    });

    return {
      data: user,
      success: 'User registered successfully',
    };
  }

  async validateUser({ email, password }: LoginDto): Promise<User> {
    const user: User | null = await this.usersRepository.findUserByEmail(email);
    const credential: Credential | null = await this.credentialRepository.findCredentialByEmail(
      email,
      AuthProvider.LOCAL,
    );

    this.logger.verbose(`Handling passport on ${this.validateUser.name}, user: `, user);
    this.logger.verbose(`Handling passport on ${this.validateUser.name}, credential: `, credential);

    if (
      !user ||
      !credential ||
      !credential.password ||
      !(await bcrypt.compare(password, credential.password))
    ) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async login(user: User) {
    const access_token = await this.jwtService.sign({
      sub: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    this.logger.verbose('Handling login, user:', user);
    this.logger.verbose('Handling login, token: ', access_token);

    return {
      access_token,
      success: 'User logged in successfully',
    };
  }
}
