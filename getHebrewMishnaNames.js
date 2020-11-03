const fs =require('fs');
const index = require('./sefariaindex.json');
let mishnaNames= {};



const mishnayos = index[1].contents;


const shortname =(name)=>{
const arr = name.split(" ");
arr.shift();
return arr.join(' ')
 }

for (let i =0; i < 6; i++){  

mishnayos[i].contents.forEach((mishna)=>{

    mishnaNames[mishna.title] =shortname(mishna.heTitle)
  })
}


    const str = JSON.stringify(mishnaNames)
fs.writeFile("hebrewmishnaName.json",str, (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
}); 