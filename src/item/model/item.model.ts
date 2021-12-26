import { Field, ObjectType } from "@nestjs/graphql";
import { CategoryModel } from "src/category/model/category.model";
import { ItemDetailsModel } from "src/item-details/model/item-details.model";

@ObjectType()
export class ItemModel {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  created_at: number;

  @Field(() => CategoryModel)
  category: CategoryModel;

  @Field(() => [ItemDetailsModel])
  itemDetails: ItemDetailsModel[];
}
