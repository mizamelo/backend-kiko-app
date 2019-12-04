const request = require('supertest')

const app = require('../../src/app');
const truncate = require("../utils/truncate");
const factory = require("../factories");

describe('Courses', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('Ao accesar a rota /courses via get o usuário recebe uma lista de cursos', async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .get('/courses')
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.body).toHaveProperty('data')
  })

  it('Ao accesar a rota /courses/:id via get o usuário recebe o curso', async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .get('/courses/1')
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.body).toHaveProperty('data')
  })
})