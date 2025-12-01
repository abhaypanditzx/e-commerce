import React, { useContext, useEffect, useState } from "react";
import CardTemp from "../../ElementsTemplate/CardTemp";
import axios from "axios";
import { UserContext } from "../../../../Context/ContextProvider.jsx";
const PantsSection = (props) => {
  const { myUrl } = useContext(UserContext);
  const [pants, setPants] = useState([]);
  useEffect(() => {
    const getPantsData = async () => {
      const pantsData = await axios.get(`${myUrl}/product/man/pants`);
      setPants(pantsData.data.pants);
      console.log(pantsData.data.pants);
    };
    getPantsData();
  }, []);
  return (
    <div className="flex w-full p-4  gap-3 flex-wrap">
      {pants.map((product, id) => (
        <CardTemp key={id} category={props.category}  gender="man" id={id} product={product} />
      ))}
    </div>
  );
};

export default PantsSection;
