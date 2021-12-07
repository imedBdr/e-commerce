import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { CategoryDto } from "./dto/category.dto";
import AddCategoryInterface from "./interfaces/add-category.interface";
import UpdateCategoryInterface from "./interfaces/update-category.interface";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>
  ) {}

  async addCategory(body: AddCategoryInterface): Promise<CategoryDto> {
    try {
      const res = await this.categoryRepository.save(body);
      if (res)
        return {
          result: true,
          message: "Category is inserted",
        };
      return {
        result: false,
        message: "Category is not inserted",
      };
    } catch (err) {
      console.log("err");
      return {
        result: false,
        message: err,
      };
    }
  }

  async findById(id: number) {
    return await this.categoryRepository.findOne({ id });
  }

  async find() {
    return await this.categoryRepository.find();
  }

  async delete(id: number): Promise<CategoryDto> {
    const res = await this.categoryRepository.delete({ id });
    if (res.affected > 0)
      return { result: true, message: "Category is deleted" };
    return { result: false, message: "" };
  }

  async update(body: UpdateCategoryInterface): Promise<CategoryDto> {
    try {
      const res = await this.categoryRepository.update(body.id, body);
      if (res.affected > 0)
        return { result: true, message: "Category is updated" };
      return { result: false, message: "Category is not Updated" };
    } catch (err) {
      return { result: false, message: err };
    }
  }
}
