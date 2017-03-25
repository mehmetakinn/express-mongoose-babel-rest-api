const chai = require('chai');
const should = chai.should();
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

import server from './../bin/www';

describe('Endpoints', () => {
    describe('Drivers', () => {
        describe('Create driver', () => {
            it('should missing field error', (done) => {
                chai.request(server)
                    .post('/drivers')
                    .end((err, res) => {
                        should.not.exist(err);
                        res.type.should.equal('application/json');

                        should.exist(res.body.err);
                        should.not.exist(res.body.data);
                        res.body.err.should.have.property('message');
                        res.body.err.message.should.equal('Missing field');
                        done();
                    });
            });

            it('should create driver and return it', (done) => {
                chai.request(server)
                    .post('/drivers')
                    .send({
                        "name": "John Doe",
                        "latitude": "40.98741409",
                        "longitude": "29.02519226"
                    })
                    .end((err, res) => {
                        should.not.exist(err);
                        res.type.should.equal('application/json');

                        should.not.exist(res.body.err);
                        should.exist(res.body.data);
                        res.body.data.name.should.be.equal('John Doe');
                        done();
                    });
            });
        });

        describe('Get drivers', () => {
            it('should return drivers', (done) => {
                chai.request(server)
                    .get('/drivers')
                    .end((err, res) => {
                        should.not.exist(err);
                        res.type.should.equal('application/json');

                        should.not.exist(res.body.err);
                        should.exist(res.body.data);
                        done();
                    });
            });
        });
    });
});