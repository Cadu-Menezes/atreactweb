import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';

//Questão 3.4 - Formulário com Validação e react-hook-form
const FormularioValidacaoHookForm = () => {
  
    const { register, handleSubmit, formState: { errors } } = useForm();
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
                    {...register('nome', { required: 'Nome é obrigatório' })}
                    fullWidth
                    margin="normal"
                    error={!!errors.nome}
                    helperText={errors.nome?.message}
                />

                <TextField
                    label="Email"
                    {...register('email', { required: 'Email é obrigatório' })}
                    fullWidth
                    margin="normal"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <TextField
                    label="Telefone"
                    {...register('telefone')}
                    fullWidth
                    margin="normal"
                    error={!!errors.telefone}
                    helperText={errors.telefone?.message}
                />

                <Button type="submit" variant="contained" color="primary">
                    Enviar
                </Button>
            </form>

            {dadosEnviados && <pre>{JSON.stringify(dadosEnviados, null, 2)}</pre>}
        
        </Box>
    );
};

export default FormularioValidacaoHookForm;