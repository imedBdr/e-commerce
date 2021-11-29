import { Module } from '@nestjs/common';
import { CartDetailsService } from './cart-details.service';

@Module({
  providers: [CartDetailsService]
})
export class CartDetailsModule {}
