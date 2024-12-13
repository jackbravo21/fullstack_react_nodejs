
const { checkLogin, checkUserDB, checkUserToEdit, register, editUser, deleteUser, getOne, fetchAll } = require('../controller/userController');
const mockRequest = () => ({ body: {}, params: {}, query: {} });
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('User Controller Tests', () => {
  // Testes individuais para cada função do controlador
});


describe('checkLogin', () => {
    it('Deve retornar sucesso ao fazer login com credenciais válidas', async () => {
      const req = mockRequest();
      req.body = { email: 'test@example.com', password: '123456' };
      const res = mockResponse();
  
      // Mock da lógica de autenticação
      const mockFindUser = jest.fn().mockResolvedValue({ email: 'test@example.com', password: '123456' });
      jest.spyOn(require('../services/userService'), 'findUser').mockImplementation(mockFindUser);
  
      await checkLogin(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ token: expect.any(String) }));
    });
  
    it('Deve retornar erro ao usar credenciais inválidas', async () => {
      const req = mockRequest();
      req.body = { email: 'invalid@example.com', password: 'wrongpassword' };
      const res = mockResponse();
  
      const mockFindUser = jest.fn().mockResolvedValue(null);
      jest.spyOn(require('../services/userService'), 'findUser').mockImplementation(mockFindUser);
  
      await checkLogin(req, res);
  
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ error: 'Usuário ou senha inválidos' }));
    });
  });


  describe('checkUserDB', () => {
    it('Deve retornar sucesso se o usuário existir', async () => {
      const req = mockRequest();
      req.body = { email: 'existing@example.com' };
      const res = mockResponse();
  
      const mockFindUser = jest.fn().mockResolvedValue({ email: 'existing@example.com' });
      jest.spyOn(require('../services/userService'), 'findUser').mockImplementation(mockFindUser);
  
      await checkUserDB(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ exists: true });
    });
  
    it('Deve retornar erro se o usuário não existir', async () => {
      const req = mockRequest();
      req.body = { email: 'nonexistent@example.com' };
      const res = mockResponse();
  
      const mockFindUser = jest.fn().mockResolvedValue(null);
      jest.spyOn(require('../services/userService'), 'findUser').mockImplementation(mockFindUser);
  
      await checkUserDB(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ exists: false });
    });
  });


  describe('register', () => {
    it('Deve criar um novo usuário com dados válidos', async () => {
      const req = mockRequest();
      req.body = {
        name: 'New User',
        email: 'new@example.com',
        password: '123456',
      };
      const res = mockResponse();
  
      const mockCreateUser = jest.fn().mockResolvedValue({ id: 1, email: 'new@example.com' });
      jest.spyOn(require('../services/userService'), 'createUser').mockImplementation(mockCreateUser);
  
      await register(req, res);
  
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ id: 1, email: 'new@example.com' });
    });
  
    it('Deve retornar erro ao tentar criar um usuário com e-mail duplicado', async () => {
      const req = mockRequest();
      req.body = {
        name: 'New User',
        email: 'duplicate@example.com',
        password: '123456',
      };
      const res = mockResponse();
  
      const mockCreateUser = jest.fn().mockRejectedValue(new Error('E-mail já cadastrado'));
      jest.spyOn(require('../services/userService'), 'createUser').mockImplementation(mockCreateUser);
  
      await register(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'E-mail já cadastrado' });
    });
  });