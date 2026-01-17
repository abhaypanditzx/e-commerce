import React, { useContext, useEffect, useState } from 'react'
import CardTemp from '../../ElementsTemplate/CardTemp.jsx';
import axios from 'axios';
import { UserContext } from '../../../../Context/ContextProvider.jsx';
const LehengaaSection = (props) => {
        const [lehenga,setLehenga] = useState([]);
        const {myUrl} = useContext(UserContext)
        useEffect(()=>{
    const loadLehenga = async()=>{
        const res = await  axios.get(`${myUrl}/product/woman/lehenga`);
         setLehenga(res.data.lehenga);
    };
  loadLehenga();
        },[])
  return (
    <div className='flex w-full p-4  gap-3 flex-wrap'>
      {
        lehenga.map((Product,id)=>(
            <CardTemp key={id} category={props.category}  gender="woman" id={id} product={Product}/>
        ))
      }
    </div>
  )
}

export default LehengaaSection
