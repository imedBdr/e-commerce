import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LocationDto } from "./dto/location.dto";
import { AddLocationInput } from "./inputs/add-location.input";
import { UpdateLocationInput } from "./inputs/update-location.input";
import { UpdateLocationInterface } from "./interface/update-location.interface";
import { LocationService } from "./location.service";
import { LocationModel } from "./model/location.model";

@Resolver(() => LocationModel)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  // Add guard
  @Query(() => LocationModel, { name: "locaion" })
  async getLocation(@Args("id") id: number) {
    //get client ID from guard
    const data = { id: id, clientId: 1 };
    return await this.locationService.find(data);
  }

  // Add guard
  @Mutation(() => LocationDto, { name: "addLocation" })
  async addLocation(
    @Args("data") data: AddLocationInput
  ): Promise<LocationDto> {
    return await this.locationService.add(data);
  }

  // Add guard
  @Mutation(() => LocationDto, { name: "deleteLocation" })
  async deleteLocation(@Args("id", { type: () => Int }) id: number) {
    //get client ID from guard
    const data = { id: id, clientId: 1 };
    return await this.locationService.delete(data);
  }

  // Add guard
  @Mutation(() => LocationDto, { name: "updateLocation" })
  async updateLlocation(@Args("data") data: UpdateLocationInput) {
    // get client id from guard
    const body: UpdateLocationInterface = { ...data, clientId: 1 };

    return await this.locationService.update(body);
  }
}
