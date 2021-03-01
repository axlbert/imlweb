import React from 'react';
import Grid from '@material-ui/core/Grid';

import { ReactTypeformEmbed } from 'react-typeform-embed';


const machines = ['Montage','Drehen/Fräsen','Druck/Beschriftung','Spritzguss']

export default function Wizard() {
  return (
    <>
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
            >
                
            
         

            <ReactTypeformEmbed url="https://0ocv7asyzfi.typeform.com/to/sEoqMcEW" />;
                
           

            
            </Grid>
    </>
  );
}