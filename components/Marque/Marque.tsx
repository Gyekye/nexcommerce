import Link from "next/link";
import Image from "next/image";

const Marque = (): JSX.Element => {
  return (
    <div className="h-[23rem] md:h-[24rem] lg:h-[25rem] bg-black w-full overflow-hidden">
      <div className="flex w-full h-full animate-marque">
        <Link href="/">
          <a
            className="h-full flex-shrink-0 w-[30rem]
          relative "
          >
            <Image
              src="/assets/hat.webp"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="scale-95"
            />
            <h3 className="text-3xl bg-white absolute p-2 right-0 top-1/2 -translate-y-1/2">
              Black Beanie
            </h3>
          </a>
        </Link>
        <Link href="/">
          <a
            className="h-full flex-shrink-0 w-[30rem]
          relative "
          >
            <Image
              src="/assets/t-shirt.webp"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="scale-95"
            />
            <h3 className="text-3xl bg-white absolute p-2 right-0 top-1/2 -translate-y-1/2">
              Black Beanie
            </h3>
          </a>
        </Link>
        <Link href="/">
          <a
            className="h-full flex-shrink-0 w-[30rem]
          relative "
          >
            <Image
              src="/assets/jacket.webp"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="scale-95"
            />
            <h3 className="text-3xl bg-white absolute p-2 right-0 top-1/2 -translate-y-1/2">
              Black Beanie
            </h3>
          </a>
        </Link>
        <Link href="/">
          <a
            className="h-full flex-shrink-0 w-[30rem]
          relative "
          >
            <Image
              src="/assets/mask.webp"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="scale-95"
            />
            <h3 className="text-3xl bg-white absolute p-2 right-0 top-1/2 -translate-y-1/2">
              Black Beanie
            </h3>
          </a>
        </Link>
        <Link href="/">
          <a
            className="h-full flex-shrink-0 w-[30rem]
          relative "
          >
            <Image
              src="/assets/hat.webp"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="scale-95"
            />
            <h3 className="text-3xl bg-white absolute p-2 right-0 top-1/2 -translate-y-1/2">
              Black Beanie
            </h3>
          </a>
        </Link>
        <Link href="/">
          <a
            className="h-full flex-shrink-0 w-[30rem]
          relative "
          >
            <Image
              src="/assets/t-shirt.webp"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="scale-95"
            />
            <h3 className="text-3xl bg-white absolute p-2 right-0 top-1/2 -translate-y-1/2">
              Black Beanie
            </h3>
          </a>
        </Link>
        <Link href="/">
          <a
            className="h-full flex-shrink-0 w-[30rem]
          relative "
          >
            <Image
              src="/assets/jacket.webp"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="scale-95"
            />
            <h3 className="text-3xl bg-white absolute p-2 right-0 top-1/2 -translate-y-1/2">
              Black Beanie
            </h3>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Marque;
