import React from 'react'
import { Blogs, BrandList, DesignerList, HeroSection, ProductList, Services } from '../../components'
import MenImg from "../../assets/adult-men.png"

export default function Mens() {
  return (
    <div className='mt-12'>
      <HeroSection img={MenImg} />
      <ProductList />
      <BrandList />
      <DesignerList />
      <Services />
      <Blogs />
    </div>
  )
}
