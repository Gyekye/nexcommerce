import type { NextPage } from "next";
import { FeaturedProducts, Marque } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <FeaturedProducts />
      <Marque />
    </>
  );
};

export default Home;
