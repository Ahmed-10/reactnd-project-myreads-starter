import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import emptyResult from '../icons/undraw_empty_re_opql.svg'

const EmptyResult = () => {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item>
                <Typography variant="h5" gutterBottom color='textSecondary'>
                    No results found
                </Typography>
            </Grid>
            <Grid item xs={12}><Box p={3} /></Grid>
            <Grid item xs={5}>
                <img src={emptyResult} alt="empty result" width="100%"/>
            </Grid>
        </Grid>
    );
}
 
export default EmptyResult;