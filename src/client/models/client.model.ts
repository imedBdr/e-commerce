import { Field, ObjectType } from "@nestjs/graphql";
import { BillEntity } from "src/bill/bill.entity";
import { CartEntity } from "src/cart/cart.entity";
import { LocationEntity } from "src/location/location.Entity";

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
  location: LocationEntity;

  @Field()
  cart: CartEntity;

  @Field()
  bills: BillEntity[];
}
