import React  from 'react';
import Grid from '@material-ui/core/Grid';

import BusinessIcon from '@material-ui/icons/Business';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import {
    Link
  } from "react-router-dom";
  

export default function BottomNav(props) {

  return (
    <>
            <Grid  container
                direction="row"
                justify="space-around"
                alignItems="center"
                className="bottomNav">
                <Grid 
                    container
                    item
                    direction="column"
                    justify="space-around"
                    alignItems="center" 
                    xs={6}
                    sm={3}
                >
                        <Link to="/prozesse" className="centerHelp">
                            <BusinessIcon fontSize="large" className="iconDefault" />
                            <span className="navText">Leistungsspektrum</span>
                        </Link>
                    
                    
                </Grid>
                <Grid 
                    container
                    item
                    direction="column"
                    justify="space-around"
                    alignItems="center" 
                    xs={6}
                    sm={3}
                >
                    <Link to="/angebot" className="centerHelp">
                        <LocalOfferIcon fontSize="large" className="iconDefault" />
                        <span className="navText">Angebot anfragen</span>
                    </Link>
                </Grid>
                <Grid 
                    container
                    item
                    direction="column"
                    justify="space-around"
                    alignItems="center" 
                    xs={6}
                    sm={3}
                >

                    <Link to="/qualitaet" className="centerHelp">
                        <ImportContactsIcon fontSize="large" className="iconDefault"  />
                    
                    <span className="navText">Qualitätssicherung</span>
                    </Link>
                </Grid>
                <Grid 
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center" 
                    xs={6}
                    sm={3}
                >
                    <Link to="/kontakt" className="centerHelp">
                    <ContactPhoneIcon fontSize="large" className="iconDefault" />
                    <span className="navText">Kontakt & Impressum</span>
                    </Link>
                </Grid>
                <Link to="/datenschutz">
                <span className="policySpacer">Datenschutz</span>
                </Link>
            </Grid>
    </>
  );
}