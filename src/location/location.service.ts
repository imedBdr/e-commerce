import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LocationEntity } from "./location.Entity";

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationRepository: Repository<LocationEntity>
  ) {}

  async find(id: number): Promise<LocationEntity[]> {
    return await this.locationRepository.find({});
  }
}
