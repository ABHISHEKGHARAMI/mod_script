// Every and Some Method
//Every Method which is check and return every element in the objects to pass the inner function in it.
const word = ['dig','dog','log','bag','wag'];

const num1 = word.every(n=>{
    return n.length===3;
});
console.log(num1);
const num2 = word.every(n=>n[0]=='d');
console.log(num2);

const num3 = word.every(n=>{
    return n[n.length-1]=='g';
});
console.log(num3);

// Some Method
//This is also like every method which return true if any of the element passes
//through the function defined.
const w1 = ['dog','jello','log','cupcake','wag','bag'];

let num4 = w1.some(n=>{
    return n.length>=3;
});
console.log(num4);
// do any word start with z
num4 = w1.some(n=>{
    return n[0]=='z';
});
console.log(num4);

//does any word contains cake
num4 = w1.some(n=>{
    if(n.includes('cake')==true){
        return n;
    }
});
console.log(num4);