import React from 'react';

function VeiculosPorFabricante(props){

  const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

  const groupByFabricante = groupBy('marca')
  
  const veiculosAgrupadosPorFabricante = groupByFabricante(props.veiculos)
  
  return (
    Object.entries(veiculosAgrupadosPorFabricante).map(([key, value]) => {
        
      return (
          <div><b>{key}</b>: {value.length}</div>
        );
    })    

  )

    
}


export default VeiculosPorFabricante