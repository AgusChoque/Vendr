import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IUserOptions } from './interface/userOptions.interface';
import { Prisma, User } from 'generated/prisma';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserById(id: string, options?: IUserOptions): Promise<User> {
    const user: User | null = await this.prisma.user.findUnique({
      where: { id },
      ...options,
    });
    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async createUser(user: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: user });
  }
}
