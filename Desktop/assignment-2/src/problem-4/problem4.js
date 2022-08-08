const _ = require('lodash');



const chunkFun = function(arr){
    console.log(_.chunk(arr, 4));
    // console.log(chunkArray);
}


const oddNum = (arrOfNum) => {
    console.log(_.tail(arrOfNum));
}

const arrOfDuplicateNum = (dupliactenum) => {
    console.log(_.union(dupliactenum));
    
}

const pairofKeyval = (pairkeyval) => {
    
    console.log(_.fromPairs(pairkeyval));
}

module.exports.chunkFun = chunkFun;
module.exports.oddNum = oddNum;
module.exports.arrOfDuplicateNum = arrOfDuplicateNum;
module.exports.pairofKeyval = pairofKeyval;