import { Field, ObjectType } from "@nestjs/graphql";
import { CartItemEntity } from "src/cart-item/cart-item.entity";
import { CartItemService } from "src/cart-item/cart-item.service";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("cart")
@ObjectType()
export class CartEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  total: number;

  @Column()
  @Field()
  created_at: number;

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.cart)
  @Field()
  cartItems: CartItemEntity[];
}
