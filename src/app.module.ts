import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleController } from './sale/sale.controller';
import { Sale } from './sale/sale.service';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://VictorPromise:pvictor1844@cluster0.2ckcmwb.mongodb.net/'), SaleModule],
  controllers: [AppController, SaleController],
  providers: [AppService, Sale],
})
export class AppModule {}
