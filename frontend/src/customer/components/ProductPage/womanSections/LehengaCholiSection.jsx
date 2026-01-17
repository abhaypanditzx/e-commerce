import React, { useEffect, useState } from 'react'
import CardTemp from '../../ElementsTemplate/CardTemp.jsx';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../../../Context/ContextProvider.jsx';
const LehengaCholiSection = (props) => {
  const {myUrl} = useContext(UserContext)
        const [lehengaCholi,setLehengaCholi] = useState([]);
        useEffect(()=>{
    const loadLehengaCholi = async()=>{
        const res = await  axios.get(`${myUrl}/product/woman/lehengaCholi`);
         setLehengaCholi(res.data.lehengaCholi);
    };
  loadLehengaCholi();
        },[])
  return (
    <div className='flex w-full gap-3 p-4 flex-wrap'>{
          lehengaCholi.map((Product,id)=>(
         <CardTemp  key={id} category={props.category}  gender="woman" id={id} product={Product}/>
         ))
       }
    </div>
  )
}

export default LehengaCholiSection;
