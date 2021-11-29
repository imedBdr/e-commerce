import { AdministratorEntity } from "./administrator/administrator.entity";
import { BillItemEntity } from "./bill-item/bill-item.entity";
import { BillEntity } from "./bill/bill.entity";
import { CartItemEntity } from "./cart-item/cart-item.entity";
import { CartEntity } from "./cart/cart.entity";
import { CategoryEntity } from "./category/category.entity";
import { ClientEntity } from "./client/client.entity";
import { ItemDetailsEntity } from "./item-details/Item-details.entity";
import { ItemEntity } from "./item/item.entity";
import { LocationEntity } from "./location/location.Entity";

const Entities = [
  AdministratorEntity,
  BillEntity,
  BillItemEntity,
  CartEntity,
  CartItemEntity,
  CategoryEntity,
  ClientEntity,
  ItemEntity,
  ItemDetailsEntity,
  LocationEntity,
];

export default Entities;
