"use client";
import { getProductByCategory, getSingleProduct } from "@/Request/requests";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddToCart from "../add-cart";
import ProductCard from "@/components/Home/ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const product = await getSingleProduct(id);
        setSingleProduct(product);

        const productsByCategory = await getProductByCategory(product.category);
        setRelatedProducts(productsByCategory);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!singleProduct) return null;

  const num = Math.round(singleProduct.rating.rate);
  const starArray = new Array(num).fill(0);

  return (
    <div className="mt-20">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        <div className="col-span-3 mb-6 lg:mb-0">
          <Image
            src={singleProduct.image}
            alt={singleProduct.title}
            width={400}
            height={400}
          />
        </div>
        <div className="col-span-4">
          <h1 className="lg:text-3xl text-2xl font-bold text-black">
            {singleProduct.title}
          </h1>
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center">
              {starArray.map((_, index) => (
                <StarIcon
                  key={index}
                  size={20}
                  fill="yellow"
                  className="text-yellow-400"
                />
              ))}
            </div>
            <p className="text-base text-gray-700 font-semibold">
              ({singleProduct.rating.count} Reviews)
            </p>
          </div>
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg mt-4 opacity-20 mb-4"></span>
          <h1 className="lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold">
            ${singleProduct.price.toFixed(2)}
          </h1>
          <p className="mt-4 text-base text-black opacity-70">
            {singleProduct.description}
          </p>
          <p className="mt-4 text-sm text-black text-opacity-70 font-semibold">
            Category : {singleProduct.category}
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            Tag : Shop, WDW
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            SKU : {Math.floor(Math.random() * 1000)}
          </p>
          <AddToCart product={singleProduct} />
        </div>
      </div>
      <div className="h-4/5 mt-16 pl-40 mx-auto">
        <h1 className="text-2xl text-black font-semibold">Related Product</h1>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
