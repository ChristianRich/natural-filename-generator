var arrayUtil = require('./util/array')
    , numberUtil = require('./util/number')
    , Moment = require('moment');

var data = {
    capitals: require('./data/capitals'),
    celebrities: require('./data/celebrities'),
    countries: require('./data/countries'),
    words: require('./data/words'),
    sizes: require('./data/sizes'),
    topics: require('./data/topics'),
    placements: require('./data/placements')
};

var dateFormats = [
    'YYYY-MM-DD',
    'YYYYMMDD',
    'YYMMDD',
    'YYYY',
    'YY'
];

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/**
 * Random data generators.
 * Will generate anything from topics, commonly used words, names, numbers, countries, letters, dates etc.
 */
module.exports = {

    getTopic: function(){
        return arrayUtil.random(data.topics);
    },

    getCapital: function(){
        return arrayUtil.random(data.capitals);
    },

    getCelebrity: function(){
        return arrayUtil.random(data.celebrities);
    },

    getCountry: function(){
        return arrayUtil.random(data.countries);
    },

    getWord: function(){
        return arrayUtil.random(data.words);
    },

    getSize: function(){
        return arrayUtil.random(data.sizes);
    },

    getPlacement: function(){
        return arrayUtil.random(data.placements);
    },

    getDate: function(){
        return Moment().format(arrayUtil.random(dateFormats));
    },

    getNumbers: function(){

        var res ='',
            len = numberUtil.rand(2, 8);

        for(var i = 0; i < len; i++){
            res += arrayUtil.random(numbers);
        }

        return res;
    },

    getLetters: function(){

        var res = '',
            len = numberUtil.rand(2, 8);

        for(var i = 0; i < len; i++){
            res += arrayUtil.random(letters);
        }

        return res;
    },

    getWordSeperator: function(){
        return arrayUtil.random(['-', '_']);
    }
};