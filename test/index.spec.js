var assert = require('assert')
    , NaturalNameGenerator = require('../lib/index');

describe('Natural filename generator', function() {

    var generator;

    before(function(done){
        generator = new NaturalNameGenerator();
        done();
    });

    describe('generate', function () {

        it('should instantiate', function (done) {
            assert(generator instanceof NaturalNameGenerator, 'Should be an instance');
            done();
        });

        it('should generate 100 names', function (done) {

            var res = [];

            for(var i = 0; i < 100; i++){
                res.push(generator.generate('jpg'));
            }

            assert(res.length === 100, 'Expect 100 results');
            done();
        });
    });
});
