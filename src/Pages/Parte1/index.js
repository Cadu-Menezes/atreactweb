// src/Parte1.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import PerguntaResposta from '../../Components/perguntaResposta';

const Parte1 = () => {

    const tratarEvento = () => {
        alert('Evento Tratado!');
    }

    return (
        <Box sx={{ padding: '16px' }}>
            
            <Typography variant="h4" sx={{ marginBottom: '16px' }}>
                Parte 1: Respostas a Eventos
            </Typography>

            <PerguntaResposta 
                pergunta="Quais são as desvantagens de implementar um inline event?"
                resposta="Inline events podem dificultar a manutenção do código, pois misturam a lógica de JavaScript com a estrutura HTML. Isso pode levar a um código mais difícil de ler e a uma menor reutilização."
            />

            <Box sx={{ textAlign: 'center', marginTop: '32px' }}>
                
                <Typography variant="h6">Exemplo de Evento Inline</Typography>
                
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => alert('Botão clicado!')}
                >
                    Clique Aqui
                </Button>
            
            </Box>

            <Box sx={{ textAlign: 'center', marginTop: '16px' }}>
                
                <Typography variant="h6">Exemplo de Função de Tratamento de Evento</Typography>
                
                <Button variant="contained" color="info" onClick={tratarEvento}>
                    Clique Aqui
                </Button>
            
            </Box>
        </Box>
    );
};

export default Parte1;
