from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import datetime


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123456@localhost/veiculosdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Veiculos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    veiculo = db.Column(db.String(100))
    marca = db.Column(db.String(100))
    ano = db.Column(db.Integer)
    descricao = db.Column(db.Text())
    vendido = db.Column(db.Boolean, default=False)
    created = db.Column(db.DateTime, default=datetime.datetime.now)
    updated = db.Column(db.DateTime)

    def __init__(self, veiculo, marca, ano, descricao):
        self.veiculo = veiculo
        self.marca = marca
        self.ano = ano
        self.descricao = descricao
        

class VeiculoSchema(ma.Schema):
    class Meta:
        fields = ('id', 'veiculo', 'marca', 'ano', 'descricao', 'vendido', 'created', 'updated')

veiculo_schema = VeiculoSchema()
veiculos_schema = VeiculoSchema(many=True)

@app.route('/veiculos', methods=['GET', 'POST'])
def veiculos():
    if request.method == 'GET':
        all_veiculos = Veiculos.query.all()
        veiculos = veiculos_schema.dump(all_veiculos)
        return jsonify(veiculos)
    elif request.method == 'POST':
        veiculo = request.json['veiculo']
        marca = request.json['marca']
        ano = request.json['ano']
        descricao = request.json['descricao']

        veiculos = Veiculos(veiculo, marca, ano, descricao)
        db.session.add(veiculos)
        db.session.commit()

        return veiculo_schema.jsonify(veiculos)


@app.route('/veiculos/<id>/', methods=['GET'])
def veiculos_details(id):
    veiculo = Veiculos.query.get(id)
    return veiculo_schema.jsonify(veiculo)

@app.route('/veiculos/find', methods=['GET'])
def find_veiculos():
    marca = None
    ano = None 

    marca = request.args.get('marca')
    ano = request.args.get('ano')

    if marca != None:
        all_veiculos = Veiculos.query.filter(Veiculos.marca == marca).all()
    if ano != None:
        all_veiculos = Veiculos.query.filter(Veiculos.ano == ano).all()
    
    veiculos = veiculos_schema.dump(all_veiculos)

    return jsonify(veiculos)

@app.route('/veiculos/<id>/', methods=['PUT'])
def update_veiculo(id):
    veiculo = Veiculos.query.get(id)
    
    nome_veiculo = request.json['veiculo']
    marca = request.json['marca']
    ano = request.json['ano']
    descricao = request.json['descricao']
    vendido = request.json['vendido']

    veiculo.veiculo = nome_veiculo
    veiculo.marca = marca
    veiculo.ano = ano
    veiculo.descricao = descricao
    veiculo.vendido = vendido

    db.session.commit()

    return veiculo_schema.jsonify(veiculo)

@app.route('/veiculos/<id>/', methods=['PATCH'])
def update_patch_veiculo(id):
    veiculo = Veiculos.query.get(id)

    if 'veiculo' in request.json:
        veiculo.veiculo = request.json['veiculo']
    elif 'marca' in request.json:
        veiculo.marca = request.json['marca']
    elif 'ano' in request.json:
        veiculo.ano = request.jon['ano']
    elif 'descricao' in request.json:
        veiculo.descricao = request.json['descricao']
    elif 'vendido' in request.json:
        veiculo.vendido = request.json['vendido']

    db.session.commit()

    return veiculo_schema.jsonify(veiculo)


@app.route('/veiculos/<id>/', methods=['DELETE'])
def veiculo_delete(id):
    veiculo = Veiculos.query.get(id)
    db.session.delete(veiculo)
    db.session.commit()

    return veiculo_schema.jsonify(veiculo)
    


if __name__ == "__main__":
    app.run(debug=True)