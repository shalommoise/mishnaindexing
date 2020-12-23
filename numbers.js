exports.getNumbers = (start, end)=>{
  let mishnayos = []
  const mulpStart = start * 10;
  const mulpEnd = end *10;
  if(!start) return mishnayos;
  if(!end) return [start.toString()];
  if(start && end) mishnayos = [mulpStart, mulpStart + 1, mulpEnd - 1,mulpEnd]
  if(end.toString().endsWith("3")) mishnayos = [mulpStart,mulpEnd -2, mulpEnd -1, mulpEnd];
  if(end.toString().endsWith("1")) mishnayos = [mulpStart,mulpStart +1, mulpStart +2, mulpEnd];
  if(end > start + 1) { 
    const newChapter = Math.floor(start + 1 )*10 
   if(end.toString().endsWith("1"))  mishnayos = [mulpStart,newChapter +1, newChapter +2, mulpEnd];
   if(end.toString().endsWith("2"))  mishnayos = [mulpStart,newChapter +1, mulpEnd - 1, mulpEnd];
  }
  if(mulpStart + 1 === mulpEnd) mishnayos =[mulpStart, mulpEnd];
  if(mulpStart +1 === mulpEnd - 1) mishnayos =[mulpStart, mulpStart +1 , mulpEnd];
 const answer =  mishnayos.map(mishna=> (mishna/10).toString());
 answer.forEach((num, i)=>{
  if(num % 1 === 0) {answer[i] -= 1; answer[i] += ".10"}
     if(num < answer[i - 1]) answer[i] += "0"
 })  
 return answer;
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