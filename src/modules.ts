import { ClientModule } from "./client/client.module";
import { CategoryModule } from "./category/category.module";
import { ItemModule } from "./item/item.module";
import { ItemDetailsModule } from "./item-details/item-details.module";
import { CartModule } from "./cart/cart.module";
import { CartDetailsModule } from "./cart-item/cart-item.module";
import { BillModule } from "./bill/bill.module";
import { BillItemModule } from "./bill-item/bill-item.module";
import { LocationModule } from "./location/location.module";
import { AdministratorModule } from "./administrator/administrator.module";

const Modules = [
  AdministratorModule,
  ClientModule,
  CategoryModule,
  ItemModule,
  ItemDetailsModule,
  CartModule,
  CartDetailsModule,
  BillModule,
  BillItemModule,
  LocationModule,
];

export default Modules;
