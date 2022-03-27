import Image from "next/image";
import Link from "next/link";
import { BsSuitHeart } from "react-icons/bs";
import React from "react";

const FeaturedProducts = (): JSX.Element => {
  // @ts-ignore
  const handleClick = (event) => {
    if (event.target.classList.contains("authenticate")) {
      event.preventDefault();
    }
  };
  const iconSize = 24;
  return (
    <section>
      <div className="flex flex-col lg:flex-row w-full ">
        <Link href="/products/1">
          <a
            className="h-[20rem] md:h-[25rem] lg:h-[55rem] w-full lg:flex-[2] bg-purple-700 relative group block "
            onClick={handleClick}
          >
            <Image
              src="/assets/hat.webp"
              alt="First Image"
              objectFit="cover"
              layout="fill"
              className="group-hover:scale-110 transition duration-500 "
            />
            <div className="absolute left-0 top-0.5 space-y-0.5">
              <h3 className="capitalize bg-white p-4 px-5 text-black text-3xl font-bold">
                black beanie
              </h3>
              <p className="font-bold p-3 inline-block pl-2.5 pr-6 bg-white">
                $80.00 USD
              </p>
            </div>
            <button
              className="authenticate absolute right-0 top-0 group-hover:bg-white p-4 group-hover:text-black text-white :bg-transparent transition duration-300"
              aria-label="add to wishlist"
            >
              <BsSuitHeart size={iconSize} className="authenticate" />
            </button>
          </a>
        </Link>
        <div className=" w-full lg:flex-1 bg-green-500">
          <Link href="/products/2">
            <a
              className="bg-black h-[20rem] md:h-[25rem] lg:h-1/2 w-full relative block group"
              onClick={handleClick}
            >
              <Image
                src="/assets/jacket.webp"
                alt="First Image"
                objectFit="cover"
                layout="fill"
                className="group-hover:scale-110 transition duration-500 "
              />
              <div className="absolute left-0 top-0.5 space-y-0.5">
                <h3 className="capitalize bg-white p-4 px-5 text-black text-3xl font-bold">
                  LightWeight Jacket
                </h3>
                <p className="font-bold p-3 inline-block pl-2.5 pr-6 bg-white">
                  $160.192 USD
                </p>
              </div>
              <button
                className="authenticate absolute right-0 top-0 group-hover:bg-white p-4 group-hover:text-black text-white :bg-transparent transition duration-300"
                aria-label="add to wishlist"
              >
                <BsSuitHeart size={iconSize} className="authenticate" />
              </button>
            </a>
          </Link>
          <Link href="/products/3">
            <a
              className=" bg-pink-500 h-[20rem] md:h-[25rem] lg:h-1/2 w-full relative block group"
              onClick={handleClick}
            >
              <Image
                src="/assets/t-shirt.webp"
                alt="First Image"
                objectFit="cover"
                layout="fill"
                className="group-hover:scale-110 transition duration-500 "
              />
              <div className="absolute left-0 top-0.5 space-y-0.5">
                <h3 className="capitalize bg-white p-4 px-5 text-black text-3xl font-bold">
                  T-Shirt
                </h3>
                <p className="font-bold p-3 inline-block pl-2.5 pr-6 bg-white">
                  $80.00 USD
                </p>
              </div>
              <button
                className="authenticate absolute right-0 top-0 group-hover:bg-white p-4 group-hover:text-black text-white :bg-transparent transition duration-300"
                aria-label="add to wishlist"
              >
                <BsSuitHeart size={iconSize} className="authenticate" />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
