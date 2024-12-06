const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
// const { before,  describe, it } = require('mocha');

const app = require('../index.js');

describe("Test places endpoints", ()=>{
    before(()=>{
        console.log("Starting tests...");
    });

    it("should get all places", async ()=>{
        const res = await request(app).get("/places");
        expect(res.status).to.equal(200);
    });

    // it("should return error when we have guest less than 1", async ()=>{
    //     const res = await request(app).get("/places?guests=-5");
    //     expect(res.status).to.not.equal(200);
    // });
});