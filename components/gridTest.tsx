import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={10}>
                <Grid item xs={4} className='bg-[#4400ff]'>
                    <Item>Graph 1</Item>
                </Grid>
                <Grid item xs={4} className='bg-[#2ea82e]'>
                    <Item>Graph 2</Item>
                </Grid>
                <Grid item xs={4} className='bg-[#e7853a]'>
                    <Item>Graph 3</Item>
                </Grid>
                <Grid item xs={12} className="bg-[#ff00b7] flex flex-row" >

                </Grid>
                <Grid item xs={8} className="bg-[red]">
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4} className="bg-[yellow]">
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4} className="bg-[green]">
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8} className="bg-[blue]">
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
