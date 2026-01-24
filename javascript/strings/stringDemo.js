const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function stringMethod(name, sentence){

    console.log(" 1. LowerCase : ",name.toLowerCase() +", UpperCase : ",name.toUpperCase());
    console.log("2. Name with no extra spaces : "+name.trim());
    console.log("3. Length : ",name.length);
    console.log("4. First letter : "+name.charAt(0) +" " +"Last letter : "+name.charAt(name.length - 1));
    console.log("5. Sentence contains full name : "+sentence.includes(name));
    console.log("6. Index of "+name +": " +sentence.indexOf(name));

    let arr = sentence.split(" ");
    console.log("7. Sentence to Array of words : ", arr);

    let arrToString = arr.join("-");
    console.log("8. Array to string : ", arrToString);

    console.log("9. Repeating of name 2 times : ", name.repeat(2));
    console.log("10. Character at a given position : ", name.charAt(2));

    r1.question("11. Enter word to be replaced : ", function(word){
        r1.question("12. Enter word to be replaced with : ", function(newWord){
            console.log("13. After replacement sentence : ", sentence.replace(word, newWord));
            r1.question("14. Enter word to compare : ", function(compareWord){
                console.log("15. Comparision : ", name.toLowerCase() === compareWord.toLowerCase());
                r1.close();
            });
        });
    });
}

r1.question("Enter name : ", function(name){
    r1.question("Enter sentence : ", function(sentence){
        stringMethod(name, sentence);
    });
});

