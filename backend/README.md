# Backend - ParkFlow

## Getting Started
1. Install [Node.js](https://nodejs.org/en/download/)
2. run `npm install` in the backend directory
3. run `npm start` to start the server
4. the server will be running on port setting in the .env file

## API Documentation

### User
- POST /user/ - Cadastra um novo usuário
- GET /user/ - Retorna todos os usuários
- GET /user/:id - Retorna um usuário específico 
- PUT /user/:id - Atualiza um usuário específico
- DELETE /user/:id - Deleta um usuário específico

### Park
- POST /park/ - Cadastra um novo estacionamento
- GET /park/ - Retorna todos os estacionamentos do usuário logado


<!-- 
### User
// POST /user/ - Cadastra um novo usuário
// GET /user/ - Retorna todos os usuários
// GET /user/:id - Retorna um usuário específico
// PUT /user/:id - Atualiza um usuário específico
// DELETE /user/:id - Deleta um usuário específico

### Park
// POST /park/ - Cadastra um novo estacionamento

### Area
// POST /park/:id/area/ - Cadastra uma nova área em um estacionamento no usuário logado
// GET /park/:id/area/ - Retorna todas as áreas de um estacionamento do usuário logado

// GET /park/:id/area/:id - Retorna uma área específica de um estacionamento do usuário logado
// PUT /park/:id/area/:id - Atualiza uma área específica de um estacionamento do usuário logado
// DELETE /park/:id/area/:id - Deleta uma área específica de um estacionamento do usuário logado

### ParkingSpot
// POST /park/:id/area/:id/parkingSpot/ - Cadastra uma nova vaga em uma área de um estacionamento do usuário logado
// GET /park/:id/area/:id/parkingSpot/ - Retorna todas as vagas de uma área de um estacionamento do usuário logado

// GET /park/:id/area/:id/parkingSpot/:id - Retorna uma vaga específica de uma área de um estacionamento do usuário logado
// PUT /park/:id/area/:id/parkingSpot/:id - Atualiza uma vaga específica de uma área de um estacionamento do usuário logado
// DELETE /park/:id/area/:id/parkingSpot/:id - Deleta uma vaga específica de uma área de um estacionamento do usuário logado

// GET /park/:id/area/:id/parkingSpot/:id/occupy - Ocupa uma vaga específica de uma área de um estacionamento do usuário logado
// GET /park/:id/area/:id/parkingSpot/:id/free - Libera uma vaga específica de uma área de um estacionamento do usuário logado

-->

