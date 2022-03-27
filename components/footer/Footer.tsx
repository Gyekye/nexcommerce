import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full p-4   mx-auto max-w-screen-xl">
      <div className="border-b-2 border-gray-200 pb-2 space-y-3 flex flex-col lg:flex-row w-full ">
        <Link href="/">
          <a className="text-2xl">Logo</a>
        </Link>
        <div className="lg:ml-20">
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <a className="text-lg font-medium">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-lg font-medium">About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-lg font-medium">Terms of use</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-lg font-medium">Shipping & Returns</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <a className="text-2xl lg:ml-auto">
            <BsGithub size={30} />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
