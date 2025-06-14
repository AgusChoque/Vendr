import { Prisma } from 'generated/prisma';

export interface IUserOptions {
  include?: Prisma.UserInclude;
  select?: Prisma.UserSelect;
  omit?: Prisma.UserOmit;
}
