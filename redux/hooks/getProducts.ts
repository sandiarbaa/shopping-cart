"use server";
// import { Product } from "@/types/types";
import { IProduct } from "@/types/types";
// import { IProduct } from "@/types/types";
import axios from "axios";

export const getProducts = async () => {
  try {
    // const res = await axios.get("https://api.escuelajs.co/api/v1/products");
    const res = await axios.get("https://dummyjson.com/products?limit=20");
    const products = res.data.products;
    return products as IProduct[];
  } catch (error) {
    console.log(error);
    return null;
  }
};
