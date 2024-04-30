import b1 from "../../assets/blogs/b1.png";
import b2 from "../../assets/blogs/b2.png";
import b3 from "../../assets/blogs/b3.png";
import b4 from "../../assets/blogs/b4.png";
import Blog from "./Blog";
const Blogs = () => {
  const blogs = [
    {
      _id: 1,
      description:
        "Interior design is the art, the interior designer is the artist.",
      img: b1,
      releaseDate: "October 02, 2022",
      releaseTheme: "Hastheme",
      releaseProduct: "In Chair",
    },
    {
      _id: 2,
      description:
        "Interior design is the art, the interior designer is the artist.",
      img: b2,
      releaseDate: "October 02, 2022",
      releaseTheme: "Hastheme",
      releaseProduct: "In Chair",
    },
    {
      _id: 3,
      description:
        "Interior design is the art, the interior designer is the artist.",
      img: b3,
      releaseDate: "October 02, 2022",
      releaseTheme: "Hastheme",
      releaseProduct: "In Chair",
    },
    {
      _id: 4,
      description:
        "Interior design is the art, the interior designer is the artist.",
      img: b4,
      releaseDate: "October 02, 2022",
      releaseTheme: "Hastheme",
      releaseProduct: "In Chair",
    },
  ];
  return (
    <section className="my-10 max-w-7xl mx-auto">
      <div className="my-5">
        <h3 className="text-primary text-md font-bold uppercase text-center">
          Our <span className="text-[#2F8F6F]">Blog</span>
        </h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
