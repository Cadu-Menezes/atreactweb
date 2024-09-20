import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem } from '@mui/material';

// Questão 2.2: Dropdown de Países
const Paises = ({ paisSelecionado }) => {
    const [paises, setPaises] = useState([]);
    const [paisAtual, setPaisAtual] = useState(''); 

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {

                // console.log("paises retornados", data);
                setPaises(data);

                // Se tiver algo na prop, já seleciona por padrão.
                if (paisSelecionado) {
                    setPaisAtual(paisSelecionado);
                }

            });
    }, [paisSelecionado]);

    const handleChange = (event) => {
        setPaisAtual(event.target.value);
    };

    return (
        <Box sx={{ marginBottom: '16px' }}>
            
            <Typography>Selecione um país:</Typography>
            
            <Select value={paisAtual} onChange={handleChange} fullWidth>
                
                {paises.map((pais) => (
                    <MenuItem key={pais.cca3} value={pais.name.common}>
                        {pais.name.common}
                    </MenuItem>
                ))}

            </Select>

        </Box>
    );
};

export default Paises;
