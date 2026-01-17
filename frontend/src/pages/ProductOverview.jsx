import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ChevronRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import { UserContext } from "../Context/ContextProvider";
const ProductOverview = () => {
  const { gender, category, id } = useParams();
  const [product, setProduct] = useState(null);
  const {myUrl}= useContext(UserContext) 
  useEffect(() => {
    const load = async () => {
      const res = await axios.get(
        `${myUrl}/product/${gender}/${category}`
      );
      const arr = res.data[category];
      setProduct(await arr[id]);
      console.log(arr);
    };
    load();
  }, [id]);
  if (!product) return <h2 className=" absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]">Loading...</h2>;
  const sizes = ["S", "M", "L", "XL", "XXL"];
  return (
    <div className="md:p-5 p-2 flex md:flex-row flex-col">
      <img src={product.imageUrl} alt="" />
      <div className="md:p-4 flex flex-col gap-y-3 p-2">
        <div>
          <h1 className="md:text-xl text-sm uppercase font-medium">
            {product.title}
          </h1>
          <p className="text-gray md:text-xl text-[12px] ">{product.brand}</p>
          <p className="md:text-md text-sm text-gray  mt-2 text  ">
            {product.description}
          </p>
        </div>
        <div className="flex gap-4 items-center ">
          <p className="md:text-2xl text-sm uppercase font-medium">
            ₹{product.discountedPrice}
          </p>
          <p className="md:text-lg text-[14px] text-gray uppercase text  ">
            mrp <span className="line-through">₹{product.price}</span>
          </p>
          <p className="md:text-lg text-sm uppercase text-purple-600 font-medium">
            {product.discountPersent}% off
          </p>
        </div>
        {/* taxes */}
        <span className="text-green-700 font-medium">
          inclusive of all taxes
        </span>

        <div>
          {/* select size */}
          <div className="flex flex-row gap-10">
            <h3 className="uppercase font-medium text-black">select size</h3>
            <h3 className="uppercase font-medium flex items-center  text-purple-600">
              <span>size chart</span> <ChevronRightIcon className="w-5" />
            </h3>
          </div>
          <div className="flex gap-1">
            {sizes?.map((s, i) => (
              <button
                className="border-2 mt-6 border-gray-400 w-12 h-12 flex items-center justify-center hover:border-black "
                key={i}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-row w-full gap-4 items-center">
          <button className="bg-purple-700 rounded-sm uppercase text-white hover:bg-purple-600 font-bold text-lg w-40 h-fit py-2 ">
            buy
          </button>
          <button className="border-gray-400 border justify-center rounded-sm text-gray-700 hover:border-gray-600  uppercase flex items-center  gap-x-2 font-bold text-lg w-50 h-fit py-2 ">
            <HeartIcon className="w-5" /> add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
