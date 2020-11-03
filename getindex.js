const fs =require('fs');

const fetch = require("node-fetch");


fetch('https://www.sefaria.org/api/index/')
  .then(response => response.json())
  .then(data => {
    const str = JSON.stringify(data)
fs.writeFile("sefariaindex.json", str, (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
}); 

  });



