import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";


const LatestCollection = ()  => {

    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
    
  return(
    <div className='my-10'>
      <div className='text-center py-8 text-3x1'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Chất lượng mẫu áo thời trang từ vải cao cấp mang đến sự thoải mái phong cách
        </p>
      </div>

   
    </div>
  )
}

export default LatestCollection

