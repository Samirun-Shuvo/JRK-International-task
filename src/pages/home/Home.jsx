import Banner from "./Banner";
import Blogs from "./Blogs";
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
      <Blogs />
    </div>
  );
};

export default Home;
