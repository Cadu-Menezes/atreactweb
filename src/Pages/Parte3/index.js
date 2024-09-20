import React from 'react';
import { Container, Typography } from '@mui/material';
import FormularioSimplesUseState from '../../Components/FormSimplesUseState';
import FormularioValidacaoUseState from '../../Components/FormularioValidacaoUseState';
import FormularioSimplesHookForm from '../../Components/FormularioSimplesHookForm';
import FormularioValidacaoHookForm from '../../Components/FormularioValidacaoHookForm';

const Parte3 = () => {
  return (
    <Container>
      
      <Typography variant="h4" gutterBottom>
        Parte 3: Criar formulários web usando componentes ReactJS
      </Typography>

      <FormularioSimplesUseState />
      <hr />

      <FormularioValidacaoUseState />
      <hr />

      <FormularioSimplesHookForm />
      <hr />

      <FormularioValidacaoHookForm />
      <hr />

    </Container>
  );
};

export default Parte3;
