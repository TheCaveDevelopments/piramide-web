import { Box } from '@mui/material'
import { ContactForm } from './components'
import './styles/contact.scss'

export const Contact = () => {
  return (
   <Box variant='section' className='contactSection'>
        <ContactForm />
   </Box>
  )
}
