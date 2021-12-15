import { Field, ObjectType } from "@nestjs/graphql";
import { BillModel } from "src/bill/model/bill.model";
import { CartModel } from "src/cart/model/cart.model";
import { LocationModel } from "src/location/model/location.model";

@ObjectType()
export class ClientModel {
  @Field()
  id: number;

  @Field()
  userName: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  phone: string;

  @Field()
  created_at: number;

  @Field(() => LocationModel, { nullable: true })
  location: LocationModel;

  @Field(() => CartModel)
  cart: CartModel;

  @Field(() => [BillModel])
  bills: BillModel[];
}
