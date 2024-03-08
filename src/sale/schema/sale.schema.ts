import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type SaleDocument = HydratedDocument<Sale>;

@Schema()
export class Sale {
    @Prop()
    name: string;

    @Prop()
    Brand: string;

    @Prop()
    color: string;

    @Prop()
    price: number;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);