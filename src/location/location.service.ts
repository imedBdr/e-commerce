import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientEntity } from "src/client/client.entity";
import { Repository } from "typeorm";
import { LocationDto } from "./dto/location.dto";
import { AddLocationInterafce } from "./interface/location.interface";
import { LocationEntity } from "./location.Entity";

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity)
    private readonly locationRepository: Repository<LocationEntity>
  ) {}

  async add(body: AddLocationInterafce): Promise<LocationDto> {
    try {
      const location = new LocationEntity();
      const client = new ClientEntity();
      client.id = body.clientId;

      location.client = client;
      location.address = body.address;
      location.longitude = body.longitude;
      location.latitude = body.latitude;
      const res = await this.locationRepository.insert(location);

      if (res?.raw?.insertedId)
        return {
          result: true,
          message: "Location is inserted",
        };
      return {
        result: false,
        message: "",
      };
    } catch (err) {
      return {
        result: false,
        message: err,
      };
    }
  }

  async find(id: number): Promise<LocationEntity[]> {
    return await this.locationRepository.find({});
  }

  async;
}
