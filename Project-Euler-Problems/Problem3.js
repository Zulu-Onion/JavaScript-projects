function projectEuler3() {
    const i = 13195;
    let arr = [];
    for (let n = 2; n < i; n++) {
        if (i % n === 0) {
            arr.push(n)
        }
    }
    arr.sort(function(a, b){return b-a});
    console.log(arr);
};
projectEuler3()

/*
Original goal:
The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143?

Current issue: 
Inside the above function, I still need to take my array (arr), compare indices within and reduce to to find prime numbers. 
 - If index[0] % index[x] === 0, remove index[0], then start over. 
 - else if you complete the array and none of the mods === 0, start over from the next (starting point moves from index[0] to index[1]).
*/


if (arr.length === 2) {
    
}



// collected mess of attempts to solve current issue: (enjoy my "pseudocode" below)--------------
let x = arr.length - 1;
let y = 0;
let nArray = [];
while (x > -1) {
    if (arr[x] % arr[y] === 0)
        nArray.push(arr[y]);
        while (y something something) {
            y++
        }
    x--
};
nArray.push(fibArray[ni1]);

//*separating thoughts*---------------------------------------------
length = 5
index = 0-4
[35, 29, 13, 7, 5]
let c = true
while (c) {
    if (a % b === 0) {
        remove a from array
    } else (a % b !== 0) {
        b++
    } else if () {
        c++
    }
}
//---------------------------------------------
while 
    for 
let a = 0
let b = 1
let c = 
let d = 
let qArr = []

for (let a; a < arr.length - 1; a++) {
    while (a < arr.length - 1) {
        if (arr[a] % arr[b] === 0) {
            qArr.push(arr[b]);
            a++
        } else if () {
            b++
        }
    }
}
//---------------------------------------------
let a = 0
let b = 1
let c = 
let d = 
let qArr = []

while (a !== arr.length) {
    if (arr[a] % arr[b] === 0) {
        qArr.push(arr[b]);
        a++
    } else if () {
        b++
    }
    a++ 
    or
    a-- && arr.length--
}

while (getting to the last to spots in the array and nothing is removed)
//---------------------------------------------
let A = 1
if (index[0] % index[A] === 0) {
    remove index[0]
    record length of array
    start over
} else {
    continue (A++)
}

let end = 0
let fluidArray = qArr.length 
let qArr = []

for (end = 0; end < fluidArray; end++) {
    
}









































