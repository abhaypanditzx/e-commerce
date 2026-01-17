import React,{useState,useEffect,useContext} from 'react'
import CardTemp from '../../ElementsTemplate/CardTemp.jsx';    
import { UserContext } from '../../../../Context/ContextProvider.jsx';
import axios from 'axios';

const KurtaSection = (props) => {
  const [kurta,setkurta]= useState([]);
const {myUrl}= useContext(UserContext)
useEffect(()=>{
const getShirtData= async()=>{
  const kurtaData = await axios.get(`${myUrl}/product/man/kurta`);
  setkurta(kurtaData.data.kurta);
}
console.log(kurta)
getShirtData();
},[])
 const isKurtaPage = props.category? kurta: kurta.slice(0 , 5) ;
 
  return (
     <div className='flex w-full p-4  gap-3 flex-wrap'>
       {
         isKurtaPage.map((product,id)=>(
         <CardTemp   key={id} category={props?.category} gender='man' id={id}  product={product}/>
         ))
       }
     </div>
  )
}

export default KurtaSection
