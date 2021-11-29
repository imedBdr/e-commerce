import { Module } from '@nestjs/common';
import { ItemDetailsService } from './item-details.service';

@Module({
  providers: [ItemDetailsService]
})
export class ItemDetailsModule {}
