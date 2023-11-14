import React from 'react'
import { Link } from 'react-router-dom'
import { SwapRightOutlined } from '@ant-design/icons'
export default function HeroSection({img}) {
  return (
    <div className='mb-16'>
      <div className="container mx-auto">
        <div className='flex items-stretch bg-gray-300 gap-8' style={{borderRadius: "48px"}}>
          <img src={img} alt="men-adult" width={'400px'}/>
          <div className="content p-10 flex flex-col justify-between">
            <h3 className="text-black font-extrabold text-5xl mb-7 text-center">
              Универсальное решение для ваших нужд в одежде
            </h3>
            <p className="text-black text-xl text-center">
              Все, что вам нужно, чтобы найти идеальный предмет одежды, есть в Lode X. Мы предлагаем одежду ведущих брендов и редактирование изображений на ней.
            </p>
            <div className="flex justify-end">
              <div className="flex items-center gap-1">
                <Link to='#' className='text-cyan-500'>читать далее</Link>
                <SwapRightOutlined color='red' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
