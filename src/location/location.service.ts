import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientEntity } from "src/client/client.entity";
import { Repository } from "typeorm";
import { LocationDto } from "./dto/location.dto";
import { AddLocationInterafce } from "./interface/add-location.interface";
import { FindLocationInterface } from "./interface/find-location.interface";
import { UpdateLocationInterface } from "./interface/update-location.interface";
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

      if (res?.raw?.insertId)
        return {
          result: true,
          message: "Location is inserted",
        };
      console.log(res);

      return {
        result: false,
        message: JSON.stringify(res),
      };
    } catch (err) {
      return {
        result: false,
        message: err,
      };
    }
  }

  async find(body: FindLocationInterface): Promise<LocationEntity> {
    const clientId = await this.getClientId(body.id);
    //if (clientId === body.clientId)
    return await this.locationRepository.findOne({ id: body.id });
  }

  async delete(id: number): Promise<LocationDto> {
    try {
      const res = await this.locationRepository.delete({ id });
      if (res.affected > 0)
        return { result: true, message: "Location is deleted" };
      return { result: false, message: "Location is not deleted" };
    } catch (err) {
      return {
        result: false,
        message: err,
      };
    }
  }

  async update(body: UpdateLocationInterface): Promise<LocationDto> {
    try {
      const clientId = await this.getClientId(body.id);
      if (clientId === body.clientId) {
        const res = await this.locationRepository.update({ id: body.id }, body);
        if (res.affected > 0)
          return { result: true, message: "Location is updated" };
      }
      return { result: false, message: "Location is not updated" };
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

  async getClientId(id: number): Promise<number> {
    const loc = await this.locationRepository.findOne(
      { id },
      { relations: ["client"] }
    );

    return loc?.client?.id;
  }
}
