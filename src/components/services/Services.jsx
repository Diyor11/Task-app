import React from 'react'
import { Link } from 'react-router-dom'

import Bag from "../../assets/bag.png"
import VectorIcon from "../../assets/VectorIcon.png"
import Settings from "../../assets/Settings.png"
import Income from "../../assets/Income.png"

const services = [
  {Img: Bag, title: "Маркетплейс", desc: "Компания Lode X - позволяет людям редактировать свою одежду."},
  {Img: VectorIcon, title: "Оригинал", desc: "Мы следим за оригинальностью продаваемых вещей"},
  {Img: Settings, title: "Подбор", desc: "Удобный подбор одежды по всем параметрам"},
  {Img: Income, title: "Безопасная сделка", desc: "Безопасность платежей для покупателей и продавцов"},
]

export default function Services() {
  return (
    <div className='mb-16'>
      <div className="container mx-auto">
        <div className="py-2 flex items-center justify-between border-t border-black">
          <h3 className='text-3xl text-black font-bold'>Популярные дизайнеры</h3>
          <Link to="#" className='text-cyan-500 text-base'>Все дизайнеры</Link>
        </div>
        <div className="flex items-center justify-around gap-5 py-4">
          {services.map(({Img, title, desc}, index) => (
            <div key={index}>
              <div className="rounded-full border border-cyan-500 w-36 h-36 mx-auto mb-4 bg-white flex items-center justify-center">
                <img src={Img} alt={title} />
              </div>
              <h3 className="w-full text-center text-black text-2xl mb-4">{title}</h3>
              <p className="text-gray-400 text-base w-full text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
