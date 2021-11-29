import { Field, ObjectType } from "@nestjs/graphql";
import { BillItemEntity } from "src/bill-item/bill-item.entity";
import { ClientEntity } from "src/client/client.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("bill")
@ObjectType()
export class BillEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  total: number;

  @Column()
  created_at: number;

  @OneToMany((type) => BillItemEntity, (billItem) => billItem.bill)
  @Field()
  billItems: BillItemEntity[];

  @ManyToOne(() => ClientEntity, (client) => client.bills)
  client: ClientEntity;
}
