import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { faker } from '@faker-js/faker';


// Questão 2.3: Filtro de Produtos
const Produtos = () => {
    
    const [valorInput, setValorInput] = useState('');
    const [produtos] = useState(Array.from({ length: 100 }, () => faker.commerce.productName())); 
    const [produtosFiltrados, setProdutosFiltrados] = useState(produtos); 

    //filtro os produtos sempre que o valor do input mudar
    useEffect(() => {
        setProdutosFiltrados(
            produtos.filter((produto) =>
                produto.toLowerCase().startsWith(valorInput.toLowerCase())
            )
        );
    }, [valorInput, produtos]); // Executa quando valor do Input ou produtos mudam

    return (
        <Box>
            
            <Typography>Filtre produtos:</Typography>
            
            <TextField
                fullWidth
                label="Digite o nome do produto"
                value={valorInput}
                onChange={(e) => setValorInput(e.target.value)}
            />

            <ul>
                {produtosFiltrados.map((produto, index) => (
                    <li key={index}>{produto}</li>
                ))}
            </ul>

        </Box>
    );
};

export default Produtos;