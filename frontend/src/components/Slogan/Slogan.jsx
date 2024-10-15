import { useMediaQuery } from 'react-responsive';
import './styles/slogan.scss'

export const Slogan = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
        <p className='slogan'>30 años brindando soluciones{ isMobile ? <br/> : ' ' }informáticas para el mercado</p>
  )
}
