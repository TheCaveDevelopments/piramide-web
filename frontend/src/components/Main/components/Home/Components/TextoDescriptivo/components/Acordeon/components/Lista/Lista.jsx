import './styles/lista.scss'
import { List } from "@mui/material"
import { IconItem } from "./components"

export const Lista = ({ 
    elements = [{id: 0, icon: '', text: 'lore ipsum'}]
 }) => {
  return (
    <List className="Lista">
        {elements.map((element) => (
            <IconItem key={element.id} icon={element.icon} text={element.text}/>
        ))} 
    </List>
  )
}
