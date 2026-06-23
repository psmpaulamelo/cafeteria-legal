const fs=require('fs');
const path = process.argv[2];
if(!path){ console.error('Usage: node find-unclosed-divs.js <file>'); process.exit(1); }
const s = fs.readFileSync(path,'utf8');
const lines = s.split(/\r?\n/);
let stack = [];
for(let i=0;i<lines.length;i++){
  let line = lines[i];
  let idx = 0;
  while(true){
    const open = line.indexOf('<div', idx);
    const close = line.indexOf('</div>', idx);
    if(open===-1 && close===-1) break;
    if(open!==-1 && (close===-1 || open<close)){
      stack.push({line: i+1, col: open+1, preview: line.trim().slice(0,120)});
      idx = open + 4;
    } else {
      if(stack.length===0){
        console.log('Extra closing at', i+1, line.trim());
      } else {
        stack.pop();
      }
      idx = close + 6;
    }
  }
}
if(stack.length){
  console.log('Unclosed divs count:', stack.length);
  stack.forEach(s=> console.log('line', s.line, 'col', s.col, s.preview));
} else {
  console.log('All <div> tags are balanced.');
}
