//reduce function
// reduce function execute for reduce operation
//On each element of the array,resulting a single value.
let num = [3,4,5,6,7,8];

let sum = num.reduce((accum,gen)=>{
    return accum+gen;
})
console.log(sum);

let mul = num.reduce((curr,temp)=>{
    return curr*temp;
});
console.log(mul);
//using the reduce functrion after a certain call back
let sum1 = num.reduce((curr,temp)=>{
    return curr+temp;
},1000);
console.log(sum1);

//finding the maximum value of the grades
let grades = [89,96,58,77,62,93,81,99,73];

let topscore = grades.reduce((curr,temp)=>{
    if(curr>=temp){
        return curr;
    }
    return temp;
});
console.log(topscore);
//finding the min value of the grades
let min_score = grades.reduce((curr,temp)=>{
    if(curr<temp){
        return curr;
    }
    return temp;
});
console.log(min_score);