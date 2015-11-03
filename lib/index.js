var _ = require('lodash')
    , stringUtil = require('./util/string')
    , statsUtil = require('./util/stats')
    , numberUtil = require('./util/number')
    , g = require('./generators');

/**
 * Weighted array of available character generators based on Zipf's distribution curve
 * The highter a generator is on the list, the more likely it is to be used.
 */
var generators = [
    g.getTopic,
    g.getCountry,
    g.getCelebrity,
    g.getWord,
    g.getCapital,
    g.getSize,
    g.getDate,
    g.getNumbers,
    g.getPlacement
];

var distributionCurve = statsUtil.getZipfDistribution(generators);

var NaturalNameGenerator = function(){
};

NaturalNameGenerator.prototype = {

    /**
     * Generates a random filename
     * @param {String} extension The file extension e.g 'jpg'
     * @returns {String}
     */
    generate: function(extension){

        var seperator = g.getWordSeperator();

        var res = [],
            ext = extension || '';

        ext = ext.replace('.', '');

        var generators = getGenerators();

        for(var i = 0; i < generators.length; i++){

            var generator = generators[i],
                part = stringUtil.cleanText(stringUtil.dasherize(generator.call()));

            if(i < generators.length - 1){
                part += seperator;
            }

            res.push(part);
        }

        return res.join('') + (ext ? '.' + ext : '');
    }
};

/**
 * Returns a random weighted list with a random number of contents generators
 * @returns {Array}
 */
var getGenerators = function(){

    var res = [],
        numPresets = numberUtil.rand(2, generators.length);

    for(var i = 0; i < numPresets; i++){
        res.push(statsUtil.getRandomItem(generators, distributionCurve));
    }

    return _.uniq(res);
};

module.exports = NaturalNameGenerator;