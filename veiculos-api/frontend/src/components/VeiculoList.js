import React from 'react'

function VeiculoList(props) {

    const editarVeiculo = (veiculo) => {
        props.editarVeiculo(veiculo)
    }

    return (
        <div>
           {props.veiculos && props.veiculos.map(veiculo => {
               return (
                   <div key={veiculo.id}>
                    <h4>Veículo: {veiculo.veiculo}</h4>
                    <p>Marca: {veiculo.marca}</p>
                    <p>Ano: {veiculo.ano}</p>
                    <p>Descrição: {veiculo.descricao}</p>

                    <div className="row">
                        <div className="col-md-1">
                            <button className="btn btn-primary" onClick={() => editarVeiculo(veiculo)}>
                                Atualizar
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger">Excluir Veículo</button>
                        </div>
                    </div>

                    <hr />
                   </div>

               )
           })} 
        </div>
    )
}

export default VeiculoList
