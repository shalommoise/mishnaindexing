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

return mishnayos.map((mishna)=> mishna/10)
}