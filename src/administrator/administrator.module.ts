import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdministratorEntity } from "./administrator.entity";
import { AdministratorResolver } from "./administrator.resolver";
import { AdministratorService } from "./administrator.service";

@Module({
  imports: [TypeOrmModule.forFeature([AdministratorEntity])],
  providers: [AdministratorService, AdministratorResolver],
})
export class AdministratorModule {}
