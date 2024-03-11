import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { Sale } from './schema/sale.schema';
import { SaleService } from './sale.service';

@Controller('sale')
export class SaleController {
  @Get()
  async getAllSale(): Promise<Sale[]> {
    return await this.saleService.getAllSale();
  }

  @Put(':id')
  async updateSale(@Param('id') id: string, @Body() updateSale: (sale: Sale) => Sale) {
    return await this.saleService.updateSale(id, updateSale);
  }
}