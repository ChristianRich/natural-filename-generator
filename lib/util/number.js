module.exports = {

    /**
     * Returns a random number between min and max
     * @param {Number} min
     * @param {Number} max
     * @returns {Number}
     */
    rand: function(min, max) {
        return Math.random() * (max - min) + min;
    }
};