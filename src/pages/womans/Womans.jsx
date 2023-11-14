import React from 'react'
import { Blogs, BrandList, DesignerList, HeroSection, ProductList, Services } from '../../components'
import WomanImg from "../../assets/adult-woman.png"
export default function Womans() {
  return (
    <div className='mt-12'>
      <HeroSection img={WomanImg} />
      <ProductList />
      <BrandList />
      <DesignerList />
      <Services />
      <Blogs />
    </div>
  )
}
