const request = require('supertest');
const app = require('../app'); // Certifique-se de importar o app configurado
const jwt = require('jsonwebtoken'); // Para criar tokens mockados, se necessário

describe('Testando rotas do userRoutes', () => {
  // Teste para cada rota aqui
});


describe('POST /login', () => {
  it('Deve retornar 200 se as credenciais forem válidas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: '123456' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('Deve retornar 401 para credenciais inválidas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'wrong@example.com', password: 'wrongpassword' });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('error', 'Usuário ou senha inválidos');
  });
});


describe('POST /check', () => {
  it('Deve retornar 200 se o usuário existir', async () => {
    const res = await request(app)
      .post('/check')
      .send({ email: 'existing@example.com' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ exists: true });
  });

  it('Deve retornar 404 se o usuário não existir', async () => {
    const res = await request(app)
      .post('/check')
      .send({ email: 'nonexistent@example.com' });

    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ exists: false });
  });
});


describe('PUT /edit', () => {
  it('Deve editar um usuário autenticado', async () => {
    const token = jwt.sign({ id: 1 }, 'your-secret-key', { expiresIn: '1h' }); // Mock do token
    const res = await request(app)
      .put('/edit')
      .set('Cookie', [`token=${token}`])
      .send({ name: 'Updated Name', email: 'updated@example.com' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ success: true });
  });

  it('Deve retornar 401 se o token estiver ausente ou inválido', async () => {
    const res = await request(app)
      .put('/edit')
      .send({ name: 'Updated Name', email: 'updated@example.com' });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('error', 'Token inválido ou ausente');
  });
});


describe('DELETE /delete/:id', () => {
  it('Deve deletar o usuário autenticado', async () => {
    const token = jwt.sign({ id: 1 }, 'your-secret-key', { expiresIn: '1h' }); // Mock do token
    const res = await request(app)
      .delete('/delete/1')
      .set('Cookie', [`token=${token}`]);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ success: true });
  });

  it('Deve retornar 401 se o token estiver ausente ou inválido', async () => {
    const res = await request(app).delete('/delete/1');

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('error', 'Token inválido ou ausente');
  });
});



describe('GET /all', () => {
  it('Deve retornar uma lista de usuários', async () => {
    const res = await request(app).get('/all');

    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array); // Espera um array como resposta
  });
});