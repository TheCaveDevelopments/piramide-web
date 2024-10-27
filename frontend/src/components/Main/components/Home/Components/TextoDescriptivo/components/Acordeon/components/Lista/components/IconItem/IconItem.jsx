import { ListItem, ListItemIcon, ListItemText } from "@mui/material"
import './styles/iconItem.scss'

export const IconItem = ({
    icon = '',
    text = 'lore ipsum'
}) => {
  return (
    <ListItem className="item">
      <ListItemIcon className="icon">
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} className="text" />
    </ListItem>
  )
}
