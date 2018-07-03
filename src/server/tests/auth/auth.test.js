import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../app';

chai.use(chaiHttp);
chai.should();

describe('Authentication', () => {
  describe('Create account', () => {
    it('should register a user successfully', (done) => {
      const user = {
        firstname: 'Sullivan',
        lastname: 'Wisdom',
        email: 'wiztemple7@gmail.com',
        password: 'lastdays9998',
      };
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((error, response) => {
          response.should.have.status(201);
          response.body.should.be.an('object');
          done();
        });
    });
  });
});
