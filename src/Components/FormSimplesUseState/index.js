import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

// Questão 3.1 - Formulário com useState
const FormularioSimplesUseState = ({ dadosIniciais }) => {
    
    const [dadosEnviados, setDadosEnviados] = useState(null);
    const [nome, setNome] = useState(dadosIniciais?.nome || '');
    const [email, setEmail] = useState(dadosIniciais?.email || '');
    const [telefone, setTelefone] = useState(dadosIniciais?.telefone || '');

    const handleSubmit = () => {
        const dados = { nome, email, telefone };
        setDadosEnviados(dados); 
    };

    return (
        <Box sx={{ padding: '16px' }}>
            <Typography variant="h5" gutterBottom>
                Questão 3.1: Formulário Simples
            </Typography>

            <form>
                <TextField
                    label="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    fullWidth
                    margin="normal"
                />

                <Button type="button" variant="contained" color="primary" onClick={handleSubmit}>
                    Enviar
                </Button>
            </form>

            {dadosEnviados && <pre>{JSON.stringify(dadosEnviados, null, 2)}</pre>}
        </Box>
    );
};

export default FormularioSimplesUseState;
