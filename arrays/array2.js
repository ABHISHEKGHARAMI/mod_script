//array callback methods
/*
1. Foreach
2. map
3. Filter
4. Find
5. Reduce
6. Some
7. Every
*/
// Foreach  Accepts a call back function and return each of the element
let arr1 = [1,2,3,4,6];
arr1.forEach(function(n){
    console.log(n*n);
});
function printTriple(data){
    console.log(data*3);
}
arr1.forEach(printTriple);
const books =[
    {
        title : 'Good Omens',
        authors : ['Terry Pratchett','Neil Gaiman'],
        rating : 4.25
    },
    {
        title : 'Bone :The complete edition',
        authors : ['Jeff Smith'],
        rating : 4.42
    },
    {
        title : 'American Gods',
        authors : ['Neil Gaiman'],
        rating : 4.11
    },
    {
        title : 'A Gentleman in Moscow',
        authors : ['Amor Towles'],
        rating : 4.36
    }
]
function print(data){
    console.log('Author name :',data);
}
//for each will print the author name 
books.forEach(function(data){
    console.log("Author name :",data.authors," rating :",data.rating);
});

// map function is callback function where it return the every element of the objects
let arr2 = ['abc','cde','ght','dhg'];
function uppercase(data){
    return data.toUpperCase();
}
let arr3 = arr2.map(uppercase);
console.log(arr3);