// module 
const lib = require('./lib.js')
console.log(lib.sum(4,5),lib.diff(4,5))
const t1 =performance.now()
// now calling variable functions
console.log(lib.sum1(4,5),lib.diff1(4,5))

const fs= require('fs');
const txt =fs.readFileSync('demo.txt','utf-8')
console.log(txt);
const t2_for_sync =performance.now()

// asyncronous fileread with callback
fs.readFile('demo.txt','utf-8',(err, txt2)=>{
    console.log(txt2)
})
const t3_for_async =performance.now()
console.log(t1,t2_for_sync,t3_for_async)

