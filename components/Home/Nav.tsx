import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "../Helper/SearchBox";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartButton from "../Helper/ShoppingCartButton";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Nav = () => {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={140} height={140} priority />
        </Link>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Box */}
          <SearchBox />
          <HeartIcon
            size={26}
            cursor={"pointer"}
            className="fill-white hover:fill-pink-400 hover:text-pink-400 duration-200"
          />

          {/* ShoppingCartButton */}
          <ShoppingCartButton />

          {/* User Button */}
          {/* Show User's profile icon when signed in */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Show sign-in button when signed out */}
          <SignedOut>
            <SignInButton>
              <UserIcon size={26} cursor={"pointer"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Nav;
