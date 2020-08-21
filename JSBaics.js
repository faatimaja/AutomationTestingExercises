//function
function add(a,b){
    return a+b;
}

console.log(add(1,3));


//array

var a=4;
var b=["hello", "world", "4","goodbye"];
for(var i=0;i<4;i++){
    console.log(b[i]);
}

console.log(b.length + " size of the array"); //+ is concatination operator

var c = new Array();
c[0] = "goodbye"; // I put this value at first index
c[1] = "4";
c[2] = "world";

for(var i= 0; i< c.length; c++){
    console.log(c[i]);
}

console.log("Print array numbers in reverse!");
for(var j= c.length-1; j>0; i--){
    console.log(c[i]);
}

//JS string functions

//charAt()
var name="Fatima";
console.log(name.charAt(3));

//concat()
var newname = name.concat("Amina");
console.log(newname);

//indexOf() - index of letter
console.log(name.indexOf("u"));

//slice() - starting index is included and lasting is not
cosole.log(name.slice(1,3));

//toUpperCase
cosole.log(name.toUpperCase());

//trim() will remove the space
console.log(name.trim());

// var name2 = name String ("Faatima"); - aslo the way of declaring a string - string object declaration



