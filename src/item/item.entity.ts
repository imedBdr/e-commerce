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
  description: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @Field()
  created_at: number;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: "category_id", referencedColumnName: "id" })
  @Field(() => CategoryEntity)
  category: CategoryEntity;

  @OneToMany(() => ItemDetailsEntity, (itemDetail) => itemDetail.item)
  @Field(() => ItemDetailsEntity)
  itemDetails: ItemDetailsEntity[];
}
