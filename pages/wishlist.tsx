import { BsSuitHeart } from "react-icons/bs";

const Wishlist = (): JSX.Element => {
  return (
    <section className="min-h-[calc(100vh-6.7rem)] lg:min-h-[calc(100vh-4rem)] py-3 max-w-6xl flex flex-col mx-auto p-4">
      <h3 className="text-2xl font-semibold">My Wishlist</h3>
      <div className="flex-1 flex items-center justify-center flex-col space-y-3 p-5 ">
        <div className="w-24 h-24 rounded-lg grid place-items-center border border-dashed border-black">
          <BsSuitHeart size={24} className="text-black" />
        </div>
        <h2 className="text-3xl text-center">Your wishlist is empty</h2>
        <p className="text-lg text-center">
          Add items to your wishlist and come back later
        </p>
      </div>
    </section>
  );
};
export default Wishlist;
