import React from 'react'
import Logo from '../comum/Logo'
import Area from '../comum/Area'
import Menu from './Menu'

const Cabecalho = () => {
  return (
    <Area className='bg-black fixed z-50'>
      <div className='flex items-center justify-between '>
      <Logo/>
      <Menu/>
      </div>
    </Area>
  )
}

export default Cabecalho
