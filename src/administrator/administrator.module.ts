import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorEntity } from './administrator.entity';
import { AdministratorService } from './administrator.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdministratorEntity])],
  providers: [AdministratorService],
})
export class AdministratorModule {}
