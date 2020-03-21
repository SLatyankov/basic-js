module.exports = function repeater( str, options ) {
    var str1;
    for (let i = 0; i<options.repeatTimes(key); i++) {
        str1 += str;
        for (let i = 0; i < options.additionRepeatTimes(key); i++) {
            str1 += options.addition(key) + options.additionSeparator(key);
        }
        str1.slice(0, -2);
        str1 +=separator;
    }
    str1.slice(0, -2);
    return str1;
};