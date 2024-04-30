import p_bg from "../../assets/products/Rectangle 68.png";
import p_1 from "../../assets/products/p1.png";
import p_2 from "../../assets/products/p2.png";
import p_3 from "../../assets/products/p3.png";
import p_4 from "../../assets/products/p4.png";
const Products = () => {
  const products = [
    {
      _id: 1,
      name: "Tulip Chair Furniture",
      price: 12.09,
      img: p_1,
    },
    {
      _id: 2,
      name: "Beath Chair Furniture",
      price: 20.04,
      img: p_2,
    },
    {
      _id: 3,
      name: "Yellow armchair",
      price: 10.07,
      img: p_3,
    },
    {
      _id: 4,
      name: "Front view Chair",
      price: 18.09,
      img: p_4,
    },
  ];
  return (
    <section className="my-10 max-w-7xl mx-auto">
      <div className="text-center w-[70%] mx-auto">
        <h3 className="text-primary text-xl font-bold uppercase">
          POPULACE <span className="text-[#2F8F6F]">WE HAVE</span>
        </h3>

        <h2 className="text-sm text-[#737373] my-2">
          Furniture Concepts is a contract furniture wholesaler serving the
          needs of group living environments including Community Housing,
          Treatment & Recovery Centers, Assisted Living, Camps, Conference
          Centers, Student Housing, Military Dorms & Quarters, and more!
          Behavioral Healthcare Facility Furniture.
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product._id}
            className="card lg:max-w-lg bg-base-100 shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img
                src={product.img}
                className="w-32 h-32 rounded-xl z-10"
                alt="Shoes"
              />
            </figure>
            <div
              style={{ background: `url(${p_bg})`, backgroundSize: "cover" }}
              className="card-body items-center text-center mt-[-30px]"
            >
              <div>
                <h2 className="card-title text-white">{product.name}</h2>
                <span className="text-[#FDCC1A] font-bold">*****</span>
                <p className="text-white font-bold">${product.price}</p>
                <button className="bg-[#FDCC1A] px-4 py-1 rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
