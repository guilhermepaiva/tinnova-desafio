import './App.css';
import React, { useState, useEffect } from 'react';
import VeiculoList from './components/VeiculoList';
import Form from './components/Form';

function App() {

  const [veiculos, setVeiculos] = useState([]);
  const [veiculoEditado, setVeiculoEditado] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/veiculos', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setVeiculos(resp))
    .catch(error => console.log(error))
  }, [])

  const editarVeiculo = (veiculo) => {
    setVeiculoEditado(veiculo)
  }

  const updatedVeiculo = (veiculo) => {
    const novo_veiculo = veiculos.map(meu_veiculo => {
      if (meu_veiculo.id === veiculo.id){
        return veiculo
      } else {
        return meu_veiculo
      }
    })
    setVeiculos(novo_veiculo)
  }


  const openForm = () => {
    setVeiculoEditado({veiculo: '', marca: '', ano: '', descricao: ''})
  }

  const veiculoInserido = (veiculo) => {
    console.log(veiculo)
    const novos_veiculos = [...veiculos, veiculo]
    setVeiculos(novos_veiculos)
  }


  return (
    <div className="App">
      <div class="jumbotron text-center">
        <h1>Desafio Tinnova</h1>
      </div>

      <div class="container"> 
        <div class="row">
          <br />
          <div class="row">
          <h2 class="col">Lista de Veículos</h2>

          <div className="col">
          <button 
            className="btn btn-success"
            onClick={openForm}
          >Inserir Veículo</button>
          </div>
          {veiculoEditado ? <Form veiculo = {veiculoEditado} updatedVeiculo = {updatedVeiculo} veiculoInserido = {veiculoInserido} /> : null }
          </div>
          

          <hr />
          <hr />

          <VeiculoList veiculos = {veiculos} editarVeiculo = {editarVeiculo} />

          
          
        </div>
        <div class="row">
        <h2>Dashboard</h2>
          <div class="col-sm-4">
          
          </div>
          <div class="col-sm-4">

          </div>
          <div class="col-sm-4">

          </div>
          <div class="col-sm-4"></div>
          
          </div>
        </div>
    </div>

  );
}

export default App;
