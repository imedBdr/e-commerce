import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ItemDto } from "./dto/item.dto";
import { AddItemInput } from "./inputs/add-item.input";
import { UpdateItemInput } from "./inputs/update-item.input";
import { ItemService } from "./item.service";
import { ItemModel } from "./model/item.model";

@Resolver(() => ItemModel)
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  // add gaurd
  @Query(() => ItemModel, { name: "item" })
  async getItem(@Args("id") id: number) {
    return await this.itemService.FindById(id);
  }

  @Query(() => [ItemModel], { name: "items" })
  async getItems() {
    return await this.itemService.Find();
  }

  @Mutation(() => ItemDto, { name: "addItem" })
  async addItem(@Args("data") data: AddItemInput): Promise<ItemDto> {
    return await this.itemService.Add(data);
  }

  @Mutation(() => ItemDto, { name: "deleteItem" })
  async deleteItem(
    @Args("id", { type: () => Int }) id: number
  ): Promise<ItemDto> {
    return await this.itemService.Delete(id);
  }

  @Mutation(() => ItemDto, { name: "updateItem" })
  async updateItem(@Args("data") data: UpdateItemInput): Promise<ItemDto> {
    return await this.itemService.Update(data);
  }
}
