// @ts-check
import { module } from "@prisma/composer";
import ecommerceService from "./service.mjs";

export default module("ecommerce", ({ provision }) => {
  provision(ecommerceService);
});
