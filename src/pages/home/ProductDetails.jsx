import pd_0 from "../../assets/product-details/pd-0.png";
import pd_1 from "../../assets/product-details/pd-1.png";
import pd_2 from "../../assets/product-details/pd-2.png";
import pd_3 from "../../assets/product-details/pd-3.png";
import videoImg from "../../assets/product-details/videoImg.png";

const ProductDetails = () => {
  return (
    <section className="my-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-6 grid-cols-1 gap-5">
        <div className="grid col-span-2">
          <img className="w-[400px] h-[400px]" src={pd_0} alt="" />
        </div>
        <div className="grid lg:grid-rows-3 grid-rows-1">
          <div>
            <img className="w-32 h-32" src={pd_1} alt="" />
          </div>
          <div>
            <img className="w-32 h-32" src={pd_2} alt="" />
          </div>
          <div>
            <img className="w-32 h-32" src={pd_3} alt="" />
          </div>
        </div>
        <div className="grid col-span-3">
          <div className="p-4">
            <div className="text-3xl font-bold pt-10">
              <h3>Designed to Fit</h3>
              <h2>Your Home</h2>
            </div>
            <p className="py-2">
              Furniture Concepts is a contract furniture wholesaler serving the
              needs of group living environments including Community Housing,
              Treatment & Recovery Centers, Assisted Living, Camps, Conference
              Centers, Student Housing, Military Dorms & Quarters, and more!
              Behavioral Healthcare Facility Furniture.
            </p>
            <div className="flex justify-start items-center">
              <button className="bg-[#2F6F59] px-2 py-1 rounded-md text-white mr-5 my-5">
                Shop Now
              </button>
              <img className="w-20 cursor-pointer" src={videoImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
