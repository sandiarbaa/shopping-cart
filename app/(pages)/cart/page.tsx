"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { clearCart, removeProductFromCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const CartPage: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (productId: number): void => {
    dispatch(removeProductFromCart(productId));
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.filter((item) => item.id !== productId))
    );
    toast.success("Product removed from cart");
  };

  const handleClearCart = (): void => {
    dispatch(clearCart());
    const storedCart: string | null = localStorage.getItem("cart");
    const storedCartParse = JSON.parse(storedCart || "[]");
    if (storedCartParse.length > 0) {
      localStorage.setItem("cart", JSON.stringify([]));
      toast.success("Cart cleared!");
    } else {
      toast.success("No item in cart!");
    }
  };

  return (
    <div className="container bg-blue-50 text-black mx-auto min-h-screen flex justify-center py-8">
      <div className="max-w-xs md:max-w-xl w-full">
        {/* Header */}
        <div className="flex flex-col justify-between md:flex-row md:items-end">
          <h1 className="title">Shopping Cart ({cartItems.length})</h1>
          <Link href={"/shop"} className="switch-link mt-3 md:mt-0">
            Back to Shop
          </Link>
        </div>
        <div className="flex flex-col justify-between md:flex-row mt-5 md:items-center">
          <p className="font-bold text-2xl">
            Total: $
            {cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </p>
          <p
            className="hover:bg-slate-700 transition duration-300 active:bg-slate-500 mt-3 md:mt-0 bg-black text-white rounded-md py-1 hover:cursor-pointer font-semibold w-28 text-center"
            onClick={handleClearCart}
          >
            Clear Cart
          </p>
        </div>

        <hr className="border-b-2 my-5" />

        {cartItems.length > 0 ? (
          <div className="bg-white p-5 rounded-md">
            {cartItems.map((product) => {
              return (
                <>
                  <div
                    key={product.id}
                    className="flex justify-between py-3 flex-col md:flex-row md:items-center"
                  >
                    {/* Image */}
                    <div>
                      <Image
                        src={product.image}
                        width={225}
                        height={225}
                        alt={product.name}
                        className="mx-auto h-36 w-40 object-cover"
                      />
                    </div>
                    {/* Content Text Product */}
                    <div className="mt-8 w-80">
                      <h3 className="text-lg md:text-xl font-bold mb-1">
                        {product.name}
                      </h3>
                      <p className="text-slate-500 font-medium">
                        category: {product.category}
                      </p>
                      <div className="flex">
                        <p className="text-slate-500 font-medium">
                          rating: {product.rating}
                        </p>
                        <p className="text-slate-500 font-medium">
                          rating: {product.brand}
                        </p>
                      </div>
                      <p className="text-xl font-bold mt-1">${product.price}</p>
                      <button
                        className="button-remove mt-3"
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        Remove from cart
                      </button>
                    </div>
                  </div>
                  <hr className="border-b-2 my-3" />
                </>
              );
            })}
          </div>
        ) : (
          <div className="text-center font-semibold text-lg">
            No items in cart
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
