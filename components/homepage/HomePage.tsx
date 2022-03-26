import Image from "next/image";
import Link from "next/link";
import { BsSuitHeart } from "react-icons/bs";

const HomePage = (): JSX.Element => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row w-full ">
        <Link href="/product/1">
          <a className="h-[20rem] md:h-[25rem] lg:h-[55rem] w-full lg:flex-[2] bg-violet-700 relative group block ">
            <Image
              src="/assets/hat.webp"
              alt="First Image"
              objectFit="cover"
              layout="fill"
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
              className="absolute right-0 top-0 bg-white p-4 group-hover:text-white group-hover:bg-transparent transition duration-300"
              aria-label="add to wishlist"
            >
              <BsSuitHeart size={24} />
            </button>
          </a>
        </Link>
        <div className=" w-full lg:flex-1 bg-green-500">
          <Link href="/product/2">
            <a className="bg-black h-[20rem] md:h-[25rem] lg:h-1/2 w-full relative block group">
              <Image
                src="/assets/jacket.webp"
                alt="First Image"
                objectFit="cover"
                layout="fill"
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
                className="absolute right-0 top-0 bg-white p-4 group-hover:text-white group-hover:bg-transparent transition duration-300"
                aria-label="add to wishlist"
              >
                <BsSuitHeart size={24} />
              </button>
            </a>
          </Link>
          <Link href="/product/3">
            <a className=" bg-pink-500 h-[20rem] md:h-[25rem] lg:h-1/2 w-full relative block group">
              <Image
                src="/assets/t-shirt.webp"
                alt="First Image"
                objectFit="cover"
                layout="fill"
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
                className="absolute right-0 top-0 bg-white p-4 group-hover:text-white group-hover:bg-transparent transition duration-300"
                aria-label="add to wishlist"
              >
                <BsSuitHeart size={24} />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
