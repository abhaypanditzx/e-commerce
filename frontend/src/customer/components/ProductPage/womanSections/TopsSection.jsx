import React, { useEffect, useState } from 'react'
import CardTemp from '../../ElementsTemplate/CardTemp.jsx';
import axios from 'axios';

const topsSection = (props) => {
    const [tops,setTops] = useState([]);
    useEffect(()=>{
const loadTops = async()=>{
    const res = await  axios.get('http://localhost:3000/product/woman/tops');
     setTops(res.data.tops);
};
loadTops();
    },[])
  return (
  <div className='flex w-full p-4  gap-3 flex-wrap'>
       {
         tops.map((Product,id)=>(
         <CardTemp  key={id} category={props.category} gender="woman" id={id} product={Product}/>
         ))
       }
     </div>
  )
}

export default topsSection;
