import React, { useState } from 'react';
import { TextField, Button,  Typography, Box } from '@mui/material';


//Questão 3.2 - Formulário com Validação e useState
const FormularioValidacaoUseState = () => {
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dadosEnviados, setDadosEnviados] = useState(null);
    const [erros, setErros] = useState({});

    
    const handleSubmit = () => {
        
        const errosEncontrados = {};

        if (!nome) {
            errosEncontrados.nome = 'Nome é obrigatório';
        }

        if (!email) {
            errosEncontrados.email = 'Email é obrigatório';
        }

        if (telefone && isNaN(telefone)) {
            errosEncontrados.telefone = 'Telefone deve ser numérico';
        }

        // Se houver erros, atualiza o estado de erros
        if (Object.keys(errosEncontrados).length > 0) {
            setErros(errosEncontrados);
        } else {
            // Se não houver erros, armazena os dados
            const dados = { nome, email, telefone };
            setDadosEnviados(dados);
            setErros({}); 
        }
    };

    return (
        <Box sx={{ padding: '16px' }}>
            
            <Typography variant="h5" gutterBottom>
                Questão 3.2: Formulário com Validação
            </Typography>

            <form>
                <TextField
                    label="Nome"
                    fullWidth
                    margin="normal"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    error={!!erros.nome}
                    helperText={erros.nome}
                />

                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!erros.email}
                    helperText={erros.email}
                />

                <TextField
                    label="Telefone"
                    fullWidth
                    margin="normal"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    error={!!erros.telefone}
                    helperText={erros.telefone}
                />

                <Button type="button" variant="contained" color="primary" onClick={handleSubmit}>
                    Enviar
                </Button>

            </form>

            {dadosEnviados && <pre>{JSON.stringify(dadosEnviados, null, 2)}</pre>}

        </Box>

    );
};

export default FormularioValidacaoUseState;