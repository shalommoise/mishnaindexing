const hebrewNumeralsSmall = ['','א',"ב","ג","ד","ה","ו","ז","ח","ט","י"]
const hebrewNumeralsBig =['', 'י','כ','ל','מ','נ','ס','ע','פ','צ','ק']
const convert =(num)=>{
  if(!num) num = 0;

const big = Math.floor(num/10);
const small = Math.round((num/10 - big)*10);

if(big === 1 && small === 5)  return 'טו'

if(big === 1 && small === 6) return 'טז'
return hebrewNumeralsBig[big] +hebrewNumeralsSmall[small]


}

const mishnaNumbers =(digits)=>{
if(!digits) return ''
const arr = digits.toString().split(".")

  return `${convert(arr[0])}:${convert(arr[1])}`
}
module.exports = {convert, mishnaNumbers}