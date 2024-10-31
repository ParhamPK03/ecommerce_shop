"use client"; // افزودن این خط برای مشخص کردن کامپوننت به عنوان Client Component

import { toast } from "@/hooks/use-toast";
import { addItem, CartItem } from "@/store/cartSlice";
import { Product } from "@/typing";
import React from "react";
import { useDispatch } from "react-redux";

const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product: Product) => {
    toast({
      description: "Item Added to Cart",
      variant: "success",
    });
    dispatch(addItem(product));
  };

  return (
    <button
      className="mt-6 bg-black/90 p-2.5 text-white rounded-xl"
      onClick={() => {
        addToCartHandler(product);
      }}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
