import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller))
        setBestSeller(bestProduct.slice(0,5))
    },[])

  return(
    <div className='my-10'>
        <div className='text-center text-3x1 py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}></Title>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Chất lượng mẫu áo thời trang từ vải cao cấp mang đến sự thoải mái phong cách
            </p>
        </div>


    </div>
  )
}

export default BestSeller

