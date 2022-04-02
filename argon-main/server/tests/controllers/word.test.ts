import request from "supertest";
import server from "../..";

afterEach(done => {
  server.close();
  done();
});

describe('controllers/word', () => {
  it('Should search for word', async () => {
    const reponse = await request(server).get('/api/word');
    expect(reponse.status).toEqual(200);
    expect(reponse.type).toEqual('application/json');
  });
});
