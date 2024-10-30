import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      {/* Define grid system */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* First Part 1  */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            WDW Shop
          </h1>
          <p className="text-sm text-black opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            architecto est cupiditate iure, doloribus officia facilis ducimus
            quam voluptate ratione.
          </p>
          <p className="text-base mt-6 text-black opacity-80">
            (+00) 1234 5678 90 - info@gmail.com
          </p>
        </div>
        {/* Second Part 2 */}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Information</h1>
          <p className="footer_link">About Us</p>
          <p className="footer_link">Privacy Police</p>
          <p className="footer_link">Return Police</p>
          <p className="footer_link">Drop Shipping</p>
          <p className="footer_link">Shipping Police</p>
        </div>
        {/* Third Part 3 */}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Account</h1>
          <p className="footer_link">Dashboard</p>
          <p className="footer_link">My Orders</p>
          <p className="footer_link">Account Details</p>
          <p className="footer_link">Track My Orders</p>
        </div>
        {/* Fourth Part 4 */}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Shop</h1>
          <p className="footer_link">Affiliate</p>
          <p className="footer_link">Best Seller</p>
          <p className="footer_link">Latest Product</p>
          <p className="footer_link">Sale Product</p>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
        <p className="text-sm text-black opacity-60">
          Copyright Mr-Pourkhani 2024
        </p>
        <Image
          src="/images/pay.svg"
          alt="pay"
          width={230}
          height={230}
          className="object-contain sm:ml-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
