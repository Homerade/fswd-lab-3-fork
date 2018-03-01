'use strict';

// code to test
var server = require('../lib/server');

// libraries
var request = require('supertest').agent,
  models = require('../models');

beforeAll(function() {
    models.sequelize.sync({ force: true });
});

it('should have a test', function() {
    expect(true).toBe(true);
});

describe('server', function() {
    var app;
    beforeEach(function() {
        app = request(server);
    });

    it('should respond with "Hello world!" on /', function() {
        return app
            .get('/')
            .expect(200, /Hello world!/);
    });

    // ['David', 'John', 'Lee'].forEach(function(name) {
    //     it('should respond with "Hello, ' + name + '!" on /' + name, function(done) {
    //         request(server)
    //             .get('/' + name)
    //             .expect(200, 'Hello, ' + name + '!', done);
    //     });
    // });

    describe('users', function() {
        it('should present the registration form', function() {
            return app
                .get('/users/register')
                .expect(200);
        });

        it('should register a user', function() {
            return app
                .post('/users/register')
                .type('form')
                .send({
                    username: 'MyUsername',
                    password: 'MyPassword',
                    password_confirm: 'MyPassword',
                    email: 'somebody@example.com'
                })
                .expect(302)
                .expect('Location', '/users/welcome')
                .then(function(response) {
                    let cookies = response.headers['set-cookie'][0].split(',').map(item => item.split(';')[0]).join(';');
                    return app
                        .get('/users/welcome')
                        .set('Cookie', cookies)
                        .expect(/Hi MyUsername!/);
                });
        });

        // it('should warn if passwords do not match', function() {
        //     return app
        //         .post('/users/register')
        //         .type('form')
        //         .send({
        //             username: 'MyUsername',
        //             password: '12345',
        //             password_confirm: '56789'
        //         })
        //         .expect(200, /Passwords do not match/);
        // });

        // it('should warn if user exists', function() {
        //     return models.User.create({ username: 'MyTestUser', password: 'whatever'})
        //         .then(function() {
        //             return app
        //                 .post('/users/register')
        //                 .type('form')
        //                 .send({
        //                     username: 'MyTestUser',
        //                     password: '1234',
        //                     password_confirm: '1234'
        //                 })
        //                 .expect(200, /Username already exists/);
        //         });
        // });
    });
});
