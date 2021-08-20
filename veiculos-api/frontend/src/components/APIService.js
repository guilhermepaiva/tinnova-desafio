export default class APIService {

    static UpdateVeiculo(id, body){
        return fetch(`http://localhost:5000/veiculos/${id}/`, {
            'method': 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          })
          .then(resp => resp.json())
    }

    static InserirVeiculo(body){
        return fetch(`http://localhost:5000/veiculo`, {
            'method': 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          })
          .then(resp => resp.json())
    }
}
