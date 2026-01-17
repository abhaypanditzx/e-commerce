import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


  const flattenProducts = (apiData) => {
  let products = [];

  apiData.forEach(categoryObj => {
    const categoryKey = Object.keys(categoryObj)[0]; // dress / Wjeans / Mjeans
    products = [...products, ...categoryObj[categoryKey]];
  });

  return products;
};

const Search = () => {
    const [searchValue,setSearchValue] = useState('');
    const [searchResult,setSearchResult] = useState([]);
  const searchQuery = async (e)=>{
    setSearchValue(e.target.value)
    e.preventDefault()
    if (!searchValue.trim()) return;
    try{
    const response  =await axios.get(`http://localhost:3000/product/allProducts`);
     const flatten =  flattenProducts(response.data);
   
      const filtered = flatten.filter((p) =>
        `${p.title} ${p.brand} ${p.color}`
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setSearchResult(filtered);
    }
    catch(err){
        console.log(err);
    }
  }
  



  return (
    <div className='bg-gray-200 h-screen no-scrollbar  flex flex-col  overflow-y-auto '>
  <div className='bg-white w-full  p-5 '>
      <div className='bg-gray-100 w-fit  rounded-md self-center h-10'>
      <input id='search' type="text" className='h-full w-xl outline-purple-600 placeholder:p-2' placeholder='search here...' value={searchValue} onChange={(e)=>{searchQuery(e)}} />
      <button className='rounded-r-md bg-purple-800 p-2 text-white h-full'  onClick={()=>{searchQuery()}}>search</button>
    </div>
  </div>
  {searchResult.map((item, index) => (
          <Link  key={index} className='mt-5 self-start gap-1.5 w-full cursor-pointer py-4 px-2 items-center bg-white flex '>
            <img className='h-[40px] w-[40px] rounded-full' src={item.imageUrl}  />
            <h3  className='text-blue-500'>{item.title}</h3>
            <p>₹{item.discountedPrice}</p>
          </Link>
        ))} 
  ...
    </div>
    
  )
}

export default Search
