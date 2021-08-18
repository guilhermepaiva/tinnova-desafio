class Eleicao:

    def __init__(self, total_eleitores, validos, brancos, nulos):
        self.total_eleitores = total_eleitores
        self.validos = validos
        self.brancos = brancos
        self.nulos = nulos

    def votosValidos(self):
        """Percentual de votos válidos em relação ao total de eleitores."""
        percentualVotosValidos = self.validos / self.total_eleitores
        return percentualVotosValidos

    def votosBrancos(self):
        """Percentual de votos brancos em relação ao total de eleitores."""
        votosBrancos = self.brancos /self.total_eleitores
        return votosBrancos

    def votosNulos(self):
        """Percentual de votos nulos em relação ao total de eleitores."""
        votosNulos = self.nulos / self.total_eleitores
        return votosNulos

eleicao = Eleicao(1000, 800, 150, 50)

print("Percentual de votos válidos: ", format(eleicao.votosValidos(), '.2f'), "%")
print("Percentual de brancos: ", format(eleicao.votosBrancos(), '.2f'), "%")
print("Percentual de votos nulos: ", format(eleicao.votosNulos(), '.2f'), "%")
