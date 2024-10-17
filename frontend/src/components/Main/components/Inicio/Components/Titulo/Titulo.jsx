import React from 'react'

export const Titulo = ({ isMobile }) => {
  return (
    <img src={isMobile ? '1.svg' : '5.svg'} width={isMobile ? '100%' : '75%'} height={isMobile ? '25%' : '30%'}/>
  )
}
