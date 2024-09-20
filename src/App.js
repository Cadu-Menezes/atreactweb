import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Parte1 from './Pages/Parte1';
import Parte2 from './Pages/Parte2';
import Parte3 from './Pages/Parte3';
import CheckBoxAdmin from './Components/CheckBox'; 
import Paises from './Components/Paises';
import FormularioSimplesUseState from './Components/FormSimplesUseState';

const AdminLigado = () => {
    return <CheckBoxAdmin adminStatus={true} />;
};

const AdminDesligado = () => {
    return <CheckBoxAdmin adminStatus={false} />;
};

const PaisesBrasil = () => {
    return <Paises paisSelecionado={"Brazil"} />;
};

const FormSimples = () => {

    const dados = { nome: 'Cadu', email: 'carlos.alencar@al.infnet.edu.br', telefone: '(21) 983087792' };
    return <FormularioSimplesUseState dadosIniciais={dados}/>;

};

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Parte1 />} />
                <Route path="/parte2" element={<Parte2 />} />
                <Route path="/parte3" element={<Parte3 />} />
                <Route path="/adminLigado" element={<AdminLigado />} /> 
                <Route path="/adminDesligado" element={<AdminDesligado />} /> 
                <Route path="/paises" element={<PaisesBrasil />} /> 
                <Route path="/formSimples" element={<FormSimples />} /> 
            </Routes>
        </Router>
    );
}

export default App;
