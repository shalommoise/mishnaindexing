const fs =require('fs');
const mishanNames = require('./mishnaName.json')
const fetch = require("node-fetch");


const mishnaIndex =[];


const mishna = new Promise((resolve, reject) => {
  resolve(mishanNames.forEach((name)=>{
fetch(`https://www.sefaria.org/api/index/${name}`)
  .then(response => response.json())
  .then(data => {
mishnaIndex.push({Masechta: data.title, perekNumber: data.lengths[0], mishnaNumber:data.lengths[1] })
  }).then(()=>{
    const str = JSON.stringify(mishnaIndex)
fs.writeFile("mishnaIndex.json",str, (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
}); 

  })
}))
})



mishna.then(()=>console.log(mishnaIndex))

 
