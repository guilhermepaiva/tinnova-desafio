import React from 'react'

function VeiculosUltimaSemana(props) {
    const currentDate = new Date();
    
    return (
        props.veiculos.map(veiculo => {
            if (new Date(veiculo.created).getDay() - currentDate.getDay() < 7){
                console.log(veiculo.marca)
                return (
                    <div>{veiculo.veiculo} - {veiculo.marca} - {veiculo.ano}</div>
                    
                );
            }
            
        })
    )

}

export default VeiculosUltimaSemana
