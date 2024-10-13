import React from 'react'

export const Titulo = ({ isMobile }) => {
  return (
    <img src={isMobile ? 'public/1.svg' : 'public/5.svg'} width={isMobile ? '100%' : '75%'} height={isMobile ? '25%' : '30%'}/>
  )
}
