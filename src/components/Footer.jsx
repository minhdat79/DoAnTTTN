import React from 'react';
import {assets} from '../assets/assets'

const Footer = () => {
  return(
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

    <div>
        <img src={assets.logo} className='mb-5 w-32' alt=""/>
        <p>
            Chất lượng mẫu áo thời trang từ vải cao cấp mang đến sự thoải mái phong cách
        </p>
    </div>

    <div>
      <p className='text-x1 font-medium mb-5'>COMPANY</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
      </ul>
    </div>

    <div>
      <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
        <li>+84-23683979</li>
        <li>nhom15tttn@gmail.com</li>

      </ul>
    </div>

    </div>

        <hr/>
        <p className='py-5 text-sm text-center'>Nhóm 15 TTTN</p>


    </div>
  )
}

export default Footer

