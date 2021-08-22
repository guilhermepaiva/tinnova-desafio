import React, { useState, useEffect } from "react";
import APIService from "./APIService";

function Form(props){

    const [veiculo, setVeiculo] = useState('')
    const [marca, setMarca] = useState('')
    const [ano, setAno] = useState('')
    const [descricao, setDescricao] = useState('')

    useEffect(() => {
        setVeiculo(props.veiculo.veiculo)
        setMarca(props.veiculo.marca)
        setAno(props.veiculo.ano)
        setDescricao(props.veiculo.descricao)
    }, [props.veiculo])

    const updateVeiculo = () => {
        APIService.UpdateVeiculo(props.veiculo.id, {veiculo, marca, ano, descricao})
        .then(resp => props.updatedVeiculo(resp))
        .catch(error => console.log(error))
    }

    const inserirVeiculo = () => {
        APIService.InserirVeiculo({veiculo, marca, ano, descricao})
        .then(resp => props.veiculoInserido(resp))
        .catch(error => console.log(error))
    }

    return (
        <div>
            {props.veiculo ? (

                <div className="mb-3">
                <label htmlFor="veiculo" className="form-label">Veículo</label>
                <input type="text" className="form-control"
                        value={veiculo}
                        placeholder="Coloque o veículo"
                        onChange={(e) => setVeiculo(e.target.value)}
                />

                <label htmlFor="marca" className="form-label">Marca</label> 
                <select value={marca} onChange={(e) => setMarca(e.target.value)}
                className="form-control">
                    <option value="Ford">Ford</option>
                    <option value="FIAT">FIAT</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="BMW">BMW</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Citroën">Citroën</option>
                    <option value="Audi">Audi</option>
                </select>

                <label htmlFor="ano" className="form-label">Ano</label>
                <input type="text" className="form-control"
                        value={ano}
                        placeholder="Coloque o ano do veículo"
                        onChange={(e) => setAno(e.target.value)}
                />

                <label htmlFor="descricao" className="form-label">Descrição</label>
                <textarea rows="5" className="form-control"
                        value={descricao}
                        placeholder="Descrição do veículo"
                        onChange={(e) => setDescricao(e.target.value)}
                />
                {
                    props.veiculo.id ? 

                        <button 
                            className="btn btn-success"
                            onClick={updateVeiculo}>
                            Atualizar</button>

                    :

                    <button className="btn btn-success"
                            onClick={inserirVeiculo}
                        >Salvar
                        </button>    
                }
                </div>
            ): null}
        </div>
    )

}

export default Form