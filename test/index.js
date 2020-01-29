const chai = require('chai');
const chaiHttp = require('chai-http');
const {expect} = chai;
chai.use(chaiHttp);

const {PORT} = process.env;
const BASE_URL = `http://localhost:${ PORT }`;

describe('Get IP address and country: ', () => {
  it('Should return an object with country and ip PORT', (done) => {
    const EXPECTED_IP = '127.0.0.1';
    const EXPECTED_COUNTRY = 'AR';

    chai.request(BASE_URL)
        .get('/')
        .set('cf-ipcountry', EXPECTED_COUNTRY)
        .set('x-forwarded-for', EXPECTED_IP)
        .send()
        .end((err, res) => {
          expect(res).to.be.json;
          expect(res).to.have.status(200);
          expect(res.body.country).to.equal(EXPECTED_COUNTRY);
          expect(res.body.ip).to.equal(EXPECTED_IP);
          done();
        });
  });

  it('Should return an error 400 (for not using cloudflare)', (done) => {
    chai.request(BASE_URL)
        .get('/')
        .send()
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
  });
});
