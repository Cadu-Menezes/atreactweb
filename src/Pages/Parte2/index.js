// src/Parte2.js
import React, { useState, useEffect } from 'react';
import { Box, Checkbox, FormControlLabel, Typography, Select, MenuItem, TextField } from '@mui/material';
import { faker } from '@faker-js/faker';

const Parte2 = () => {
    return (
        <Box sx={{ padding: '16px' }}>
            <Typography variant="h4">Parte 2: Desenvolver componentes usando React Hooks</Typography>
            <CheckboxAdministrador />
            <DropdownPaises />
            <FiltroProdutos />
            <CategoriasDePratos />
        </Box>
    );
};

// Questão 2.1: Checkbox de Administrador
const CheckboxAdministrador = () => {
    
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <Box sx={{ marginBottom: '16px' }}>
    
            <FormControlLabel
                control={<Checkbox checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} />}
                label="Administrador"
            />
    
            <Typography>
                O usuário atual é {isAdmin ? 'Administrador' : 'Colaborador'}
            </Typography>
    
        </Box>
    );
};

// Questão 2.2: Dropdown de Países
const DropdownPaises = () => {
    
    const [paises, setPaises] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setPaises(data));
    }, []);

    return (
        <Box sx={{ marginBottom: '16px' }}>
            
            <Typography>Selecione um país:</Typography>
            
            <Select fullWidth>
                {paises.map((pais) => (
                    <MenuItem key={pais.cca3} value={pais.name.common}>
                        {pais.name.common}
                    </MenuItem>
                ))}
            </Select>

        </Box>
    );
};

// Questão 2.3: Filtro de Produtos
const FiltroProdutos = () => {
    
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



const CategoriasDePratos = () => {
    const [refeições, setRefeições] = useState([]);
    const [refeicaoSelecionada, setRefeicaoSelecionada] = useState('');

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((response) => response.json())
            .then((data) => setRefeições(data.categories));
    }, []);

    const handleChange = (event) => {
        setRefeicaoSelecionada(event.target.value);
    };

    const dadosRefeicaoSelecionada = refeições.find(refeicao => refeicao.strCategory === refeicaoSelecionada);

    return (
        <Box>
            
            <Typography>Selecione uma categoria de prato:</Typography>
            
            <Select fullWidth value={refeicaoSelecionada} onChange={handleChange}>
                {refeições.map((refeicao) => (
                    <MenuItem key={refeicao.strCategory} value={refeicao.strCategory}>
                        {refeicao.strCategory}
                    </MenuItem>
                ))}
            </Select>
            
            {dadosRefeicaoSelecionada && (
                <Box sx={{ marginTop: '16px' }}>
                    <Typography>{dadosRefeicaoSelecionada.strCategoryDescription}</Typography>
                    <img src={dadosRefeicaoSelecionada.strCategoryThumb} alt={dadosRefeicaoSelecionada.strCategory} style={{ width: '100%' }} />
                </Box>
            )}
        </Box>
    );
};


export default Parte2;
