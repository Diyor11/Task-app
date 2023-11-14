import React from 'react'
import {Header, Footer} from "../"

export default function MainLayout({children}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
