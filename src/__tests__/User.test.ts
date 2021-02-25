

import request from 'supertest';
import { app } from '../app';
import createConnection from '../database';

describe("Surveys", async () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should ba able to create a new survey", async () => {
        const response = await request(app).post("/surveys").send({
            title: "Title Example",
            description: "Description Example",
        });

        expect(response.status).toBe(201);
    });

});