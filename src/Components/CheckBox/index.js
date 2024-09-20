import React, { useState, useEffect } from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';

// Questão 2.1: Checkbox de Administrador
const CheckBoxAdmin = ({ adminStatus }) => {

    const [isAdmin, setIsAdmin] = useState(adminStatus);

    // Atualiza o estado se a prop mudar
    useEffect(() => {
        setIsAdmin(adminStatus);
    }, [adminStatus]);

    return (
        
        <Box sx={{ marginBottom: '16px' }}>

            <FormControlLabel
                control={<Checkbox checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />}
                label="Administrador"
            />
        
            <Typography>
                O usuário atual é {isAdmin ? 'Administrador' : 'Colaborador'}
            </Typography>
        
        </Box>
    );
};

export default CheckBoxAdmin;