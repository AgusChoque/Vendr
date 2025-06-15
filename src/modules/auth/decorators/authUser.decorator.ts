import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from '../interfaces/jwtPayload.interface';
import { User } from 'generated/prisma';
import { Request } from 'express';

export const AuthUser = createParamDecorator(
  (data: keyof JwtPayload | undefined, context: ExecutionContext): JwtPayload | User => {
    const request: Request = context.switchToHttp().getRequest();
    const payload: JwtPayload | User = request.user as JwtPayload | User;
    if (!payload) {
      throw new UnauthorizedException('User is not logged in or authentication is invalid.');
    }

    return data ? payload[data] : payload;
  },
);
