import { Field, ObjectType } from "@nestjs/graphql";
import { CartModel } from "src/cart/model/cart.model";
import { ItemDetailsModel } from "src/item-details/model/item-details.model";

@ObjectType()
export class CartItemModel {
  @Field()
  id: number;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field()
  created_at: number;

  @Field()
  cart: CartModel;

  @Field()
  itemDetails: ItemDetailsModel;
}
