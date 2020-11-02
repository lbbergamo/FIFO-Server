# Projeto - FIFO Server
## :computer: Instalação
### Requisitos
- Banco de dados MySql 
- NodeJs (versão superior a 12)
- Tabela no banco de dados chamada fifoserver

### Terminal
```
git clone -b dev https://github.com/lbbergamo/FIFO-Server.git
npm install
npm start
```

### Banco de dados
Para realizar para realizar a configura do database,acesse o arquivo
```
src/database/knexfile.js
```

# Projeto - FCamara 
Sempre é bom relaxar entre uma tarefa e outra. Para isso, dentro da FC Santos temos como se fosse uma área de recreação, onde nossos consultores podem relaxar enquanto jogam Fifa no Playstation ou uma partida de sinuca. Isso ajuda a descansar a mente, além de criar uma relação com os colegas ***#SangueLaranja***.

Mas por algo mais descontraído, não é muito organizado. Às vezes demora para alguém jogar, já que temos em torno de mais de 90 colaboradores só da FC Santos. Isso acaba acarretando em uma fila, feita apenas no boca a boca, deixando de fora algumas pessoas que não conseguiram jogar no dia.

## Desafio 
> Para melhorar a experiência de jogo e maior convivência com os consultores, tivemos a ideia para ser desenvolvido o **FIFO**, uma fila para organizar as jogatinas dentro do escritório, seja de sinuca, Fifa ou de qualquer outro jogo que temos para Playstation, e até mesmo board games.
