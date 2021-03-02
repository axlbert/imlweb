import React from 'react';
import Grid from '@material-ui/core/Grid';

import { ReactTypeformEmbed } from 'react-typeform-embed';


export default function Wizard() {
  return (
    <>
            <Grid
                container
                direction="column"
              
                alignItems="center"
                
                
            >
                
            
         

            <ReactTypeformEmbed style={{top:"50px",height:"70vh"}} className="typeform" url="https://0ocv7asyzfi.typeform.com/to/sEoqMcEW" />;
                
           

            
            </Grid>
    </>
  );
}