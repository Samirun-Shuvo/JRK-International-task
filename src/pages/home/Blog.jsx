/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Blog = ({ blog }) => {
  const { img, description, releaseDate, releaseTheme, releaseProduct } = blog;
  return (
    <div className="card max-w-lg ">
      <figure>
        <img src={blog.img} className="w-[300px] h-[200px]" alt="" />
      </figure>
      <div className="px-4">
        <h2 className="text-[14px] mb-2 lg:text-start text-center font-bold">
          {blog.description}
        </h2>
        <hr className="w-24 h-0.5 bg-[#FFDD5F] lg:mx-0 mx-auto" />
        <p className="text-[12px] lg:text-start text-center my-2">
          {blog.releaseDate} / {blog.releaseTheme} / {blog.releaseProduct}
        </p>
      </div>
    </div>
  );
};

export default Blog;
