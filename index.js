
var mirrorMaker = function (obj) {
    var ret = {},
        val,
        i,
        k;
    if (Array.isArray(obj)) {
        if (Array.prototype.forEach) {
            obj.forEach(function (d) {
                ret[d] = d;
            });    
        } else {
            for (var i = 0; i < obj.length; i++) {
                val = obj[i];
                ret[val] = val;
            }    
        }
        return ret;
    } else if (obj instanceof Object) {
        return mirrorMaker(Object.keys(obj));
    }
    
    throw new Error('mirrorMaker(...): Argument must be an object or an array');
}

module.exports = mirrorMaker;
