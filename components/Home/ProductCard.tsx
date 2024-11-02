"use client";
import { useToast } from "@/hooks/use-toast";
import { addItem } from "@/store/cartSlice";
import { Product } from "@/typing";
import { RootState } from "@reduxjs/toolkit/query";
import { HeartIcon, ShoppingBagIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);
  const { toast } = useToast();

  const dispatch = useDispatch();

  const addToCartHandler = (product: Product) => {
    toast({
      description: "Item Added to Cart",
      variant: "success",
    });
    dispatch(addItem(product));
  };

  return (
    <div className="p-4">
      <div className="w-[200px] h-[150px]">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
      {/* Category */}
      <p className="mt-5 text-xs capitalize text-gray-600">
        {product.category}
      </p>
      {/* Title */}
      <Link href={`/product/product-details/${product.id}`}>
        <h1 className="text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold">
          {}product.title
        </h1>
      </Link>
      {/* Rating  */}
      <div className="flex items-center">
        {ratingArray.map((star) => {
          return (
            <StarIcon
              key={Math.random() * 1000}
              size={16}
              fill="yellow"
              className="text-yellow-500"
            />
          );
        })}
      </div>
      {/* Pricing */}
      <div className="flex items-center mt-2 space-x-2">
        <p className="text-black text-base line-through font-semibold opacity-50">{`$${(
          product.price + 10
        ).toFixed(2)}`}</p>
        <p className="text-black text-lg font-bold opacity-80">
          ${product.price}
        </p>
      </div>
      {/* Buttons */}
      <div className="mt-4 flex items-center space-x-2">
        <button
          onClick={() => {
            addToCartHandler(product);
          }}
          className="bg-black/80 text-white rounded-[6px] p-2"
        >
          <ShoppingBagIcon size={18} className="hover:scale-125 duration-300"/>
        </button>
        <button className="bg-red-500 text-white rounded-[6px] p-2">
          <HeartIcon size={18} className="hover:scale-125 duration-300"/>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
