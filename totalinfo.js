const mishnaIndex = require('./mishnaIndex.json');

const total = {perakim: 0, mishnayos: 0};

mishnaIndex.forEach((mishna)=>{
  total.perakim += mishna['perekNumber'];
  total.mishnayos += mishna['mishnaNumber'];
});

console.log(total)
//answer is { perakim: 525, mishnayos: 4183 }

const fs =require('fs');

const fetch = require("node-fetch")
const mishnaNames = require('./mishnaName.json')
const mishnaByPerek = {};

mishnaNames.forEach((name)=> { mishnaByPerek[name] = []})


const Masechta = 'Mishnah Berakhot'

const promise1 = new Promise((resolve, reject) => {
  // resolve(
    // mishnaIndex.forEach((mishna)=>{
      console.log(mishnaIndex[0])
  for (let i = 1; i<= mishnaIndex[0][Masechta].perekNumber;i++){
    
fetch(`https://www.sefaria.org/api/texts/${Masechta}.${i}`)
  
  .then(response => response.json())
  .then(data => {
    mishnaByPerek[Masechta].push({[i]:data.text.length})
   
      })
  
  }
// })
// );
});

promise1.then(()=>console.log(mishnaByPerek))

