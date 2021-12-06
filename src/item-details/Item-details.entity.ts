import { Field, ObjectType } from "@nestjs/graphql";
import { CartItemEntity } from "src/cart-item/cart-item.entity";
import { ItemEntity } from "src/item/item.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("item-details")
@ObjectType()
export class ItemDetailsEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  quantity: number;

  @Column()
  @Field()
  buy_price: number;

  @Column()
  @Field()
  sell_price: number;

  @Column()
  @Field()
  created_at: number;

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.itemDetails)
  @Field(() => CartItemEntity)
  cartItems: CartItemEntity[];

  //   @OneToMany(() => DiscountEntity, (discount) => discount.productInventory)
  //   discounts: DiscountEntity[];

  @ManyToOne(() => ItemEntity)
  @JoinColumn({ name: "id", referencedColumnName: "id" })
  @Field(() => ItemEntity)
  item: ItemEntity;
}
