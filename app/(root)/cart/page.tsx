"use client";
import { Button } from "@/components/ui/button";
import { addItem, CartItem, removeItem } from "@/store/cartSlice";
import { useUser } from "@clerk/nextjs";
import { RootState } from "@reduxjs/toolkit/query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

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

  // Get user
  const { user } = useUser();
  // Add item
  const addItemHandler = (item: CartItem) => {
    dispatch(addItem(item));
  };
  // Remove item
  const removeItemHandler = (id: number) => {
    dispatch(removeItem({ id }));
  };

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
            <Button className="mt-4 rounded-[6px]">Shop Now</Button>
          </Link>
        </div>
      )}
      {/* If Cart is not empty */}
      {items.length > 0 && (
        <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
          {/* Cart items */}
          <div className="rounded-lg shadow-md overflow-hidden xl:col-span-4">
            <h1 className="p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-gray-800 rounded-[6px]">
              Your Cart ({totalQuantity} Items)
            </h1>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex pb-6 p-5 mt-2 border-b-[1.5px]  border-opacity-25 border-gray-700 items-center space-x-10">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={180}
                        height={180}
                      />
                    </div>
                    <div>
                      <h1 className="md:text-xl font-bold text-black text-base">
                        {item.title}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Category : {item.category}
                      </h1>
                      <h1 className="md:text-2xl text-lg font-bold text-blue-950">
                        ${item.price}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Quantity :{item.quantity}
                      </h1>
                      <div className="flex items-center mt-4 space-x-2">
                        <Button
                          className="rounded-[6px]"
                          onClick={() => {
                            addItemHandler(item);
                          }}
                        >
                          Add More
                        </Button>
                        <Button
                          onClick={() => {
                            removeItemHandler(item.id);
                          }}
                          className="rounded-[6px]"
                          variant={"destructive"}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Cart summary */}
          <div className="xl:col-span-2">
            <div className="bg-gray-800 sticky h-[62vh]  top-[25vh] p-6 rounded-[6px]">
              <h1 className="text-center mt-8 mb-8 text-white text-3xl font-semibold">
                Summary
              </h1>
              <div className="w-full h-[1.2px] bg-white bg-opacity-20">
                <div className="flex mt-4 text-xl font-semibold uppercase text-white items-center justify-between">
                  <span>Subtotal</span>
                  <span>{totalPrice}</span>
                </div>
                <div className="flex mt-10 mb-10 text-xl font-semibold uppercase text-white items-center justify-between">
                  <span>VAT</span>
                  <span>${vat}</span>
                </div>
                <div className="flex mb-6 text-xl font-semibold uppercase text-white items-center justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>
                <div className="flex mt-6 mb-8 text-xl font-semibold uppercase text-white items-center justify-between">
                  <span>Total</span>
                  <span>${totalPriceWithVat}</span>
                </div>
                {!user && (
                  <Link href="/sign-in">
                    <Button className="bg-orange-500 w-full py-5 rounded-[6px]">
                      Sign in to checkout
                    </Button>
                  </Link>
                )}
                {user && (
                  // Paypal button
                  <Button className="w-full bg-orange-500 py-5 rounded-[6px]">
                    Paypal
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
