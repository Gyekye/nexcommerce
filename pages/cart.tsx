import { BsBagCheck } from "react-icons/bs";

const Cart = (): JSX.Element => {
  return (
    <section className="min-h-[calc(100vh-6.7rem)] lg:min-h-[calc(100vh-4rem)] max-w-6xl mx-auto flex flex-col">
      <div className="h-full flex-1 flex items-center justify-center flex-col space-y-3">
        <div className="w-24 h-24 rounded-full  grid place-items-center border border-dashed border-white bg-black border-">
          <BsBagCheck size={24} className="text-white" />
        </div>
        <h2 className="text-3xl">Please Sign In</h2>
        <p className="text-lg text-center">
          Sign in to view items in your cart
        </p>
        <button className="px-8 py-2 bg-black text-white text-lg rounded-md hover:scale-105 transition duration-300">
          Sign In
        </button>
      </div>
    </section>
  );
};
export default Cart;
