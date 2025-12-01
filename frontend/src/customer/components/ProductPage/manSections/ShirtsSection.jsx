import React,{useState,useEffect,useContext} from 'react'
import CardTemp from '../../ElementsTemplate/CardTemp.jsx';    
import { UserContext } from '../../../../Context/ContextProvider.jsx';
import axios from 'axios';

const ShirtsSection = (props) => {
  const [shirts,setShirts]= useState([]);
const {myUrl}= useContext(UserContext)
useEffect(()=>{
const getShirtData= async()=>{
  const shirtsData = await axios.get(`${myUrl}/product/man/shirts`);
  setShirts(shirtsData.data.shirts);
}
console.log(shirts)
getShirtData();
},[])

  return (
     <div className='flex w-full p-4  gap-3 flex-wrap'>
       {
         shirts.map((product,id)=>(
         <CardTemp   key={id} category={props.category} gender='man' id={id}  product={product}/>
         ))
       }
     </div>
  )
}

export default ShirtsSection
