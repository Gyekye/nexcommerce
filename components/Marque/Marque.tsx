import Link from "next/link";

const Marque = (): JSX.Element => {
  return (
    <div className="h-80 bg-black w-full overflow-hidden">
      <div className="flex">
        <Link href="/">
          <a>somewhere</a>
        </Link>
        <Link href="/">
          <a>somewhere</a>
        </Link>
        <Link href="/">
          <a>somewhere</a>
        </Link>
        <Link href="/">
          <a>somewhere</a>
        </Link>
      </div>
    </div>
  );
};
export default Marque;
