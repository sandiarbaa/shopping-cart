import Product from "@/app/component/Product";
import { getProducts } from "@/redux/hooks/getProducts";
import Link from "next/link";
import React from "react";

const ShopPage = async () => {
  const products = await getProducts();
  return (
    <div className="container bg-blue-50 text-black mx-auto min-h-screen flex justify-center py-8">
      <div className="max-w-xs md:max-w-xl lg:max-w-5xl w-full">
        {/* Header */}
        <div className="flex justify-between items-end">
          <h1 className="title">
            Product Lists ({products && products?.length})
          </h1>
          <Link href={"/cart"} className="switch-link">
            view cart
          </Link>
        </div>

        <hr className="border-b-2 my-5" />

        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((item) => {
              return <Product product={item} key={item.id} />;
            })}
          </div>
        ) : (
          <div>No products</div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
