import { Field, ObjectType } from "@nestjs/graphql";
import { CartItemModel } from "src/cart-item/model/cart-item.model";

@ObjectType()
export class CartModel {
  @Field()
  id: number;

  @Field()
  total: number;

  @Field()
  created_at: number;

  @Field(() => [CartItemModel])
  cartItems: CartItemModel[];
}
