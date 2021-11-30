import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CartEntity } from "src/cart/cart.entity";
import { Repository } from "typeorm";
import { ClientEntity } from "./client.entity";
import { ClientDto } from "./dto/client.dto";
import { AddClientInterface } from "./interfaces/add-client.interface";

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>
  ) {}

  async findForValidation(userName: string) {
    return await this.clientRepository.findOne({ userName });
  }

  async findByEmail(email: string) {
    return await this.clientRepository.findOne({ email });
  }

  async add(body: AddClientInterface): Promise<ClientDto> {
    try {
      const byUser = await this.findForValidation(body.userName);
      const byEmail = await this.findByEmail(body.email);
      if (!byUser && !byEmail) {
        const client = new ClientEntity();
        const cart = new CartEntity();

        client.cart = cart;
        client.email = body.email;
        client.password = body.password;
        client.firstName = body.firstName;
        client.lastName = body.lastName;
        client.userName = body.userName;

        const res = await this.clientRepository.insert(client);
        if (res.raw.insertedId)
          return {
            result: true,
            message: "",
          };
      }
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

  async delete(id: number): Promise<ClientDto> {
    const res = await this.clientRepository.delete(id);
    if (res.affected > 0)
      return {
        result: true,
        message: "",
      };
    return {
      result: false,
      message: `Can't delete client`,
    };
  }
}
