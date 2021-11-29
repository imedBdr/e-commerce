import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("location")
@ObjectType()
export class LocationEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  address: string;

  @Column()
  @Field()
  longitude: string;

  @Column()
  @Field()
  latitude: string;
}
