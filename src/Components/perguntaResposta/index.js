// src/PerguntaResposta.js
import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const PerguntaResposta = ({ pergunta, resposta }) => {
    
    const [mostrarResposta, setMostrarResposta] = useState(false);

    const mostraResposta = () => {
        setMostrarResposta(!mostrarResposta);
    };

    return (
        <Box sx={{ border: '1px solid #ccc', borderRadius: '4px', padding: '16px', margin: '16px', textAlign: 'center' }}>
            <Typography variant="h6">{pergunta}</Typography>
            <Button variant="contained" color="primary" onClick={mostraResposta}>
                {mostrarResposta ? 'Ocultar Resposta' : 'Mostrar Resposta'}
            </Button>
            {mostrarResposta && (
                <Box sx={{ marginTop: '16px', border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}>
                    <Typography variant="body1">{resposta}</Typography>
                </Box>
            )}
        </Box>
    );
};

export default PerguntaResposta;
