import React from 'react'
import BlogImg from "../../assets/BlogImg.png"
import BlogImg2 from "../../assets/Blog3.png"
import BlogImg3 from "../../assets/Blog2.png"
import BlogImg4 from "../../assets/Blog4.png"
import { Col, Row } from 'antd'

const blogs = [
  {Img: BlogImg, desc: "Эта рубашка спасет Вы сэкономите 40$ при себе Следующая онлайн-покупка"},
  {Img: BlogImg2, desc: "История позади Lode X: Это Стильное  движение"},
  {Img: BlogImg3, desc: "Что надеть Мадрид: 8 нарядов для Сделайте так, чтобы вы выглядели местными"},
  {Img: BlogImg4, desc: "Руководство по покупке Костюм: Что тыНадо знать"},
]

export default function Blogs() {
  return (
    <div className='mb-12'>
      <div className="container mx-auto">
        <div className="py-2 mb-9 flex items-center justify-between border-t border-black">
          <h3 className='text-3xl text-black font-bold'>Блог</h3>
        </div>
        <Row gutter={[48, 48]} className='px-7'>
          {blogs.map(({Img, desc}, index) => (
            <Col key={index} span={12}>
              <div className='flex items-center gap-6'>
                <img src={Img} width="160" alt={desc} />
                <p className='text-black text-xl font-normal'>{desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
