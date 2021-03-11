import React from 'react';
import Grid from '@material-ui/core/Grid';

import firmenlogo from '../img/firmelogo.png';

import {
  Link
} from "react-router-dom";

export default function HeaderNav(props) {
  

  return (
    <div>
            <Grid style={{position: "absolute",top: "10px"}} container
                direction="row"
                justify="flex-start"
                alignItems="flex-start">

                    <img src={firmenlogo} alt="firmenlogo" style={{maxWidth:"200px",marginLeft: "10px"}} onClick={() => props.handleClick("cat1")}/>
                
                    
                    <Link to="/wizard" style={{textDecoration: "none"}}><span className="headerNav" >Angebot anfragen</span></Link>
                
                    
                    <Link to="/reasons" style={{textDecoration: "none"}}><span className="headerNav" >Gute Argumente</span></Link>
                
                
                    
                    <Link to="/contact" style={{textDecoration: "none"}}><span className="headerNav" >Kontakt</span></Link>
                
            </Grid>
    </div>
  );
}