import React, { useEffect, useState } from 'react'
import CardTemp from '../../ElementsTemplate/CardTemp.jsx';
import axios from "axios";
import { useContext } from 'react';
import { UserContext } from '../../../../Context/ContextProvider.jsx';
const DressesSection = (props) => {
  const [dresses, setDresses] = useState([]);
  const { myUrl } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      const dressData = await axios.get(`${myUrl}/product/woman/dress`);
      setDresses(dressData.data.dress)
      
    }
    fetchData();

  }, [])
  return (
    <div className='flex w-full p-4  gap-3 flex-wrap'>
      {
        dresses.map((Product, id) => (
          <CardTemp key={id} category={props.category} gender="woman" id={id} product={Product} />
        ))
      }
    </div>
  )
}

export default DressesSection;
