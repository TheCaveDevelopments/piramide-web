import { useEffect, useState } from "react";
import { Acordeon } from './components';
import { Stack } from "@mui/material";
import { elements } from './components/elements';
import './styles/textoDescriptivo.scss';

const siguientePanel = (panel) => {
  let forwardIndex = elements.findIndex(element => element.panel === panel) + 1;
  return elements.length > forwardIndex ? elements[forwardIndex].panel : elements[0].panel;
}

export const TextoDescriptivo = ({ isMobile }) => {

  const [expanded, setExpanded] = useState(elements[0].panel);
  
  const [fixed, setFixed] = useState(false);
  
  const handleChange = (panel) => {
      if (!fixed) {
        setExpanded(panel);
        setFixed(true);
        elements[elements.findIndex(element => element.panel === panel)].fixed = true;
      } else if (panel !== expanded) {
        elements[elements.findIndex(element => element.panel === expanded)].fixed = false;
        setExpanded(panel);
        elements[elements.findIndex(element => element.panel === panel)].fixed = true;
      } else {
        setExpanded(siguientePanel(panel));
        setFixed(false);
        elements[elements.findIndex(element => element.panel === panel)].fixed = false;
      }
    };

  useEffect(() => {
    const interval = setInterval(() => {
      !fixed && setExpanded(siguientePanel(expanded));
    }, 3000);

    return () => clearInterval(interval);
}, [expanded, fixed]);

  return (
    <Stack width={isMobile ? '100%' : '50%'}>
      {elements.map((element) => (
        <Acordeon 
          key={element.id} 
          title={element.title} 
          panel={element.panel} 
          elements={element.elements} 
          expanded={expanded} 
          handleChange={handleChange} 
          fixed={element.fixed}/>
      ))}
    </Stack>
  );
};