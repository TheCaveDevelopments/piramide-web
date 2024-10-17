import { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { navOptions } from '../variables';
import './styles/swipeableTemporaryDrawer.scss';
import { handleScroll } from '../../../../utilities';

const useStyles = makeStyles(() => ({
  menuIcon: {
    width: '2rem !important',
    height: '2rem !important',
  },
}));

export const SwipeableTemporaryDrawer = () => {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };


  const list = () => (
    <Box
      className="drawerContainer"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navOptions.map((option) => (
          <ListItem className='listItem' key={option.id} disablePadding>
            <ListItemButton
              component={'a'}
              to={option.path}
              onClick={(e) => handleScroll(e, option.path.substring(1))}
            >
              <ListItemText className='listItemText' primary={option.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon className={`${classes.menuIcon} menuIcon`} />
      </IconButton>
      <SwipeableDrawer
        anchor={'right'}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}