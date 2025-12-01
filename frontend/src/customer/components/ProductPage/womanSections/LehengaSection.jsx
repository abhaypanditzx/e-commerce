import React, { useEffect, useState } from 'react'
import CardTemp from '../../ElementsTemplate/CardTemp.jsx';
import axios from 'axios';
const LehengaaSection = (props) => {
        const [lehenga,setLehenga] = useState([]);
        useEffect(()=>{
    const loadLehenga = async()=>{
        const res = await  axios.get('http://localhost:3000/product/woman/lehenga');
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
