import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSaleDto } from 'src/dto/sale.dto';
import { Sale } from './schema/sale.schema';

@Injectable()
export class SaleService {
    constructor(
        @InjectModel(Sale.name) private readonly saleModel: Model<Sale>
        ) { }

async addSale(payload:CreateSaleDto){
    const saveItem = new this.saleModel(payload);
    return await saveItem.save()
}
async getSaleById(id: string) {
    try {
        const find = await  this.saleModel.findById(id).exec();
        if (!find) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }

    return find;
    } catch (error) {
        throw new NotFoundException(`Item with ID ${id} not found`);
    
    }
}

}

export class SaleProvider {}
