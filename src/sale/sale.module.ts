import { Module } from '@nestjs/common';
import {SaleProvider } from './sale.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [SaleProvider]
})
export class SaleModule {}
