
for (let i = 1; i < 10; i++) {
    console.log(i);
}

let x = 2;
let loopCounter = 0;

while (x < 100000) {

    x = x * x ++;

    loopCounter = loopCounter + 1;

    console.log("x is equal to "+ x)

    console.log("loopCounter is equal to " +loopCounter)
}