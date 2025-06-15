import { UserRole } from 'generated/prisma';

export interface JwtSign {
  sub: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface JwtPayload extends JwtSign {
  exp: Date;
  iat: Date;
}
