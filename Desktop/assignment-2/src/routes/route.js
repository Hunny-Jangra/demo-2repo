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
const moviesArr = ['Hobs&Show', 'Fast and Furious', 'Kick', 'Bahubali'];
router.get('/movies', (req, res) => {
    console.log(moviesArr);
    res.send(`Movies array ${moviesArr}`);
})
router.get('/movies/:indexNumber', (req,res) => {
    const moviesArr = ['Hobs&Show', 'Fast and Furious', 'Kick', 'Bahubali'];
    if(moviesArr[req.params.indexNumber]){
        res.status(200).send(`${moviesArr[req.params.indexNumber]}`);
    }
    else{
        res.status(400).send(`Invalid value check properly enter value !`)
    }
    // console.log(moviesArr[req.params.indexNumber]);
    
})
const arrofOffilms = [ {
    id: 1,
    name: "The Shining"
   }, {
    id: 2,
    name: "Incendies"
   }, {
    id: 3,
    name: "Rang de Basanti"
   }, {
    id: 4,
    name: "Finding Nemo"
   }]
router.get('/films', (req,res) => {
    res.send(arrofOffilms);
})

router.get('/films/:filmId', (req, res) => {
    let arrindex = req.params.filmId-1;
    if(arrofOffilms[arrindex]){
        res.send(arrofOffilms[arrindex]); 
    }
    else{
        res.status(400).json({
            status : 'Invalid Entry!',
            message : 'No movie exists with this id'
        })
    }

})

router.get('/sol1', (req,res) => {
    
    let A = [1, 2, 3, 5, 6, 7];
    let i;
    let n = 7;
    let sum = 0;
    for(i=0; i<A.length; i++) {
        sum+=A[i];
    }

    let s = n*(n+1)/2;
    console.log(s-sum);
    res.send(`Missing Element in an Array is : ${s-sum}`);

})

router.get('/sol2', (req,res) => {
    const ArrSol2 = [33, 34, 35, 37, 38];
    let l=ArrSol2[0], i;
    let diff = l-0;

    for(i=0; i<ArrSol2.length; i++) {
        if(ArrSol2[i]-i != diff) {
            res.send(`Missing element in Array : ${i+diff}`);
        }
    }



})
   
module.exports = router;
// adding this comment for no reason