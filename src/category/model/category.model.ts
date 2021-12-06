import { Field, ObjectType } from "@nestjs/graphql";
import { ItemModel } from "src/item/model/item.model";

@ObjectType()
export class CategoryModel {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  picture: string;

  @Field(() => ItemModel)
  item: ItemModel[];
}
