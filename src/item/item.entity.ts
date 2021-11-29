import { Field, ObjectType } from "@nestjs/graphql";
import { CategoryEntity } from "src/category/category.entity";
import { ItemDetailsEntity } from "src/item-details/Item-details.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("item")
@ObjectType()
export class ItemEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  created_at: number;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: "id", referencedColumnName: "id" })
  @Field()
  category: CategoryEntity;

  @OneToMany(() => ItemDetailsEntity, (itemDetail) => itemDetail.item)
  @Field()
  itemDetails: ItemDetailsEntity[];
}
