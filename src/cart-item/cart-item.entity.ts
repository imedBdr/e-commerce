import { Field, ObjectType } from "@nestjs/graphql";
import { CartEntity } from "src/cart/cart.entity";
import { ItemDetailsEntity } from "src/item-details/Item-details.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("cart_item")
@ObjectType()
export class CartItemEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  quantity: number;

  @Column()
  @Field()
  price: number;

  @Column()
  @Field()
  created_at: number;

  @ManyToOne(() => CartEntity)
  @JoinColumn({ name: "cart_id", referencedColumnName: "id" })
  @Field(() => CartEntity)
  cart: CartEntity;

  @ManyToOne(() => ItemDetailsEntity)
  @JoinColumn({ name: "id", referencedColumnName: "id" })
  @Field(() => ItemDetailsEntity)
  itemDetails: ItemDetailsEntity;
}
