const { verifyToken } = require('./auth');
const jwt = require('jsonwebtoken');

jest.mock('jsonwebtoken');

describe('verifyToken middleware', () => {
  it('should call next() if token is valid', () => {
    const req = { headers: { authorization: 'Bearer valid.token.here' } };
    const res = {};
    const next = jest.fn();
    
    jwt.verify.mockImplementation(() => ({ userId: '123' }));
    
    verifyToken(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});