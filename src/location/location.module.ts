import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LocationEntity } from "./location.Entity";
import { LocationResolver } from "./location.resolver";
import { LocationService } from "./location.service";

@Module({
  providers: [LocationService, LocationResolver],
  exports: [LocationService],
  imports: [TypeOrmModule.forFeature([LocationEntity])],
})
export class LocationModule {}
