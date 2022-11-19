function sumInput() {
    let num = [], i = 0, sum = 0;
    while (true) {
        num[i] = +prompt("Enter the number: ", '')
        if (!num[i]) break;
        i++;
    }
    i--;
    do {
        sum += num[i];
        i--;
    } while (i >= 0)
    return sum;
}

alert(sumInput());
