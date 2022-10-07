// arrow function => Syntatically comact alternative to  a regular expression
const check = (x)=>{
    return x%2==0;
} 
console.log(check(12));

let var1 = (x)=>{
    return x*x;
}
let arr1 = [10,11,12,13,14,15];
for(let i=0;i<arr1.length-1;i++){
    console.log(var1(arr1[i]));
}

let movies = [
    "The Fantastic Mr.Fox",
    "Mr and Mrs Smith",
    "Mrs DoubtFire",
    "Mr Deed"
];
let movie = movies.find(movie=>{
    return movie.includes('Mrs');
});
console.log(movie);

//filter method in the arrow function
//filter function creates an array which passes throught the filter box.
const nums = [1,2,3,4,5,6,7,8,9,10];
const num1 = nums.filter(n=>{
    return n%2==0;
});

console.log(num1);
const small_num = nums.filter(n=>n>=6);
console.log(small_num);

// take an array which output like that greater than certain number
const num2 = nums.filter(n=>n>=8);
console.log(num2);
const num3 = nums.filter(n=>{
    return n%2===1;
});
console.log(num3);
console.log(typeof(num3));
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
const gbooks = books.filter(n=>{
    if(n.rating>=4.2){
        console.log("Author :",n.authors,"  Book name :",n.title);
    }
});
console.log(gbooks);