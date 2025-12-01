import React from 'react'
import { Link } from 'react-router-dom';
const ShoesCardTemp = (props) => {
    const {imageUrl,title,price,items_left}= props.product;
    const {category,gender,id} = props;
  return (
    <Link to={`${id}`}>
        <div  className='w-[14rem] h-[18rem] hover:scale-101 hover:border-blue-200 bg-white cursor-pointer shadow-xs  border-gray-200 border-[0.2px]  flex flex-col overflow-hidden   '>
            <img className='object-bottom min-h-32 max-h-40 object-cover ' src={imageUrl} alt="product-image" />
            <h3 className='text-[14px] p-2 tracking- poppins-medium    text-start '>{title}</h3>
           <div className='p-2 h-fit '>
             <div className='flex flex-col items-start'>
                <p className='text-start text-xl  font-semibold  '>Rs-{price}</p>
              <div>
               <span className='text-xs text-gray-400'>Items left: {items_left}</span>
              </div>
           </div>
            </div>
        </div>
    </Link>
  )
}

export default ShoesCardTemp
