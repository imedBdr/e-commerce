import { Field, ObjectType } from "@nestjs/graphql";
import { ClientEntity } from "src/client/client.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

  @ManyToOne(() => ClientEntity)
  @Field(() => ClientEntity)
  client: ClientEntity;
}
