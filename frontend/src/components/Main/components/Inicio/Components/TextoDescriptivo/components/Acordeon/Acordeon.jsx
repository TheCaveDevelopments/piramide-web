import { Accordion, AccordionDetails, AccordionSummary } from "./components/config"
import { Typography } from "@mui/material"
import { Lista } from "./components"
import './styles/acordeon.scss'

export const Acordeon = ({
    expanded,
    handleChange,
    elements,
    title = 'Título',
    panel = 'panel1',
    fixed = false
}) => {

  return (
      <Accordion
            className={`acordeon`}
            expanded={expanded === panel}
            onChange={() => handleChange(panel)}
            slotProps={{ transition: { timeout: 1000 } }}
      >
        <AccordionSummary 
            className={`label ${fixed ? 'fixed' : ''}`}
            aria-controls={`${panel}d-content`} 
            id={`${panel}d-header`}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails
            className={`content ${fixed ? 'fixed' : ''}`}
        >
            <Lista elements={elements}/>
        </AccordionDetails>
      </Accordion>
  )
}