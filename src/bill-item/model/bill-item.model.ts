import { Field, ObjectType } from "@nestjs/graphql";
import { BillModel } from "src/bill/model/bill.model";
import { ItemModel } from "src/item/model/item.model";

@ObjectType()
export class BillItemModel {
  @Field()
  id: number;

  @Field()
  price: number;

  @Field()
  quantity: number;

  @Field(() => BillModel)
  bill: BillModel;

  @Field(() => ItemModel)
  item: ItemModel;
}
