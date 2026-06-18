import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      this.logger.error(
        'DATABASE_URL não está definido. Verifique .env ou a variável de ambiente.',
      );
      throw new Error('DATABASE_URL não está definido.');
    }

    try {
      await this.$connect();
      this.logger.log('Conectado ao banco de dados com sucesso.');
    } catch (error) {
      this.logger.error('Erro ao conectar ao banco de dados:', error as Error);
      throw error;
    }
  }
}
