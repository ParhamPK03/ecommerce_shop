import { CartItem } from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";

type props = {
  items: CartItem[];
};
const CartSidebar = ({ items }: Props) => {
  return (
    <div className="mt-6 h-full mb-6">
      {/* Heading */}
      <h1 className="text-center font-bold mb-6 text-lg">Your Cart</h1>
      {/* If there is no item in cart */}
      {items.length == 0 && (
        <div className="flex items-center w-full h-[88vh] flex-col justify-center">
          <Image
            src="/images/cart.svg"
            alt="empty_cart"
            width={200}
            height={200}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-2xl font-semibold">Your Cart is Empty</h1>
        </div>
      )}
      {/* If there is item in cart */}
      {items.length > 0 && (
        <div>
          {items?.map((item) => {
            return (
              <div
                key={item.id}
                className="pb-4 border-b-2 border-gray-300 border-opacity-60 p-4"
              >
                {/* Cart item image */}
                <div>
                  <Image
                    src={item?.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-cover mb-4"
                  />
                </div>
                <div>
                  {/* Title */}
                  <h1 className="text-sm w-4/5 font-semibold truncate">
                    {item?.title}
                  </h1>
                  {/* Price */}
                  <h1 className="text-base text-blue-950 font-bold">
                    ${(item?.price * item?.quantity).toFixed(2)}
                  </h1>
                  {/* Quantity */}
                  <h1 className="text-base font-bold mb-2">
                    Quantity : {item?.quantity}
                  </h1>
                  {/* Two Button */}
                  <div className="flex items-center space-x-4">
                    <Button
                      size={"sm"}
                      className="rounded-[6px]"
                      variant={"destructive"}
                    >
                      Remove
                    </Button>
                    <Button size={"sm"} className="rounded-[6px]">
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}

          <Link href="/cart">
            <SheetClose>
              <Button className="w-full mb-6 mt-6 rounded-[6px]">
                View All Cart
              </Button>
            </SheetClose>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
