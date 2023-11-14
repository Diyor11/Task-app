import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookIcon, InstagramIcon } from '../../assets'

const footerData = [
  {title: "Категории", items: [
    {label: 'Мужское', path: '/'},
    {label: 'Женское ', path: '/'},
    {label: 'Детское ', path: '/'},
  ]},
  {title: "О нас", items: [
    {label: 'Контакты', path: '/'},
    {label: 'О компании', path: '/'},
    {label: 'Правила пользования', path: '/'},
  ]},
  {title: "Мой аккаунт", items: [
    {label: 'Войти', path: '/'},
    {label: 'Заказы', path: '/'},
    {label: 'Список желаний', path: '/'},
  ]},
]

export default function Footer() {
  return (
    <footer className='footer border-t border-black mt-7'>
      <div className="container mx-auto py-7">
        <div className="flex justify-between">
            {footerData.map(({items, title}, kid) => (
              <ul key={kid} className='flex flex-col items-start gap-2'>
                <li className='text-black text-xl font-bold'>{title}</li>
                {items.map(({label, path}, index) => (
                  <li key={index} className='text-base text-gray-400 font-normal'>
                    <Link to={path}>{label}</Link>
                  </li>
                ))}
              </ul>
            ))}
            <ul className='flex flex-col items-start gap-2'>
              <li className='text-black text-xl font-bold'>+998 ( 99 ) 280 75 76</li>
              <li className='text-base text-gray-400 font-normal'>
                <Link to={"#"}>example@gmail.com</Link>
              </li>
              <li className='text-base text-gray-400 font-normal'>
                <Link to={"#"}>exampnma3@gmail.com</Link>
              </li>
              <li className="socials flex items-center gap-2">
                <InstagramIcon />
                <FacebookIcon />
              </li>
            </ul>
        </div>
      </div>
    </footer>
  )
}
