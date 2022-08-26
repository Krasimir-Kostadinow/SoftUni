function printAndSum(n1, n2) {
    let printLine = '';
    let sum = 0;
for (let i = n1; i <= n2;i++) {
    let current = i;
    printLine += (`${current} `);
    sum += i;
}
console.log(printLine);
console.log(`Sum: ${sum}`);
}
printAndSum(50,60);