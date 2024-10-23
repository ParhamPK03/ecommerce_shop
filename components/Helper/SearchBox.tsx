import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { SearchIcon } from "lucide-react";

import React from "react";

const SearchBox = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon size={26} cursor={"pointer"} className="fill-white hover:fill-gray-300 duration-200" />
      </DialogTrigger>
      <DialogContent>
        <form>
          <input
            type="text"
            placeholder="Search Product"
            className="block w-full bg-gray-300 rounded-lg  px-6 py-2 mt-4 outline-none"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBox;
