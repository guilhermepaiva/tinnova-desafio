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

class Veiculo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    veiculo = db.Column(db.String(100))
    marca = db.Column(db.String(100))
    ano = db.Column(db.Integer)
    descricao = db.Column(db.Text())
    vendido = db.Column(db.Boolean, default=False, nullable=False)
    created = db.Column(db.DateTime, default=datetime.datetime.now)
    updated = db.Column(db.DateTime)

class VeiculoSchema(ma.Schema):
    class Meta:
        fields = ('id', 'veiculo', 'marca', 'ano', 'descricao', 'vendido', 'created', 'updated')

veiculo_schema = VeiculoSchema()
veiculos_schema = VeiculoSchema(many=True)




if __name__ == "__main__":
    app.run(debug=True)