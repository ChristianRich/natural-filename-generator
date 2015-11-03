var numberUtil = require('./number');

self = module.exports = {

    /**
     * Accepts an array and returns the distribution curve based on Zipf's law
     * Essentiall this means that the item at level n has double the weight as item n+1
     * https://en.wikipedia.org/wiki/Zipf%27s_law
     *
     * @param array
     * @returns {Array}
     */
    getZipfDistribution: function(array){

        var res = [];

        for(var i = 0; i < array.length; i++){
            res.push(1 / (i + 1));
        }

        return res;
    },

    /**
     * Returns a random element from an Array based on a distribution curve
     * @param {Array} list The Array to pick from
     * @param {Array} weight Array of numbers e.g [1, 0.5, 0.33, 0.1666]
     * @returns {*}
     */
    getRandomItem: function(list, weight) {

        var totalWeight = weight.reduce(function (prev, cur, i, arr) {
            return prev + cur;
        });

        var randomNum = numberUtil.rand(0, totalWeight),
            weightSum = 0;

        var res;

        for (var i = 0; i < list.length; i++) {
            weightSum += weight[i];
            weightSum = +weightSum.toFixed(2);

            if (randomNum <= weightSum) {
                res = list[i];
                break;
            }
        }

        if(!res){
            return self.getRandomItem(list, weight);
        }

        return res;
    }
};