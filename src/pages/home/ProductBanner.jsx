import pb_1 from "../../assets/product-banner/Group 4723.png";
import pb_2 from "../../assets/product-banner/Group 4724.png";
import pb_3 from "../../assets/product-banner/Group 4703.png";
const ProductBanner = () => {
  return (
    <section className="my-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-5 grid-cols-1">
        <div className="lg:col-span-3 col-span-1">
          <img src={pb_1} alt={pb_1} />
        </div>
        <div className="grid grid-rows-2 lg:col-span-2 col-span-1">
          <div>
            <img src={pb_2} alt={pb_2} />
          </div>
          <div>
            <img src={pb_3} alt={pb_3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
