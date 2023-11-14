import React from 'react'
import { Blogs, BrandList, DesignerList, HeroSection, ProductList, Services } from '../../components'
import ChildImg from "../../assets/child-adult.png"
export default function Chidlren() {
  return (
    <div className='mt-12'>
      <HeroSection img={ChildImg} />
      <ProductList />
      <BrandList />
      <DesignerList />
      <Services />
      <Blogs />
    </div>
  )
}
