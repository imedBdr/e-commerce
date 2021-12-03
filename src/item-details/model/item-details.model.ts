import { Field, ObjectType } from "@nestjs/graphql";
import { CartItemModel } from "src/cart-item/model/cart-item.model";

import { ItemModel } from "src/item/model/item.model";

@ObjectType()
export class ItemDetailsModel {
  @Field()
  id: number;

  @Field()
  quantity: number;

  @Field()
  buy_price: number;

  @Field()
  sell_price: number;

  @Field()
  created_at: number;

  @Field()
  cartItems: CartItemModel[];

  @Field()
  item: ItemModel;
}
