import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CartEntity } from "./cart.entity";

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>
  ) {}

  async CreateCart(): Promise<number> {
    const cart = new CartEntity();
    cart.total = 0;
    const res = await this.cartRepository.insert(cart);
    console.log(res);
    return res.raw.insertId;
  }
}
