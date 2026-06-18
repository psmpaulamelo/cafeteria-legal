import { Module } from '@nestjs/common';
import { CustomDrinksController } from './custom-drink.controller';
import { CustomDrinksService } from './custom-drink.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CustomDrinksController],
  providers: [CustomDrinksService],
})
export class CustomDrinksModule {}
