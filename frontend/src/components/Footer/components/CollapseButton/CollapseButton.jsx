import './styles/collapseButton.scss'
import { useState } from 'react';
import { handleMouseEnter, handleMouseLeave } from '../Hellpers/handleMouse';
import { Button, Collapse } from '@mui/material';

export const CollapseButton = ({
  href = "/",
  icon = "",
  text = "Button",
  iconPos = "left",
  collapsed = false,
  timeout = 1000,
}) => {

    const [hovered, setHovered] = useState(false);

  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener"
      className="Button"
      onMouseEnter={() => handleMouseEnter(setHovered)}
      onMouseLeave={() => handleMouseLeave(setHovered)}
    >
      {iconPos == "left" && icon}
      <Collapse
        in={collapsed || hovered}
        orientation="horizontal"
        className="Collapse"
        timeout={timeout}
      >
        <p>{text}</p>
      </Collapse>
      {iconPos == "right" && icon}
    </Button>
  );
};
