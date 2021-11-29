import { Module } from "@nestjs/common";
import { BillItemService } from "./bill-item.service";

@Module({
  providers: [BillItemService],
})
export class BillItemModule {}
