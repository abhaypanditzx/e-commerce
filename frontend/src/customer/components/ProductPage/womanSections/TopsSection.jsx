import React, { useContext, useEffect, useState } from 'react'
import CardTemp from '../../ElementsTemplate/CardTemp.jsx';
import axios from 'axios';
import { UserContext } from '../../../../Context/ContextProvider.jsx';

const topsSection = (props) => {
    const [tops,setTops] = useState([]);
    const {myUrl} = useContext(UserContext)
    useEffect(()=>{
const loadTops = async()=>{
    const res = await  axios.get(`${myUrl}/product/woman/tops`);
     setTops(res.data.tops);
};
loadTops();
    },[])
  return (
  <div className='flex w-full p-4 gap-3 flex-wrap'>
       {
         tops.map((Product,id)=>(
         <CardTemp  key={id} category={props.category} gender="woman" id={id} product={Product}/>
         ))
       }
     </div>
  )
}

export default topsSection;
