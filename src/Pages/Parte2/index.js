import React from 'react';
import { Box,  Typography } from '@mui/material';

import CheckBoxAdmin from '../../Components/CheckBox';
import Paises from '../../Components/Paises';
import Produtos from '../../Components/Produtos';
import Categorias  from '../../Components/Categorias';

//Component Principal
const Parte2 = () => {
    return (
        <Box sx={{ padding: '16px' }}>
            <Typography variant="h4">Parte 2: Desenvolver componentes usando React Hooks</Typography>
            <CheckBoxAdmin adminStatus={false}/>
            <Paises />
            <Produtos />
            <Categorias />
        </Box>
    );
};

export default Parte2;
