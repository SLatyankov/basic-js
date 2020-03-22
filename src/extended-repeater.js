module.exports = function repeater(str, options) {
        console.log(str);
    let str1 = String(str);
    let addition1 = String(options.addition);
    console.log(addition1);
    let separat;
    let separat2;
    if (options.separator == undefined) {
        separat = '+';
    } else {
        separat = options.separator;
    }
    if (options.additionSeparator == undefined) {
        separat2 = '|';
    } else {
        separat2 = options.separator;
    }


    let a = '';
    /*for (let i = 0; i < options[repeatTimes]; i++) {
        a += str1;
        for (let j = 0; j < options[additionRepeatTimes]; j++) {
            a += addition1 + separat2;
        }
        a += addition1 + separat;
    }*/
    a += str1;
   /* for (let j = 0; j < options[additionRepeatTimes]; j++) {
        a += addition1 + options[additionSeparator];
    }*/
    console.log(a);
    return a;


};