// !------------------------------------------------------------- Task1
// 1. Write a JS code to print numbers from 1 to 10
// Function printNumbers() prints numbers from 1 to 10 using
// for loop.
function printNumbers(i) {
    for (i = 1; i <= 10; i++) {
        console.log(i);
    }
};
printNumbers();
// !-------------------------------------------------------------

// !------------------------------------------------------------- Task 2
// Write a JS code to print Even numbers in given array
// Function printEven() prints all the even numbers of a 2 D array using
// for loops and‘ % ’operator.
console.log("--------------------------")
const array = [
    [4, 5, 6],
    [7, 8, 9]
];

function prinEven() {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] % 2 == 0) { console.log(array[i][j]) }
        }
    }
}
prinEven();
// !-------------------------------------------------------------
console.log('-----3d array---------')

prinEven(array);
// !------------------------------------------------------------- 3d array
let arr = [
    [
        [1, 2],
        [2, 7, 8]
    ],
    [
        [1, 2],
        [3, 5]
    ],
    [
        [4, 2],
        [2, 9]
    ]
];
const prinEven2 = () => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = 0; k < arr[i][j].length; k++) {
                console.log(arr[i][j][k])

            }
        }
    }
}
prinEven2();
// !-------------------------------------------------------------Task 3

const printPattern = () => {
    for (let i = 0; i <= 10; i++) {
        let s = ""
        for (let j = 1; j <= i; j++) {
            s += j + "";
        }
        console.log(s)
    }
}
printPattern();

const printPattern2 = () => {
    for (let i = 10; i >= 0; i--) {
        var s = ""
        for (let j = 1; j <= i; j++) {
            s += j + "";
        }
        console.log(s)
    }
}
printPattern2();