import React from 'react'
import TShirt from "../../assets/t-shirt.png"
import {CartIcon, HeartIcon, VerifyedIcon} from '../../assets'
import { useNavigate } from 'react-router-dom'

export default function ProductItem() {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate("/editor/1")} className='w-full rounded-lg overflow-hidden'>
      <div className='bg-gray-500'>
        <img src={TShirt} className='w-64 mx-auto' alt="tshirt" width="350" />
      </div>
      <div className="content bg-gray-200 px-7 py-4">
        <div className="flex items-center py-2 gap-5">
          <VerifyedIcon />
          <h4 className="text-base">
            Kenzo Paris <span className='text-red-500'>32.000</span> сум
          </h4>
        </div>
        <div className="seporator w-full border-t border-black my-3"></div>
        <div className="actions flex items-center justify-between">
          <div className="flex items-center gap-4">
            <HeartIcon className="cursor-pointer" />
            <CartIcon className="cursor-pointer" />
          </div>
          <div className="cursor-pointer text-white bg-cyan-500 p-2 rounded-xl border border-black">
            Подробнее
          </div>
        </div>
      </div>
    </div>
  )
}
