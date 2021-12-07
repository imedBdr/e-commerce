import { Field, ObjectType } from "@nestjs/graphql";
import { ClientEntity } from "src/client/client.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

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

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field()
  created_at: number;

  @ManyToOne(() => ClientEntity)
  @JoinColumn({ name: "client_id", referencedColumnName: "id" }) //
  @Field(() => ClientEntity)
  client: ClientEntity;
}
