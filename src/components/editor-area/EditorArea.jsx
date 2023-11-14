import React from 'react'
import Menu from "../../assets/Menu.svg"
import TurnLeft from "../../assets/TurnLeft.svg"
import TurnRight from "../../assets/TurnRight.svg"
import Upload from "../../assets/Upload.svg"
import Design from "../../assets/Design.svg"
import DashboardLayout from "../../assets/DashboardLayout.svg"
import Text from "../../assets/Text.svg"
import Paintbrush from "../../assets/Paintbrush.svg"
import HeightIcon from "../../assets/Height.svg"
import ListIcon from "../../assets/List.svg"
import AlignCenterIcon from "../../assets/AlignCenter.svg"
import TTIcon from "../../assets/TT.svg"
import TIcon from "../../assets/T.svg"
import UIcon from "../../assets/U.svg"
import IIcon from "../../assets/I.svg"
import BIcon from "../../assets/B.svg"
import AIcon from "../../assets/A.svg"

import { Input, InputNumber } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import {BrandList, DesignerList, Services, Blogs} from '../'

export default function EditorArea() {
  return (
    <div>
      <div className="w-full flex items-center h-16 bg-gradient justify-between pr-6" >
        <div className="items-center flex gap-4">
          <div className="menu-icon w-16 flex justify-center">
            <img className="cursor-pointer" src={Menu} alt="menu" />
          </div>
          <h3 className='text-white text-xl'>Home</h3>
          <img className="cursor-pointer" src={TurnLeft} alt="icon" />
          <img className="cursor-pointer" src={TurnRight} alt="icon" />
        </div>
        <h3 className="text-3xl text-white">Project Title</h3>
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-white">Share</h3>
          <img className="cursor-pointer" src={Upload} alt="icon" />
        </div>
      </div>
      <div className="flex h-80">
        <div className="w-16 bg-black">
          <ul>
            <li className='w-full flex items-center my-5 flex-col'>
              <img src={Design} alt="icon" className='cursor-pointer' />
              <span className='text-white text-sm'>Design</span>
            </li>
            <li className='w-full flex items-center my-5 flex-col'>
              <img src={DashboardLayout} alt="icon" className='cursor-pointer' />
              <span className='text-white text-sm'>Elements</span>
            </li>
            <li className='w-full flex items-center my-5 flex-col'>
              <img src={Text} alt="icon" className='cursor-pointer' />
              <span className='text-white text-sm'>Text</span>
            </li>
            <li className='w-full flex items-center my-5 flex-col'>
              <img src={Paintbrush} alt="icon" className='cursor-pointer' />
              <span className='text-white text-sm'>Paint</span>
            </li>
          </ul>
        </div>
        <div className='w-full'>
          <div className="w-full mb-1 shadow h-14 flex items-center px-3 gap-4">
            <Input placeholder='Font type' className='w-fit' />
            <InputNumber defaultValue={15} />
            <img src={AIcon} alt="icon" className='cursor-pointer' />
            <img src={BIcon} alt="icon" className='cursor-pointer' />
            <img src={IIcon} alt="icon" className='cursor-pointer' />
            <img src={UIcon} alt="icon" className='cursor-pointer' />
            <img src={TIcon} alt="icon" className='cursor-pointer' />
            <img src={TTIcon} alt="icon" className='cursor-pointer' />
            <img src={AlignCenterIcon} alt="icon" className='cursor-pointer' />
            <img src={ListIcon} alt="icon" className='cursor-pointer' />
            <img src={HeightIcon} alt="icon" className='cursor-pointer' />
            
          </div>
          <TextArea className='border-none h-full' rows={10}/>
        </div>
      </div>
      <div className="h-96"></div>
      <BrandList />
      <DesignerList />
      <Services />
      <Blogs />
    </div>
  )
}
