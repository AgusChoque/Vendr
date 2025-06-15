import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { User } from 'generated/prisma';
import { plainToInstance } from 'class-transformer';
import { LoginDto } from '../dtos/login.dto';
import { validate } from 'class-validator';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<User> {
    const dto = plainToInstance(LoginDto, { email, password });

    const errors = await validate(dto);
    if (errors.length) {
      throw new BadRequestException(errors);
    }

    return await this.authService.validateUser(dto);
  }
}
