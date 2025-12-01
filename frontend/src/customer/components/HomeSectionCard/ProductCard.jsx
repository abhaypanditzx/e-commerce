import React from 'react'
const ProductCard = (props ) => {
   const {imageUrl,title,discountPersent,discountedPrice,price} = props.product;
    console.log(props.discountedPrice);
    return (
        <div className='w-[14rem] h-[17rem] bg-white cursor-pointer shadow-xs  border-gray-200 border-[0.2px]  flex flex-col overflow-hidden   '>
            <img className='object-top min-h-32 max-h-40 object-cover ' src={imageUrl} alt="product-image" />
            <h3 className='text-[14px] p-2 tracking- poppins-medium    text-start '>{title}</h3>
            <div className='flex   items-end'>
                <p className='text-start text-xl  font-semibold pl-2 '>Rs-{discountedPrice}</p>
                <div className='flex relative pl-2 top-[-3px] flex-col-reverse '>
                    <span className='text-gray-500 poppins-regular text-sm'>{discountPersent}%Discount</span>
                    <p className='text-red-500 line-through text-sm pl-2'>rs-{price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
