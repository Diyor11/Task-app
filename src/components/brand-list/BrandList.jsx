import React from 'react'
import { Link } from 'react-router-dom'

import Nike from "../../assets/like.png"
import adidas_logo from "../../assets/adidas_logo.png"
import VectorIcon from "../../assets/boko.png"
import gucci from "../../assets/gucci.png"
import Chanel from "../../assets/Chanel.png"

const brands = [
  {Img: Nike, path: '#'},
  {Img: adidas_logo, path: '#'},
  {Img: VectorIcon, path: '#'},
  {Img: gucci, path: '#'},
  {Img: Chanel, path: '#'},
]

export default function BrandList() {
  return (
    <div className='mb-16'>
      <div className="container mx-auto">
        <div className="py-2 flex items-center justify-between border-t border-black">
          <h3 className='text-3xl text-black font-bold'>Популярные бренды</h3>
          <Link to="#" className='text-cyan-500 text-base'>Все бренды</Link>
        </div>
        <div className="flex items-center justify-around gap-5 py-4">
          {brands.map(({Img}, index) => (
            <div key={index}>
              <img src={Img} alt="brand" width="120" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
