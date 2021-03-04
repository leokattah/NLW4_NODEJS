<<<<<<< HEAD
import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "../app";

import createConnection from "../database";

describe("Surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterEach(async () => {
    const connection = getConnection();
    await connection.query("DELETE  FROM SURVEYS");
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create a new survey", async () => {
    const response = await request(app).post("/surveys").send({
      title: "Title Example",
      description: "Description Example",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Should be able to get all surveys", async () => {
    await request(app).post("/surveys").send({
      title: "Title Example",
      description: "Description Example",
    });

    await request(app).post("/surveys").send({
      title: "Title Example2",
      description: "Description Example2",
    });

    const response = await request(app).get("/surveys");

    expect(response.body.length).toBe(2);
  });
});
=======
import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';


describe("Surveys", () => {

    // Antes de tudo, criar as migrations para o banco de dados test ter tabelas
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new survey", async () => {
        // Criando uma requisicao pela biblioteca supertest
        const response = await request(app).post("/surveys")
        .send({
            title: "Title Example1",
            description: "Description Example1",
        });

        // Espara-se que seja 201 pois assim o test funcionou e criou o survey
        expect(response.status).toBe(201);

        // Espera que o body retornado ao criar tenha a propriedade id
        expect(response.body).toHaveProperty("id");
    });

    it("Should be able to create a new survey", async () => {
        // Criando uma requisicao pela biblioteca supertest
        const response = await request(app).post("/surveys")
        .send({
            title: "Title Example2",
            description: "Description Example2",
        });

        // Espara-se que seja 201 pois assim o test funcionou e criou o survey
        expect(response.status).toBe(201);

        // Espera que o body retornado ao criar tenha a propriedade id
        expect(response.body).toHaveProperty("id");
    });

    it("Should be able get all surveys", async () => {
        // Criando uma requisicao pela biblioteca supertest, get que retorna tudo
        const response = await request(app).get("/surveys");

        // Espara-se que tenham os 2 surveys cadastrados no banco de dados
        expect(response.body.length).toBe(2);
    });

});
>>>>>>> 03601a0e03be5d2be12ce120b4f5923fbb4511b5
