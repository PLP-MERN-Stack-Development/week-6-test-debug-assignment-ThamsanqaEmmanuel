const request = require('supertest');
const app = require('../../app');
const User = require('../../models/User');

describe('User API', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('POST /api/users - should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ username: 'testuser', email: 'test@example.com' });
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id');
  });
});