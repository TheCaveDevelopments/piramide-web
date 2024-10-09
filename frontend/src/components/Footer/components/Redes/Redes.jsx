import "./styles/redes.scss";
import { CollapseButton } from "../";
import { Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Redes = ({ display }) => {

  return (
    <Stack 
    direction={ display == 'mobile' || display == 'tablet' ? "column" : "row" } 
    className="Stack-redes" 
    alignItems={display == 'mobile' ? 'center' : 'start'}>
      <CollapseButton
        href="https://www.instagram.com/piramidesoft/"
        icon={<InstagramIcon className="Icon" />}
        text="/piramidesoft"
        iconPos="left"
        collapsed={ display == 'mobile' || display == 'tablet' }
        timeout={1000}
      />
      <CollapseButton
        href="https://www.facebook.com/piramidesoft"
        icon={<FacebookIcon className="Icon" />}
        text="/piramidesoft"
        iconPos="left"
        collapsed={ display == 'mobile' || display == 'tablet' }
        timeout={1000}
      />
    </Stack>
  );
};
