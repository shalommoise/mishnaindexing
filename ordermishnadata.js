const fs =require('fs');

const mishnaDets = require('./MasechtaDetails.json');

const fullDetails = {}

mishnaDets.forEach((mishna)=>{
  fullDetails[mishna.title] = {chapterNumber: [mishna.lengths[0]], mishnaNumbber: [mishna.lengths[1]]}
});
console.log(fullDetails)