import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSaleDto } from 'src/dto/sale.dto';
import { Sale } from './schema/sale.schema';

@Injectable()
export class SaleService {
  constructor(
    @InjectModel(Sale.name) private readonly saleModel: Model<Sale>
  ) {}

  async addSale(payload: CreateSaleDto) {
    const saveItem = new this.saleModel(payload);
    return await saveItem.save();
  }

  async getSaleById(id: string) {
    try {
      const find = await this.saleModel.findById(id).exec();
      if (!find) {
        throw new NotFoundException(`Item with ID ${id} not found`);
      }

      return find;
    } catch (error) {
      // throw new NotFoundException(`Item with ID ${id} not found`);
      return error 
    }
  }

  async getAllSale(): Promise<Sale[]> {
    try {
      const findAll = await this.saleModel.find().exec();
      return findAll;
    } catch (error) {
      throw new NotFoundException('Failed to Retrieve Item');
    }
  }

  async updateSale(id: string, payload) {
    try {
      const updateSale = await this.saleModel.findById(id).exec();

      if (!updateSale) {
        throw new NotFoundException(`Item with ID ${id} not found`);
      }

      Object.assign(updateSale, payload);

      await updateSale.save();
      return updateSale;
    } catch (error) {
      throw new NotFoundException(`Failed to Update Item with ID ${id}`);
    }
  }

  async  deleteSale(id: string){
    try {
      const deleteIt = await this.saleModel.findByIdAndDelete(id).exec();
      if(!deleteIt) {
        throw new NotFoundException(`Sale with ID ${id} not found`);
      }
      return deleteIt

    }catch (error) {
      throw new NotFoundException(`Item not found`);
    }
  }
}

export class SaleProvider {}