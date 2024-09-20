import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem } from '@mui/material';

// Questão 2.4: Lista de Categorias
const Categorias = () => {

    const [refeicoes, setRefeicoes] = useState([]);
    const [refeicaoSelecionada, setRefeicaoSelecionada] = useState('');

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((response) => response.json())
            .then((data) => setRefeicoes(data.categories));

           // console.log("Resposta: ", refeicoes)
    }, []);

    const handleChange = (event) => {
        setRefeicaoSelecionada(event.target.value);
    };

    const dadosRefeicaoSelecionada = refeicoes.find(refeicao => refeicao.strCategory === refeicaoSelecionada);

    return (
        <Box>
            
            <Typography>Selecione uma categoria de prato:</Typography>
            
            <Select fullWidth value={refeicaoSelecionada} onChange={handleChange}>
                {refeicoes.map((refeicao) => (
                    <MenuItem key={refeicao.strCategory} value={refeicao.strCategory}>
                        {refeicao.strCategory}
                    </MenuItem>
                ))}
            </Select>
            
            {dadosRefeicaoSelecionada && (
                <Box sx={{ marginTop: '16px' }}>
                    <Typography>{dadosRefeicaoSelecionada.strCategoryDescription}</Typography>
                    <img src={dadosRefeicaoSelecionada.strCategoryThumb} alt={dadosRefeicaoSelecionada.strCategory} style={{ width: '50%' }} />
                </Box>
            )}
        </Box>
    );
};

export default Categorias;