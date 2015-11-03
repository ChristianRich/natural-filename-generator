module.exports = {

    /**
     * Randomly shuffles an array
     * @param a
     * @returns {array}
     */
    shuffle: function(a){

        if(!a){
            return [];
        }

        for(var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
        return a;
    },

    /**
     * Returns a random element from a Array
     * @param {array} a
     * @returns {string|null}
     */
    random: function(a){

        if(!a){
            return null;
        }

        return a[Math.floor(Math.random() * a.length)];
    }
};