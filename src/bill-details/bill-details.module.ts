import { Module } from '@nestjs/common';
import { BillDetailsService } from './bill-details.service';

@Module({
  providers: [BillDetailsService]
})
export class BillDetailsModule {}
