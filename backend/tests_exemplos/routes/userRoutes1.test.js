const request = require('supertest');
const app = require('../app'); // Sua aplicação Express que importa e usa as rotas


describe('POST /login', () => {
    it('Deve retornar 200 ao fazer login válido', async () => {
      const response = await request(app)
        .post('/login')
        .send({ email: 'test@example.com', password: '123456' }); //Dados de teste
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token'); //Verifica se o token foi retornado
    });
  
    it('Deve retornar erro ao passar dados inválidos', async () => {
      const response = await request(app)
        .post('/login')
        .send({ email: 'invalid', password: '' }); // Dados inválidos
      expect(response.status).toBe(400); // Verifica erro de validação
      expect(response.body).toHaveProperty('errors');
    });
  });


describe('POST /check', () => {
  it('Deve retornar status 200 se o usuário existir', async () => {
    const response = await request(app)
      .post('/check')
      .send({ email: 'test@example.com' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('exists', true);       //Exemplo de resposta esperada
  });

  it('Deve retornar status 404 se o usuário não existir', async () => {
    const response = await request(app)
      .post('/check')
      .send({ email: 'nonexistent@example.com' });
    expect(response.status).toBe(404);
  });
});


describe('POST /create', () => {
    it('Deve criar um usuário com dados válidos', async () => {
      const response = await request(app)
        .post('/create')
        .send({
          name: 'Test User',
          email: 'test.user@example.com',
          password: '123456',
        });
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
    });
  
    it('Deve retornar erro ao criar usuário com e-mail duplicado', async () => {
      const response = await request(app)
        .post('/create')
        .send({
          name: 'Test User',
          email: 'test.user@example.com',
          password: '123456',
        });
      expect(response.status).toBe(400); // Exemplo de erro para duplicados
    });
  });


  describe('PUT /edit', () => {
    it('Deve editar um usuário autenticado', async () => {
      const token = 'token_de_teste'; // Substitua por um token válido ou mockado
      const response = await request(app)
        .put('/edit')
        .set('Authorization', `Bearer ${token}`)
        .send({ name: 'Updated User' });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name', 'Updated User');
    });
  
    it('Deve retornar erro se não for autenticado', async () => {
      const response = await request(app)
        .put('/edit')
        .send({ name: 'Updated User' });
      expect(response.status).toBe(401); // Exemplo de não autorizado
    });
  });


  describe('DELETE /delete/:id', () => {
    it('Deve excluir um usuário autenticado', async () => {
      const token = 'token_de_teste'; // Substitua por um token válido ou mockado
      const response = await request(app)
        .delete('/delete/1') // Substitua `1` pelo ID válido
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Usuário deletado com sucesso');
    });
  
    it('Deve retornar erro se não for autenticado', async () => {
      const response = await request(app).delete('/delete/1');
      expect(response.status).toBe(401); // Exemplo de não autorizado
    });
  });


  describe('GET /one', () => {
    it('Deve retornar os detalhes de um usuário', async () => {
      const response = await request(app).get('/one').query({ id: 1 }); // Substitua `1` por ID válido
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id', 1);
    });
  
    it('Deve retornar erro se o ID não existir', async () => {
      const response = await request(app).get('/one').query({ id: 9999 });
      expect(response.status).toBe(404);
    });
  });


  describe('GET /all', () => {
    it('Deve retornar uma lista de usuários', async () => {
      const response = await request(app).get('/all');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  
    it('Deve retornar uma lista vazia se não houver usuários', async () => {
      const response = await request(app).get('/all');
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(0); // Exemplo de lista vazia
    });
  });

  