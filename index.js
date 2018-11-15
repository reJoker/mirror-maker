
var mirrorMaker = function (obj, prefix) {
    var ret = {},
        p = '',
        val,
        i,
        k;

    if (typeof prefix === 'string' && prefix.length) {
        p = prefix + '-';
    }

    if (Array.isArray(obj)) {
        if (Array.prototype.forEach) {
            obj.forEach(function (d) {
                ret[d] = p + d;
            });
        } else {
            for (var i = 0; i < obj.length; i++) {
                val = obj[i];
                ret[val] = p + val;
            }
        }
        return ret;
    } else if (obj instanceof Object) {
        return mirrorMaker(Object.keys(obj), prefix);
    }

    throw new Error('mirrorMaker(...): Argument must be an object or an array');
}

module.exports = mirrorMaker;
