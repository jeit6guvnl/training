/*let data="data";
console.log(data);

console.log("--------------------------------------");

var data1="javascript var";
{
    var data1="note js var";
    console.log(data1);

}
console.log(data1);

console.log("--------------------------------------");

let data2="javascript let";
{
    let data2="note js let";
    console.log(data2);

}
console.log(data2);


console.log("--------------------------------------");
const data3="javascript";
{
    const data3="note js";
    console.log(data3);

}
console.log(data3);




console.log("--------------------------------------");


let age=25;
console.log(typeof(age));



console.log("--------------------------------------");
console.log(document);

console.log("--------------------------------------");
console.log(document.URL);


//window.prompt("enter your age");

console.warn("this is warning");

console.error("this is error");

*/

// let radius = parseFloat(prompt('Enter the radius of the circle : '));

// let area_of_circle = Math.PI * Math.pow(radius,2);

// console.log(`Area of the Circle is : ${area_of_circle}`);






// let radius = parseFloat(prompt('Enter the radius of the cylinder : '));

// let height = parseFloat(prompt('Enter the height of the cylinder : '));

// let lsa_of_cylinder = 2 * Math.PI * radius * height;

// let tsa_of_cylinder = 2 * Math.PI * radius *( radius + height) ;

// console.log(`LSA of Circle is : ${lsa_of_cylinder} and TSA of Circle is : ${tsa_of_cylinder} `);





/*
let gender = prompt('Enter wheather you are a male or female');
gender = gender.toLowerCase();

let discount = 0 ;

if(gender=='male'){
    console.log('You entered you are a male');

    let age = prompt('Enter your age : ');
    if(age>26){
        console.log('your age is greater than 26');
        discount = 10;
    }
    else if ( age<26){
        console.log('your age is less than 26');
        discount=5;
    }
    else if(age==26){
        console.log('your age is equal to 26');
        discount = 12;
    }
    else{
        console.log('Try again');
    }

}

else if(gender=='female'){
    console.log('you entered you are female');

    let choice = prompt(' Enter your choice of movies : HL/ BL');
    choice = choice.toUpperCase();
    if(choice=='HL'){
        console.log('Your choice is of Hollywood movies');
        discount=20;
    }
    else if(choice=='BL'){
        console.log('Your choice is of Bollywood movies');
        discount=5;
    }
    else{
        console.log('you like regional movies so no discount');
    }

}
else{
    console.log('Try again');
}



let price = parseFloat(prompt('Enter Market price :'));

let discount_price = price * discount * 0.01;

let actual_price = price - discount_price;


console.log(`you have to pay in rupees: ${actual_price}`);

*/


function submit(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;


    console.log(username+' '+password);
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    let username_stored=localStorage.getItem("username");
    let password_stored=localStorage.getItem("password");

    console.log(username_stored+' '+password_stored);
    document.write(`username and password is  ${username} and password ${password}`)
}



function reset(){
    localStorage.clear();
}