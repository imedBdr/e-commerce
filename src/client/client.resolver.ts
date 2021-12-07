import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LocationService } from "src/location/location.service";
import { ClientService } from "./client.service";
import { ClientDto } from "./dto/client.dto";
import { AddClientInput } from "./inputs/add-client.iinput";
import { ChangeClientPasswordInput } from "./inputs/change-client-password.input";
import { UpdateClientInput } from "./inputs/update-client.input";
import { ClientModel } from "./model/client.model";

@Resolver(() => ClientModel)
export class ClientResolver {
  constructor(
    private readonly clientService: ClientService,
    private readonly locationService: LocationService
  ) {}

  @Query(() => ClientModel, { name: "client" })
  async getClient(@Args("id", { type: () => Int }) id: number) {
    return await this.clientService.findById(id);
  }

  @Query(() => [ClientModel], { name: "clients" })
  async getClients() {
    return await this.clientService.find();
  }

  @Mutation(() => ClientDto, { name: "addClient" })
  async addClient(@Args("data") body: AddClientInput): Promise<ClientDto> {
    console.log(body);
    return await this.clientService.Add(body);
  }

  @Mutation(() => ClientDto, { name: "updateClient" })
  async updateAdmin(@Args("data") body: UpdateClientInput): Promise<ClientDto> {
    const obj = { id: 1, ...body };
    return await this.clientService.update(obj);
  }

  @Mutation(() => ClientDto, { name: "changePassword" })
  async changePassword(
    @Args("data") body: ChangeClientPasswordInput
  ): Promise<ClientDto> {
    const obj = { id: 1, ...body };
    return await this.clientService.changePassword(obj);
  }

  @Mutation(() => ClientDto, { name: "deleteClient" })
  async deleteClient(@Args("data") id: number): Promise<ClientDto> {
    return await this.clientService.delete(id);
  }
}
