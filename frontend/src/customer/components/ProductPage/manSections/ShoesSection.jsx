import React, { useContext, useEffect, useState } from "react";
import ShoesCardTemp from "../../ElementsTemplate/ShoesCardTemp";
import axios from "axios";
import { UserContext } from "../../../../Context/ContextProvider.jsx";
const shoesSection = (props) => {
  const { myUrl } = useContext(UserContext);
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    const getShoesData = async () => {
      const shoesData = await axios.get(`${myUrl}/product/man/shoes`);
      setShoes(shoesData.data.shoes);
      console.log(shoesData.data.shoes);
    };
    getShoesData();
  }, []);
  return (
    <div className="flex w-full p-4  gap-3 flex-wrap">
      {shoes.map((product, id) => (
        <ShoesCardTemp key={id} category={props.category}  gender="man" id={id} product={product} />
      ))}
    </div>
  );
};

export default shoesSection;
