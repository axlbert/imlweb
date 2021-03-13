import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

import BusinessIcon from '@material-ui/icons/Business';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import {
    Link
  } from "react-router-dom";

const navigation = [{name: 'Angebot anfragen', path: '/angebot', icon: <LocalOfferIcon/>},
                    {name: 'Artikelkennzeichnung', path: '/kennzeichnung', icon: <InboxIcon/>},
                    {name: 'Leistungsspektrum', path: '/prozesse', icon: <BusinessIcon/>},
                    {name: 'Qualitätssicherung', path: '/qualitaet', icon: <ImportContactsIcon/>},
                    {name: 'Gute Gründe', path: '/staerken', icon: <InboxIcon/>},
                    {name: 'Kontakt', path: '/kontakt', icon: <ContactPhoneIcon/>},
                    {name: 'Datenschutz', path: '/datenschutz', icon: <MailIcon/>},

                    ]

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navigation.map(el => (
          <Link key={el.name} to={el.path} style={{textDecoration: "none",color:"#363636"}}>
          <ListItem button>
            <ListItemIcon>{el.icon}</ListItemIcon>
            <ListItemText primary={el.name} />
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="hamburgerBtn" onClick={toggleDrawer(anchor, true)}><MenuIcon className="hamburger"/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}
