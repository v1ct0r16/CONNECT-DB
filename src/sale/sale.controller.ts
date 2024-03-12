import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { Sale } from './schema/sale.schema';
import { SaleService } from './sale.service';

@Controller('sale')
export class SaleController{
  constructor(private readonly SaleService: SaleService){} 
  
  @Get()
  async getAllSale(): Promise<Sale[]> {
    return await this.SaleService.getAllSale();
  }

  @Put(':id')
  async updateSale(@Param('id') id: string, @Body() updateSale:){
    return await this.SaleService.updateSale(id, updateSale);
  }
}