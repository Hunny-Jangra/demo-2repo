const express = require('express');
const abc = require('../introduction/intro');
const xyz = require('../logger/logger');
const triming = require('../validator/formatter');
const problem = require('../problem-4/problem4');
// const oddnumbers = require('../problem-4/problem4');

const router = express.Router();
let arr = ['jan', 'feb', 'march', 'april', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
const arrOfNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const unionofNum = [2, 4, 5, 7, 5 ,8, 4, 9];
const pairsofKeyVal = [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]
]
router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    xyz.Welcome()
    triming.trimming()
    problem.chunkFun(arr);
    problem.oddNum(arrOfNum);
    problem.arrOfDuplicateNum(unionofNum);
    problem.pairofKeyval(pairsofKeyVal);
    // problem.oddNum(arrofNum);
    
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})


module.exports = router;
// adding this comment for no reason