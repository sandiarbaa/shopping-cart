"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import {
  addProductToCart,
  removeProductFromCart,
} from "@/redux/slices/cartSlice";
import { IProduct, type Product } from "@/types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Product = ({ product }: { product: IProduct }) => {
  const [existing, setExisting] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  // kalau ada perubahan dari state cartItems baik itu menambah / menghapus data cart
  useEffect(() => {
    const IsExisting = cartItems.some((item) => item.id === product.id);
    setExisting(IsExisting);
  }, [cartItems, product.id]);

  const handleAddToCart = () => {
    const newProduct = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.images[0],
      category: product.category,
      rating: product.rating,
      brand: product.brand,
    };
    dispatch(addProductToCart(newProduct));
    localStorage.setItem("cart", JSON.stringify([...cartItems, newProduct]));
    setExisting(true);
    toast.success("Product added to cart");
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeProductFromCart(productId));
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.filter((item) => item.id !== productId))
    );
  };

  return (
    <div className="border shadow-lg rounded-md p-3 bg-white">
      <Image
        src={product.images[0]}
        width={225}
        height={225}
        alt={product.title}
        className="mx-auto h-36 w-36 object-cover"
      />
      <div className="flex flex-col justify-between h-40">
        <div>
          <h3 className="text-lg font-semibold mt-5">{product.title}</h3>
          <p className="my-1 font-semibold text-black">${product.price}</p>
        </div>
        {existing ? (
          <button
            className="button-remove"
            onClick={() => handleRemoveFromCart(product.id)}
          >
            Remove from cart
          </button>
        ) : (
          <button className="button" onClick={() => handleAddToCart()}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
