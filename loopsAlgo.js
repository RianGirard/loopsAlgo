// #1: Print the odd numbers from range of 1-20

for (var i = 1; i < 20; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}

// #2: Sum and Print 1-5
var sum = 0;
for (var i = 1; i < 6; i++){
    sum = sum + i;
    console.log("Num: ", i);
    console.log("Sum: ", sum);
}