module.exports = {

    /**
     * Replace spaces with dashes and lowercase the result
     * @param s
     * @returns {String}
     */
    dasherize: function(s){
        return s.replace(/[-\s]+/g, '-').toLowerCase();
    },

    /**
     * Only allow for alpha numeric characters
     * @param s
     * @returns {*}
     */
    cleanText : function(s){
        if(!s) return '';
        return s.replace(/[^a-zA-Z0-9-]/g, '');
    }
};