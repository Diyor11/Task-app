import React from 'react'

export default function PersonIcon({color = "#000", ...props}) {
  return (
    <svg {...props} width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0048 0C12.5035 0 8.82061 4.48 8.82061 10C8.82061 15.52 12.5035 20 17.0048 20C21.506 20 25.1889 15.52 25.1889 10C25.1889 4.48 21.506 0 17.0048 0ZM8.45233 20C4.11473 20.2 0.636475 23.68 0.636475 28V32H33.373V28C33.373 23.68 29.9357 20.2 25.5572 20C23.3475 22.44 20.3193 24 17.0048 24C13.6902 24 10.662 22.44 8.45233 20Z" fill={color}/>
    </svg>

  )
}
