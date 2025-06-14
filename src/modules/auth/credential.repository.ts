import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Credential, Prisma } from 'generated/prisma';

@Injectable()
export class CredentialRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createCredential(credential: Prisma.CredentialCreateInput): Promise<Credential> {
    return this.prisma.credential.create({ data: credential });
  }
}
