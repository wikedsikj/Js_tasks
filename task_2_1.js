let num = prompt("Enter the number: ");
let lineSquare = "";

for (let n = 0; n < num; n++) {
    if (!num) break;
    
    for (let m = 0; m < num; m++) {
        lineSquare +=  "*";
    }
    lineSquare += "\n";
}
alert(lineSquare);
