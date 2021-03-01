import React  from 'react';
import Grid from '@material-ui/core/Grid';

import BusinessIcon from '@material-ui/icons/Business';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';



export default function BottomNav(props) {

  return (
    <>
            <Grid style={{position: "absolute",bottom: "30px"}} container
                direction="row"
                justify="space-around"
                alignItems="center">
                <Grid 
                    container
                    item
                    direction="column"
                    justify="space-around"
                    alignItems="center" 
                    xs={6}
                    sm={3}
                >
                        <BusinessIcon fontSize="large" className="iconDefault"  onClick={() => props.handleClick("cat3")}  />
                        <span className="navText">Leistungsspektrum</span>
                    
                    
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
                    <LocalOfferIcon fontSize="large" className="iconDefault" onClick={() => props.handleClick("cat2")}  />
                    <span className="navText">Angebot anfragen</span>
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
                    <ImportContactsIcon fontSize="large" className="iconDefault" onClick={() => props.handleClick("cat4")} />
                    
                    <span className="navText">Qualitätssicherung</span>
                </Grid>
                <Grid 
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center" 
                    xs={6}
                    sm={3}
                >
                    <ContactPhoneIcon fontSize="large" className="iconDefault" onClick={() => props.handleClick("cat5")}/>
                    <span className="navText">Kontakt & Impressum</span>
                </Grid>
                <span className="policySpacer" onClick={() => props.handleClick("cat8")}>Datenschutz</span>
            </Grid>
    </>
  );
}