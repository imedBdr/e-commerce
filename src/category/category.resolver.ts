import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CategoryService } from "./category.service";
import { CategoryDto } from "./dto/category.dto";
import AddCategoryInput from "./inputs/add-category.input";
import UpdateCategoryInput from "./inputs/update-category.input";
import { CategoryModel } from "./model/category.model";

@Resolver(() => CategoryModel)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => CategoryModel, { name: "category" })
  async getCategory(@Args("id", { type: () => Int }) id: number) {
    let res = await this.categoryService.findById(id);
    if (res) return res;
    throw new Error("category is not found");
  }

  @Query(() => [CategoryModel], { name: "categories" })
  async getCategories() {
    let res = await this.categoryService.find();
    if (res) return res;
    throw new Error("categories are empty is not found");
  }

  @Mutation(() => CategoryDto, { name: "addCategory" })
  async addCategory(
    @Args("data") body: AddCategoryInput
  ): Promise<CategoryDto> {
    console.log(body);
    return await this.categoryService.addCategory(body);
  }

  @Mutation(() => CategoryDto, { name: "deleteCategory" })
  async deleteCategory(@Args("id") id: number): Promise<CategoryDto> {
    return await this.categoryService.delete(id);
  }

  @Mutation(() => CategoryDto, { name: "updateCategory" })
  async updateCategory(
    @Args("data") body: UpdateCategoryInput
  ): Promise<CategoryDto> {
    console.log(body);
    return await this.categoryService.update(body);
  }
}
