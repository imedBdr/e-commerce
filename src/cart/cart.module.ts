import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartEntity } from "./cart.entity";
import { CartService } from "./cart.service";

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity])],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
