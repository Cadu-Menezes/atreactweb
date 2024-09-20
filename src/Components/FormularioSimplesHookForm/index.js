import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';

//Questão 3.3 - Formulário Simples com react-hook-form
const FormularioSimplesHookForm = () => {
    const { register, handleSubmit } = useForm();
    const [dadosEnviados, setDadosEnviados] = React.useState(null);

    const onSubmit = (dados) => {
        setDadosEnviados(dados);
    };

    return (
        <Box sx={{ padding: '16px' }}>
            <Typography variant="h5" gutterBottom>
                Questão 3.1: Formulário Simples com react-hook-form
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Nome"
                    {...register('nome')}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Email"
                    {...register('email')}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Telefone"
                    {...register('telefone')}
                    fullWidth
                    margin="normal"
                />

                <Button type="submit" variant="contained" color="primary">
                    Enviar
                </Button>
            </form>

            {dadosEnviados && <pre>{JSON.stringify(dadosEnviados, null, 2)}</pre>}
        </Box>
    );
};

export default FormularioSimplesHookForm;