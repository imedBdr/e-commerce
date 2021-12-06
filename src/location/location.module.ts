import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LocationEntity } from "./location.Entity";
import { LocationService } from "./location.service";

@Module({
  providers: [LocationService],
  exports: [LocationService],
  imports: [TypeOrmModule.forFeature([LocationEntity])],
})
export class LocationModule {}
