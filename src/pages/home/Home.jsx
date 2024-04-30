import Banner from "./Banner";
import ProductBanner from "./ProductBanner";
import ProductDetails from "./ProductDetails";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <ProductBanner />
      <ProductDetails />
    </div>
  );
};

export default Home;
