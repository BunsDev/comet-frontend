import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
} from '@material-ui/core';
import ListItemLink from '../ListItemLink';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from './AccountButton';
import Banner from '../../assets/img/banner_transp.svg';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    color: '#fff',
    'background-color': '#000',
    // borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '10px',
    marginBottom: '3rem',
    zIndex: 2,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'wrap',
    ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
      justifyContent: 'space-between',
    }
  },
  toolbarTitle: {
    fontFamily: '"Amarante", cursive',
    fontSize: '30px',
    flexGrow: 1,
  },
  link: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: '14px',
    margin: theme.spacing(1, 2),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  brandLink: {
    textDecoration: 'none',
    color: '#fff',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Nav = () => {
  const matches = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <>
            <Grid style={{display:'flex', alignItems : 'center'}}>
            {/* <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}> */}
              {/* <a className={ classes.brandLink } href="/">Comet Finance</a> */}
              <Link to="/" color="inherit" className={classes.brandLink}>
                <img src={Banner} alt='Comet Finance Logo' width={230} height={60} style={{verticalAlign:'middle'}}/>
              </Link>
            {/* </Typography> */}
            <Box ml={3}>
              <Link color="textPrimary" to="/" className={classes.link}>
                Home
              </Link>
              <Link color="textPrimary" to="/farm" className={classes.link}>
                Asteroid Belt
              </Link>
              <Link color="textPrimary" to="/milkyway" className={classes.link}>
                Milkyway
              </Link>
              <Link color="textPrimary" to="/bond" className={classes.link}>
                Bond
              </Link>
              <a href="https://degenwhale.money" target="_blank" rel="noopener noreferrer" className={classes.link}>
                Vaults
              </a>
              {/* <Link color="textPrimary" to="/sbs" className={classes.link}>
                SBS
              </Link>
              <Link color="textPrimary" to="/liquidity" className={classes.link}>
                Liquidity
              </Link>
              <Link color="textPrimary" to="/regulations" className={classes.link}>
                Regulations
              </Link> */}
              <a href="https://comet-finance88.gitbook.io/untitled/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                Docs
              </a>
            </Box>
            </Grid>

            <AccountButton text="Connect" />
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <img src={Banner} alt='Comet Finance Logo' width={152} height={40} style={{verticalAlign:'middle'}}/>
            {/* <Typography variant="h6" noWrap>
              Comet Finance
            </Typography> */}

            <Drawer
              className={classes.drawer}
              onClose = {handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItemLink primary="Home" to="/" />
                <ListItemLink primary="Farm" to="/farm" />
                <ListItemLink primary="Milkyway" to="/milkyway" />
                <ListItemLink primary="Bond" to="/bond" />
                {/* <ListItemLink primary="SBS" to="/sbs" />
                <ListItemLink primary="Liquidity" to="/liquidity" />
                <ListItemLink primary="Regulations" to="/regulations" /> */}
                <ListItem button component="a" href="https://degenwhale.money">
                  <ListItemText>Vaults</ListItemText>
                </ListItem>
                <ListItem button component="a" href="https://comet-finance88.gitbook.io/untitled/">
                  <ListItemText>Docs</ListItemText>
                </ListItem>
                <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccountButton text="Connect" />
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
