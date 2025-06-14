import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IUserOptions } from './interface/userOptions.interface';
import { Prisma, User } from 'generated/prisma';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}
  private readonly logger = new Logger(UsersRepository.name);

  async findUserById(id: string, options?: IUserOptions): Promise<User> {
    const user: User | null = await this.prisma.user.findUnique({
      where: { id },
      ...options,
    });
    if (!user) {
      this.logger.error(`User with id ${id} not found at ${this.findUserById.name}`);
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async createUser(user: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: user });
  }
}
