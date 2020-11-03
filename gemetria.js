const hebrewNumeralsSmall = ['','א',"ב","ג","ד","ה","ו","ז","ח","ט","י"]
const hebrewNumeralsBig =['', 'י','כ','ל','מ','נ','ס','ע','פ','צ','ק']
exports.convert =(num)=>{
  if(!num) num = 0;

const big = Math.floor(num/10);
const small = Math.round((num/10 - big)*10);

if(big === 1 && small === 5)  return 'טו'

if(big === 1 && small === 6) return 'טז'
return hebrewNumeralsBig[big] +hebrewNumeralsSmall[small]


}

exports.mishnaNumbers =(arr)=>{

}