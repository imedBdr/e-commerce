import { Field, ObjectType } from "@nestjs/graphql";
import { ItemEntity } from "src/item/item.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("category")
@ObjectType()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  picture: string;

  @OneToMany(() => ItemEntity, (item) => item.category)
  @Field()
  items: ItemEntity[];
}
