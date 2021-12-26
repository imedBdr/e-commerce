import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "src/category/category.entity";
import { Repository } from "typeorm";
import { ItemDto } from "./dto/item.dto";
import { AddItemInterface } from "./interface/add-item.interface";
import { UpdateItemInterface } from "./interface/update-item.interface";
import { ItemEntity } from "./item.entity";

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>
  ) {}

  async Add(data: AddItemInterface): Promise<ItemDto> {
    try {
      const item = new ItemEntity();
      const category = new CategoryEntity();

      category.id = data.categoryId;
      item.name = data.name;
      item.category = category;

      const res = await this.itemRepository.insert(item);

      if (res.raw.insertId) {
        return {
          result: true,
          message: "Item is created",
        };
      }
      return {
        result: false,
        message: "Item is not created",
      };
    } catch (err) {
      return {
        result: false,
        message: err,
      };
    }
  }

  async FindById(id: number): Promise<ItemEntity> {
    return await this.itemRepository.findOne(
      { id },
      {
        relations: ["category", "itemDetails"],
      }
    );
  }

  async Find(): Promise<ItemEntity[]> {
    return await this.itemRepository.find();
  }

  async Update(data: UpdateItemInterface): Promise<ItemDto> {
    try {
    } catch (err) {
      throw new HttpException(
        {
          result: false,
          message: err,
        },
        500
      );
    }
  }
}
