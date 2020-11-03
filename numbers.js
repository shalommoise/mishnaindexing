exports.getNumbers = (start, end)=>{
  let mishnayos = []
if(!start && !end) return mishnayos;
const funStart = start*10;
const funEnd =end*10;


mishnayos = [funStart, funStart +1, funEnd -1, funEnd];

if(Math.round(end)-Math.round(start)){

   mishnayos = [funStart,Math.floor(start + 1)*10 + 1, funEnd -1, funEnd];
}

if( funEnd.toString().endsWith('3')){
  mishnayos = [funStart, funEnd -2, funEnd -1, funEnd];
}
if( funEnd.toString().endsWith('1')){
  mishnayos = [funStart, funStart +1, funStart +2, funEnd];
  if(Math.round(end)-Math.round(start)){

   mishnayos = [funStart,Math.floor(start + 1)*10 + 1, Math.floor(start + 1)*10 + 2, funEnd];
}
}
if(funStart + 1 === funEnd) mishnayos = [funStart, funEnd]
if(funStart + 2 === funEnd) mishnayos = [funStart, funEnd-1, funEnd]
return mishnayos.map((mishna)=> mishna/10)
}
exports.getChapter =(num)=>{
  if(!num) return '';
  return Math.floor(num);
};

exports.getVerse =(num)=>{
    if(!num) return '';
const str = num.toString();
 const arr = str.split(".");
 return Number(arr[1]);
}