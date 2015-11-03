var assert = require('assert')
    , NaturalNameGenerator = require('../lib/index');

describe('Natural name generator', function() {

    var generator;

    before(function(done){
        generator = new NaturalNameGenerator();
        done();
    });

    describe('generate', function () {

        it('should ...', function (done) {

            for(var i = 0; i < 1000; i++){
                var res = generator.generate('jpg');

                console.log(res)
            }

            done();
        });
    });
});
