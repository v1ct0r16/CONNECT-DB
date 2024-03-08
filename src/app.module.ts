import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleController } from './sale/sale.controller';
import { SaleProvider } from './sale/sale.service';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.PORT), SaleModule],
  controllers: [AppController, SaleController],
  providers: [AppService, SaleProvider],
})
export class AppModule {}
