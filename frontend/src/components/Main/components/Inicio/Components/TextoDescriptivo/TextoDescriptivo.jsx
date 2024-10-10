import CheckIcon from '@mui/icons-material/Check';
import { Acordeon } from './components';
import { Stack } from "@mui/material";
import { useState } from "react";

export const TextoDescriptivo = () => {

    const elements = [
        {
        id: 0,
        title: 'DESARROLLO DE SOLUCIONES:',
        panel: "1",
        elements: [
            {id: 0, icon: <CheckIcon />, text: 'Soluciones genéricas.'},
            {id: 1, icon: <CheckIcon />, text: 'Desarrollos a medida.'},
            {id: 2, icon: <CheckIcon />, text: 'Integración de sistemas.'},
        ]},
        {
        id: 1,
        title: 'ASESORAMIENTO PROFESIONAL:',
        panel: "2",
        elements: [
            {id: 0, icon: <CheckIcon />, text: 'Asesoramiento Informático.'},
            {id: 1, icon: <CheckIcon />, text: 'Asesoramiento Tecnológico.'},
            {id: 2, icon: <CheckIcon />, text: 'Asesoramiento Administrativo/contable.'},
        ]},
        {
        id: 2,
        title: 'ESPECIALES:',
        panel: "3",
        elements: [
            {id: 0, icon: <CheckIcon />, text: 'Auditorias.'},
            {id: 1, icon: <CheckIcon />, text: 'Investigación.'},
            {id: 2, icon: <CheckIcon />, text: 'Informática Forense.'},
        ]}
    ]

    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => {
    setExpanded(panel !== expanded ? panel : false);
    };

  return (
    <Stack width={'50%'}>
      {elements.map((element) => (
        <Acordeon key={element.id} title={element.title} panel={element.panel} elements={element.elements} expanded={expanded} handleChange={handleChange}/>
      ))}
    </Stack>

  );
};