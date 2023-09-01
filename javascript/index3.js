let quote = ["I", "am", "your", "friend"]

console.log(quote);

console.log("2nd:", quote[2]);

quote.pop();

quote.push("Father");

quote.unshift("Luke");

console.log(quote);

let erroneousWord = "Luke";

let lukeisHere = quote.includes(erroneousWord);

let lukeIsAt;

if (lukeisHere) {

    lukeIsAt = 

    quote.indexOf(erroneousWord); 
    quote[lukeIsAt] = "No";
}

console.log(quote);


let output = "";

for (let i = 0, j = quote.length; i < j; i++) {
    if (i === j - 1) {
        output += quote[i] + '!';
    } else if (quote[i] === 'No') {
        output += quote[i] + ', ';
    } else {
        output += quote[i] + ' '
    }
}

console.log(output);