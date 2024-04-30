import bannerChair from "../../assets/banner-img.png";
import bg from "../../assets/banner-bg.png";
import extentProduct from "../../assets/Group 2602.png";
import sofa from "../../assets/Group 4697.png";
import chair from "../../assets/Group 2604.png";
import bed from "../../assets/Group 2605.png";

const Banner = () => {
  return (
    <section>
      <div
        className="hero h-[430px]"
        style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerChair} className="max-w-sm rounded-lg hidden lg:block" />
          <div className="pt-8">
            <h1 className="text-5xl font-bold pt-8">
              We <span className="text-[#2F8F6F]">Provide High</span>
            </h1>
            <h3 className="text-4xl font-bold py-4">Quality Furniture</h3>
            <p className="pb-16 text-[#001C13]">
              Choose and buy from wide and largest sofa collection of
              Bangladesh. Regal, the most loved and selling furniture brand in
              Bangladesh, brought to you modern, ergonomic, budget friendly
              sofa. Choose among various types of Sofa Such as Fabric Sofa,
              Wooden Sofa, Sofa cum beds, L-shaped Sofa at affordable prices,
              redefine your living room with our most unique ergonomically and
              quality crafted Sofas that suit your needs best.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FDCC1A] mt-[-20px] h-[140px]">
        <div className="flex justify-start items-center mx-14 py-10">
          <span className="bg-[#2F6F59] p-2 text-white rounded cursor-pointer">
            Buy Now
          </span>
          <img src={extentProduct} alt="" className="w-28" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-[-50px] sm:mt-[-100px] lg:mt-[-100px]">
        <img
          className="w-full max-w-[8rem] sm:max-w-[10rem]"
          src={sofa}
          alt=""
        />
        <img
          className="w-full max-w-[8rem] sm:max-w-[10rem]"
          src={chair}
          alt=""
        />
        <img
          className="w-full max-w-[8rem] sm:max-w-[10rem]"
          src={bed}
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
