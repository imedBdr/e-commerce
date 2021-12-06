import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LocationModule } from "src/location/location.module";
import { ClientEntity } from "./client.entity";
import { ClientResolver } from "./client.resolver";
import { ClientService } from "./client.service";

@Module({
  providers: [ClientService, ClientResolver],
  imports: [LocationModule, TypeOrmModule.forFeature([ClientEntity])],
})
export class ClientModule {}
