import React from 'react';

function VeiculosNaoVendidos(props) {
    var numVeiculosNaoVendidos = 0;
    props.veiculos.map(veiculo => {
        if (veiculo.vendido == false){
            numVeiculosNaoVendidos = numVeiculosNaoVendidos + 1;
        }
    })
    return (

        <div>
            
            <h4>{numVeiculosNaoVendidos} veículos não vendidos.</h4>
            {props.veiculos && props.veiculos.map(veiculo => {
                return (
                veiculo.vendido == false ?
                    <p>{veiculo.veiculo} - {veiculo.marca} - {veiculo.ano}</p>
                
                : null
                )
                
            })}
        </div>
    )
}

export default VeiculosNaoVendidos