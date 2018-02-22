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
        return request(server)
            .get('/')
            .expect(200, /Hello world!/);
    });

    ['David', 'John', 'Lee'].forEach(function(name) {
        it('should respond with "Hello, ' + name + '!" on /' + name, function(done) {
            request(server)
                .get('/' + name)
                .expect(200, 'Hello, ' + name + '!', done);
        });
    });
});

describe('login', function() {
    it('should test that the login page loads', function() {
        return app.get('/users/login')
            .expect(200, /Login here/i);
    });
});

// TESTS TO APP -- TO RUN AFTER FUNCTIONALITY IS COMPLETED

// describe('register', function() {
//     it('should register a user', function() {
//         return app
//             .post('/users/register')
//             .type('form')
//             .send({
//                 username: 'testUsername',
//                 password: 'testPassword',
//                 password_confirm: 'testPassword'
//             })
//             .expect(302)
//             .expect('Location', '/users/welcome')
//             .then(function() {
//                 return app
//                     .get('/users/welcome')
//                     .expect(200, /Hi testUsername!/);
//             });
//     });
//     it('found an already existing user', function() {
//         return app
//             .post('/users/register')
//             .type('form')
//             .send({
//                 username: 'testUsername',
//                 password: 'testPassword',
//                 password_confirm: 'testPassword'
//             })
//             .then(function() {
//                 return app
//                     .get('/users/register')
//                     .expect(200, /user already exists/); // <---- expect alert
//             }); 
//         });
//     it('password confirmation was not a match', function() {
//         return app
//             .post('/users/register')
//             .type('form')
//             .send({
//                 username: 'testUsername',
//                 password: 'testPassword',
//                 password_confirm: 'testPassword'
//             })
//             .then(function() {
//                 return app
//                     .get('/users/register')
//                     .expect(200, /passwords did not match/) // <---- expect alert
//             });
//     });
//     it('found user already logged in', function() {
//         return app
//             .post('/users/register')
//             .type('form')
//             .send({
//                 username: 'testUsername',
//                 password: 'testPassword',
//                 password_confirm: 'testPassword'
//             })
//             .then(function() {
//                 return app
//                     .get('/users/register')
//                     .expect(200, /you are already registred and are currently logged in/)
//             })
//     })            
// });

// describe('login', function() {
//     it('should login the user', function() {
//         return app
//             .post('/users/login')
//             .type('form')
//             .send({
//                 username: 'userLogin',
//                 password: 'userPass'
//             })
//             .then(function() {
//                 return app
//                     .get('/users/welcome')
//                     .expect(200, /Hi userLogin/)
//             });
//     });
//     it('did not find the user', function() {
//         return app
//             .post('/users/login')
//             .type('form')
//             .send({
//                 username: 'userLogin',
//                 password: 'userPass'
//             })
//             .then(function() {
//                 return app
//                     .get('users/login')
//                     .expect(200, /user does not exist/) // <---- expect alert
//             });
//     });
//     it('got an incorrect password', function() {
//         return app
//             .post('/users/login')
//             .type('form')
//             .send({
//                 username: 'userLogin',
//                 password: 'userPass'
//             })
//             .then(function() {
//                 return app
//                     .get('users/login')
//                     .expect(200, /incorrect password/) // <---- expect alert
//             });
//     });
//     it('found user already logged in', function() {
//         return app
//             .post('/users/login')
//             .type('form')
//             .send({
//                 username: 'userLogin',
//                 password: 'userPass'
//             })
//             .then(function() {
//                 return app
//                     .get('users/welcome')
//                     .expect(200, /Hi userLogin/) // <---- expect alert
//             });
//     });
// })


