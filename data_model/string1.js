// string data model
let str1 = "Abhishek";
let str2 = "Gharami";
console.log(str1,str2);
// indexxing of the charecter of the strings
let i = 0;
for(i=0;i<str1.length;i++){
    console.log(str1[i]);
}

// indexing only the even charecter value and storing the in another string
let str3 = " ";
for(i=0;i<str2.length;i++){
    if(i%2==0){
        console.log(str1[i]);
    }
}

console.log(str1[str1.length-1]);

// different type of string method
console.log(str1.search('b'));

let str4 = str1.replace('b','v');
console.log(str4);
console.log(str1);
let str5 = str1.toUpperCase();
console.log(str5);

// to check that contains the substring of the any given string
if (str1.includes('Abhi')==1){
    console.log("String contains the substring of the given.");
}
else{
    console.log("String does not hold the substring of the given string.");
}

// The comparision between the startswith and endswith
if(str1.startsWith('Abhi')==1){
    console.log("String match with the substring.");
}
else{
    console.log("String don't match with the substring.");
}

if(str1.endsWith('Abhi')==1){
    console.log("String match with the substring.");
}
else{
    console.log("String don't match with the substring.");
}
