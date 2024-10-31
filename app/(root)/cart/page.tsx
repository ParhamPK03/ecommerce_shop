"use client";
import { Button } from "@/components/ui/button";
import { RootState } from "@reduxjs/toolkit/query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  // Get Cart Item

  const items = useSelector((state: RootState) => state.cart.items);
  //   Total Quantity
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  //   Total Price
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // Vat (15%)
  const vat = (+totalPrice * 0.15).toFixed(2);
  // Total Price + Vat (15%)
  const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);

  return (
    <div className="mt-8 min-h-[60vh]">
      {/* If the cart is empty */}
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src="/images/cart.svg"
            alt="emptyCart"
            width={400}
            height={400}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-2xl font-semibold">Your Cart is Empty</h1>
          <Link href="/">
            <Button className="mt-4">Shop Now</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
