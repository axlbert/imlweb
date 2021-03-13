import React from 'react';
import Grid from '@material-ui/core/Grid';

import firmenlogo from '../img/firmelogo.png';

import {
  Link
} from "react-router-dom";

export default function HeaderNav(props) {
  

  return (
    <div>
            <Grid style={{position: "absolute",paddingTop: "10px"}} container
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                    <Link to="/" style={{textDecoration: "none"}}>
                    <img src={firmenlogo} alt="firmenlogo" style={{maxWidth:"200px",marginLeft: "10px"}} />
                    </Link>
                
                    <Link to="/kennzeichnung" style={{textDecoration: "none"}}><span className="headerNav" >Artikelkennzeichnung</span></Link>
                
                    <Link to="/angebot" style={{textDecoration: "none"}}><span className="headerNav" >Angebot anfragen</span></Link>

                    
                    <Link to="/staerken" style={{textDecoration: "none"}}><span className="headerNav" >Gute Argumente</span></Link>
                
                
                    
                    <Link to="/kontakt" style={{textDecoration: "none"}}><span className="headerNav" >Kontakt</span></Link>
                
            </Grid>
    </div>
  );
}