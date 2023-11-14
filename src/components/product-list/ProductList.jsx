import React, { useState } from 'react'
import ProductItem from './ProductItem'
import { Col, Row, Select } from 'antd'

const types = [
  {label: "Новинки", value: 0},
  {label: "Популярные", value: 1},
  {label: "Редактировать", value: 2},
]

const products = [
  1,2,3,4,5,6
]

export default function ProductList() {

  const [activeType, setActiveType] = useState(0)
  return (
    <div className='mb-16'>
      <div className="container mx-auto">
        <div className="menu border-b border-black mb-3">
          <ul className='mx-12 pb-4 flex items-center gap-12'>
            {types.map(({label, value}) => (
              <li 
                key={value}
                className={`
                text-black text-base font-normal cursor-pointer 
                  ${value === activeType ? "bg-cyan-500 text-white rounded p-2":"hover:text-cyan-500 text-black"}
                `}
                onClick={() => setActiveType(value)}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between mb-6">
          <h4 className='text-3xl font-extrabold text-black'>Новые рисунки </h4>
          <div className="flex items-center gap-3">
            <p className='text-sm text-gray-300'>Сортировать:</p>
            <Select
              defaultValue="1"
              style={{ width: 120 }}
              onChange={() => {}}
              options={[
                { value: '0', label: 'Popular' },
                { value: '1', label: 'Price High' },
                { value: '2', label: 'Price Low' },
              ]}
            />
          </div>
        </div>
        <Row gutter={[48, 48]}>
        {products.map((item, index) => (
          <Col span={8} key={index.toString()} >
            <ProductItem />
          </Col>
        ))}
        </Row>
        <div className="w-fit px-3 py-2 text-white text-lg rounded-md cursor-pointer mx-auto bg-cyan-500 mt-4">Показать Больше</div>
      </div>
    </div>
  )
}
