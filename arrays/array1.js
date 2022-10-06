// array creation
let arr1 = [1,2,3,4,5];
console.log(typeof(arr1));
// findin the length of the array
console.log(arr1.length);
// acessing the array item
console.log(arr1[arr1.length-1]);
//modifing the element in the array
arr1[arr1.length-1]=89;
console.log(arr1);

//finding the index of the element
console.log(arr1.indexOf(89));

//adding element
arr1.push(78)
//adding at the front
arr1.unshift(0)
console.log(arr1);
//poping the element
let data = arr1.pop()
console.log(data);

//printing every element
for(const data in arr1){
    console.log(arr1[data]);
}
//using map function
function double(data){
    return data*2;
}
const doub=arr1.map(double);
console.log(doub);