import React from 'react'
import { Link } from 'react-router-dom'

import MenImg from "../../assets/men-avatar.png"
import { StarIcon } from '../../assets'

const brands = [
  {Img: MenImg, path: '#'},
  {Img: MenImg, path: '#'},
  {Img: MenImg, path: '#'},
  {Img: MenImg, path: '#'},
]

export default function DesignerList() {
  return (
    <div className='mb-16'>
      <div className="container mx-auto">
        <div className="py-2 flex items-center justify-between border-t border-black">
          <h3 className='text-3xl text-black font-bold'>Популярные дизайнеры</h3>
          <Link to="#" className='text-cyan-500 text-base'>Все дизайнеры</Link>
        </div>
        <div className="flex items-center justify-around gap-5 py-4">
          {brands.map(({Img}, index) => (
            <div key={index}>
              <img className='mb-6 w-full mx-auto' src={Img} alt="brand" width="140" />
              <h4 className="w-full text-center mb-4">Имя Фамилия</h4>
              <div className="flex items-center gap-1 justify-center">
                <StarIcon color='#33CAFF' />
                <StarIcon color='#33CAFF' />
                <StarIcon color='#33CAFF' />
                <StarIcon color='#33CAFF' />
                <StarIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
