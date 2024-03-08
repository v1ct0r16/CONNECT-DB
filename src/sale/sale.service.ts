import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSaleDto } from 'src/dto/sale.dto';
import { Sale } from './schema/sale.schema';

@Injectable()
export class SaleService {
    constructor(
        @InjectModel(Sale.name) private readonly saleModel: Model<Sale>
        ) { }


}

export class SaleProvider {}
