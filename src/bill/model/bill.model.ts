import { Field, ObjectType } from "@nestjs/graphql";
import { BillItemModel } from "src/bill-item/model/bill-item.model";
import { ClientModel } from "src/client/model/client.model";

@ObjectType()
export class BillModel {
  @Field()
  id: number;

  @Field()
  total: number;

  @Field()
  created_at: number;

  @Field()
  billItems: BillItemModel[];

  @Field()
  client: ClientModel;
}
