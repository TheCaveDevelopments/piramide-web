import { useEffect, useState } from "react";
import { Acordeon } from './components';
import { Stack } from "@mui/material";
import { elements } from './components/elements';

const siguientePanel = (panel) => {
  let forwardIndex = elements.findIndex(element => element.panel === panel) + 1;
  return elements.length > forwardIndex ? elements[forwardIndex].panel : elements[0].panel;
}

export const TextoDescriptivo = () => {

  const [expanded, setExpanded] = useState(elements[0].panel);
  
  const [fixed, setFixed] = useState(false);
  
  const handleChange = (panel) => {
      if (!fixed) {
        setExpanded(panel);
        setFixed(true);
      } else if (panel !== expanded) {
        setExpanded(panel);
      } else {
        setExpanded(siguientePanel(panel));
        setFixed(false);
      }
    };

  useEffect(() => {
    const interval = setInterval(() => {
      !fixed && setExpanded(siguientePanel(expanded));
    }, 3000);

    return () => clearInterval(interval);
}, [expanded, fixed]);

  return (
    <Stack width={'50%'}>
      {elements.map((element) => (
        <Acordeon key={element.id} title={element.title} panel={element.panel} elements={element.elements} expanded={expanded} handleChange={handleChange}/>
      ))}
    </Stack>
  );
};