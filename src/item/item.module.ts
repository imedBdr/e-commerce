import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemEntity } from "./item.entity";
import { ItemService } from "./item.service";

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  providers: [ItemService],
})
export class ItemModule {}
