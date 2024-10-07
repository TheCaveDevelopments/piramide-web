import { Box } from "@mui/material"
import './styles/logo.scss'
export const Logo = ({ source = "logo.ico" }) => {
    return (
        <Box className="logoContainer">
            <img src={source} alt="Logo" />
        </Box>
    )
}

Logo.propTypes = {
    source: function(props, propName, componentName) {
        if (!/^[\w,\s-]+\.[A-Za-z]{3}$/.test(props[propName])) {
            return new Error(
                `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`
            );
        }
    }
}
