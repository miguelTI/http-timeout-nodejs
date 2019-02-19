'use strict'

const request = require('supertest');
const app = require('../app.js');

describe('GET /?t=:seconds', () => {
    test('receive a request, wait 3 seconds and respond 200', () => {  
        return request(app)
        .get('/')
        .expect(200)
    });
      
    test('receive a request with a t parameter, respond after the informed seconds', () => {
        var start = new Date().getTime();
        return request(app)
        .get('/?t=2')
        .expect(200)
        .then(res => {
            var end = new Date().getTime();
            const pass = (end - start) >= 2000;
            expect(pass).toBe(true);
        })
    });

    test('receive a request with a t parameter that is not a number', () => {
        return request(app)
        .get('/?t=A')
        .expect(400)
    });
});