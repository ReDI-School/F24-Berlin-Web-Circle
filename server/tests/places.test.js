const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../index.js');

describe("Test places endpoints", ()=>{
    before(()=>{
        console.log("Starting tests...");
    });

    it("should get all places", async ()=>{
        const res = await request(app).get("/places");
        expect(res.status).to.equal(200);
    });
});