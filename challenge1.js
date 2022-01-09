/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(){
    console.log("Fatima");
}
printName();
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */



function printAge(birthYear){
    let age = 2021 - birthYear;
    console.log(age);
}
printAge(1996);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name,language){
if (language === "en"){
    console.log("Hello", name);
}
else if (language === "es"){
    console.log("hola", name);
}
else if (language === "fr"){
    console.log("Bonjour", name);
}
else if (language === "tr"){
    console.log("Merhaba", name);
}
}

printHello("Fatima", "tr");

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(num1,num2){
    if (num1>num2){
        console.log(num1);
    }
    else if (num1<num2){
        console.log(num2);
    }
    else {
        console.log("equal");
    }
}

 printMax(11,44);
printMax(44,11);
printMax(1,1);