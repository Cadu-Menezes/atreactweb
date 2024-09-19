// src/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    AT React Web
                </Typography>
                <Button component={Link} to="/" color="inherit">Parte 1</Button>
                <Button component={Link} to="/parte2" color="inherit">Parte 2</Button>
                <Button component={Link} to="/parte3" color="inherit">Parte 3</Button>
                <Button component={Link} to="/parte4" color="inherit">Parte 4</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
