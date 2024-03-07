import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSaleDto {
    @IsNotEmpty()
    @IsNumber()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    Brand: string;

    @IsNotEmpty()
    @IsNumber()
    color: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}