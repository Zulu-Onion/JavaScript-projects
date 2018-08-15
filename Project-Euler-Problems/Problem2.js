/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/


function projectEuler2() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let fibArray = [1, 2];
    let nArray = [];
    let i1 = 0;
    let i2 = 1;
    let iAdd = 0;
    let ni1 = 0;
    while (iAdd < 4000000) {
        iAdd = fibArray[i1] + fibArray[i2];
        fibArray.push(iAdd);
        i1++;
        i2++;
        while (fibArray[ni1] < 4000000) {
            if (fibArray[ni1] % 2 === 0) {
                nArray.push(fibArray[ni1]);
            }
            ni1++;
        }
    }
    console.log(nArray.reduce(reducer));
};
projectEuler2();
