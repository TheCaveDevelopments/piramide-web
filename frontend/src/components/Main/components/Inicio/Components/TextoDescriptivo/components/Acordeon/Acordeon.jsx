import './styles/acordeon.scss'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Lista } from "./components"

export const Acordeon = ({
    expanded,
    handleChange,
    elements,
    title = 'Título',
    panel = '1'
}) => {



  return (
      <Accordion
            className="acordeon"
            expanded={expanded === `panel ${panel}`}
            onChange={() => handleChange(`panel ${panel}`)}
            elevation={0}
      >
        <AccordionSummary 
            className="label"
            aria-controls={`panel${panel}d-content`} 
            id={`panel${panel}d-header`} 
            expandIcon={<ArrowForwardIosSharpIcon />}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails
            className="content"
        >
            <Lista elements={elements}/>
        </AccordionDetails>
      </Accordion>
  )
}
