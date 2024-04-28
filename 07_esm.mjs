// import sum from "./07_esm_main.mjs";
import * as math from "./07_esm_main.mjs";
// console.log(math.add(56,44));
// console.log(math.sub(56,44));


const {add , sub}=math;
console.log(add(56,44));
console.log(sub(56,44));