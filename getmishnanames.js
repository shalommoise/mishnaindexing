const fs =require('fs');
const index = require('./sefariaindex.json');
let mishnaNames= [];



const mishnayos = index[1].contents;

console.log(mishnaNames);

for (let i =0; i < 6; i++){  

mishnayos[i].contents.forEach((mishna)=>{
    mishnaNames.push(mishna.title)
  })
}


    const str = JSON.stringify(mishnaNames)
fs.writeFile("mishnaName.json",str, (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
}); 