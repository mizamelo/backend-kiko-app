const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../factories");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("Usuario não pode acessar a rota sem informar o campo email", async () => {
    
    const reponse = await request(app)
      .post("/sessions")
      .send({});

    expect(reponse.status).toBe(401);
  });

  it("Usuario não pode acessar a rota sem informar o campo password", async () => {

    const reponse = await request(app)
      .post("/sessions")
      .send({
        email: 'admin@admin.com'
      });

    expect(reponse.status).toBe(401);
  });

  it("Usuario deve poder se autenticar com credenciais validas", async () => {
    const user = await factory.create("User", {
      password: "123123"
    });

    const reponse = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123123"
      });

    expect(reponse.status).toBe(200);
  });

  it("Usuário não pode se autenticar com email invalido", async () => {
    const user = await factory.create("User", {
      email: "admin@admin.com"
    });

    const reponse = await request(app)
      .post("/sessions")
      .send({
        email: "outro@email.com",
        password: user.password
      });

    expect(reponse.status).toBe(401);
  });

  it("Usuário não pode se autenticar com senha invalida", async () => {
    const user = await factory.create("User", {
      password: "123465"
    });

    const reponse = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123456"
      });

    expect(reponse.status).toBe(401);
  });

  it("Após o login, o token de acesso deve ser retornado", async () => {
    const user = await factory.create("User", {
      password: "123123"
    });

    const reponse = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123123"
      });

    expect(reponse.body).toHaveProperty("token");
  });

  it("O usuário pode acessar rotas privadas", async () => {
    const user = await factory.create("User");

    const reponse = await request(app)
      .get("/courses")
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(reponse.status).toBe(200);
  });

  it("O usuário não pode acessar rotas privadas quando não está autenticado", async () => {
    const reponse = await request(app).get("/courses");

    expect(reponse.status).toBe(401);
  });

  it("Verifica se o token é válido", async () => {
    const reponse = await request(app)
      .get("/courses")
      .set("Authorization", "Bearer 123123");

    expect(reponse.status).toBe(401);
  });
});

describe("Register", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("Usuário não pode se registrar na plataforma sem um nome", async () => {
    const reponse = await request(app)
      .post("/sessions/register")
      .send({});

    expect(reponse.status).toBe(401);
  })

  it("Usuário não pode se registrar na plataforma sem um email", async () => {
    const user = await factory.create("User");

    const reponse = await request(app)
      .post("/sessions/register")
      .send({
        name: user.name,
      });

    expect(reponse.status).toBe(401);
  })

  it("Usuário não pode se registrar na plataforma sem uma senha", async () => {
    const user = await factory.create("User");

    const reponse = await request(app)
      .post("/sessions/register")
      .send({
        name: user.name,
        email: user.email,
      });

    expect(reponse.status).toBe(401);
  })

  it("Usuário pode se registrar na plataforma", async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .post("/sessions/register")
      .send({
        name: user.name,
        email: 'admin@gmail.com',
        password: user.password,
      });

    expect(response.status).toBe(200);
  })

  it("Usuário não pode pegar suas informações sem um id", async () => {
   
    const response = await request(app)
      .post("/sessions/me")
    
    expect(response.status).toBe(401);
  })

  it("Usuário não pode pegar suas informações sem um token", async () => {
    const user = await factory.create("User");
    
    const register = await request(app)
      .post("/sessions/register")
      .send({
        name: user.name,
        email: 'admin@gmail.com',
        password: user.password,
      });

    const response = await request(app)
      .post("/sessions/me")
      .send({
        id: register.body.id
      });
    
    expect(response.status).toBe(401);
  })

  it("Usuário pode pegar suas informações", async () => {
    const user = await factory.create("User");
    
    const register = await request(app)
      .post("/sessions/register")
      .send({
        name: user.name,
        email: 'admin@gmail.com',
        password: user.password,
      });

    const response = await request(app)
      .post("/sessions/me")
      .send({
        id: register.body.id
      })
      .set("Authorization", `Bearer ${user.generateToken()}`);
    
    expect(response.status).toBe(200);
  })
});
