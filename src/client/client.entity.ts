import { Field, ObjectType } from "@nestjs/graphql";
import { BillEntity } from "src/bill/bill.entity";
import { CartEntity } from "src/cart/cart.entity";
import { LocationEntity } from "src/location/location.Entity";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("client")
@ObjectType()
export class ClientEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  userName: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  phone: string;

  @OneToOne(() => LocationEntity)
  @JoinColumn()
  location: LocationEntity;

  @OneToOne(() => CartEntity)
  @JoinColumn()
  cart: CartEntity;

  @OneToMany(() => BillEntity, (bill) => bill.client)
  bills: BillEntity[];
}
