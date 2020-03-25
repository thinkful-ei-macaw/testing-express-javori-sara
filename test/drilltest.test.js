const { expect } = require('chai')
const supertest = require('supertest')
const app = require('../app')

describe('Express App', () => {
  it('should return a message from GET /', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello Express!')
  })
})

describe( 'App module', () => {
  describe('GET /frequency endpoint', () => {
    it('should return 200 with an object', () => {
      supertest(app) 
        .get('/frequency')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0]).to.be.an('object');
          expect(res.body[0]).to.include.keys(
            'unique', 'average', 'highest'
          )
        })
      
    })
  })
})

