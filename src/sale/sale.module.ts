import { Module } from '@nestjs/common';
import { SaleProvider } from './sale.service';

@Module({
  providers: [SaleProvider]
})
export class SaleModule {}
