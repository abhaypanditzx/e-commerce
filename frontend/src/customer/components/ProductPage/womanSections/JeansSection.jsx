import {useState,useEffect, use} from 'react'
import {useParams}  from 'react-router-dom';
import { useContext } from 'react';
import CardTemp from '../../ElementsTemplate/CardTemp.jsx';
import { UserContext } from '../../../../Context/ContextProvider.jsx';
import axios from 'axios';
const JeansSection = (props) => {
  const {myUrl} = useContext(UserContext);
  const [jeans,setJeans] = useState([]);
  useEffect(()=>{
    const fetchJeansData =  async ()=>{
      const res = await axios.get(`${myUrl}/product/woman/Wjeans`);
      setJeans(await res.data.Wjeans);
      console.log("Jeans Data:", res.data.Wjeans);
    }
     fetchJeansData();
  },[])

  return (
  <div  className='flex w-full p-4  gap-3 flex-wrap'>
      {
        jeans.map((product,index)=>(
            <CardTemp key={index} gender="woman" id={index} category={props.category}  product={product}/>
        ))
      }
    </div>
  )
}

export default JeansSection;
