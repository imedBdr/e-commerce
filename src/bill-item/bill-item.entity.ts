import { Field, ObjectType } from "@nestjs/graphql";
import { BillEntity } from "src/bill/bill.entity";
import { ItemEntity } from "src/item/item.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("bill-details")
@ObjectType()
export class BillItemEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  price: number;

  @Column()
  @Field()
  quantity: number;

  @ManyToOne(() => BillEntity)
  @JoinColumn({ name: "bill_id", referencedColumnName: "id" })
  @Field(() => BillEntity)
  bill: BillEntity;

  @ManyToOne(() => ItemEntity)
  @JoinColumn({ name: "item_id", referencedColumnName: "id" })
  @Field(() => ItemEntity)
  item: ItemEntity;
}
