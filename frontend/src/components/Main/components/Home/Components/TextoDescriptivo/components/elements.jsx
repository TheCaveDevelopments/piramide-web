import CheckIcon from '@mui/icons-material/Check';

export const elements = [
    {
    id: 0,
    title: 'DESARROLLO DE SOLUCIONES:',
    panel: "panel1",
    fixed: false,
    elements: [
        {id: 0, icon: <CheckIcon />, text: 'Soluciones genéricas.'},
        {id: 1, icon: <CheckIcon />, text: 'Desarrollos a medida.'},
        {id: 2, icon: <CheckIcon />, text: 'Integración de sistemas.'},
    ]},
    {
    id: 1,
    title: 'ASESORAMIENTO PROFESIONAL:',
    panel: "panel2",
    fixed: false,
    elements: [
        {id: 0, icon: <CheckIcon />, text: 'Informático.'},
        {id: 1, icon: <CheckIcon />, text: 'Tecnológico.'},
        {id: 2, icon: <CheckIcon />, text: 'Administrativo/contable.'},
    ]},
    {
    id: 2,
    title: 'ESPECIALES:',
    panel: "panel3",
    fixed: false,
    elements: [
        {id: 0, icon: <CheckIcon />, text: 'Auditorias.'},
        {id: 1, icon: <CheckIcon />, text: 'Investigación.'},
        {id: 2, icon: <CheckIcon />, text: 'Informática Forense.'},
    ]}
]