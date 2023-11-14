import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuLogo from "../../assets/header_menu-logo.png"
import { HeartIcon, PersonIcon, SearchIcon } from '../../assets'

const links = [
  {label: "Мужское", path: '/men'},
  {label: "Женское", path: '/women'},
  {label: "Детские ", path: '/chidlren'},
  {label: "Безопасная Сделка", path: '/privicy'},
  {label: "Правило Пользование", path: '/some'},
]
export default function Header() {
  return (
    <header className='header'>
      <div className='container mx-auto h-16 bg-white flex items-center justify-between'>
        <div className='flex items-center gap-8'>
          <img src={MenuLogo} alt="menu-logo" width="60" />
          <nav>
            <ul className="flex items-center gap-5">
              {links.map(({label, path}) => (
                <li key={label}>
                  <NavLink to={path} className={({isActive}) => {
                    const matchClasses = isActive ? "text-cyan-500":'text-black text-base hover:text-cyan-400'
                    return `${matchClasses} hover:underline`
                  }}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="actions flex items-center gap-8">
          <HeartIcon className="cursor-pointer" color='#33CAFF' />
          <PersonIcon className="cursor-pointer" color='#33CAFF' />
          <div className='cursor-pointer text-black bg-cyan-400 px-5 rounded py-1'>Contact</div>
        </div>
      </div>
      <div className="header__bottom bg-black">
        <div className="container mx-auto">
          <div className="header__bottom h-12 px-14 flex items-center gap-14">
            <SearchIcon color="#fff" />
            <h4 className='text-gray-300 text-sm text-center'>Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... </h4>
          </div>
        </div>
      </div>
    </header>
  )
}
