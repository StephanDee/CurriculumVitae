'use strict';
window.onload = function () {
    this.init();
};

/**
 * Init function. Put functions here.
 */
function init() {
    console.log('Das Dokument wurde erfolgreich geladen.');

    // Warm Up
    // console.log(this.test_1(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // Output should be 3
    // console.log(this.test_2(8, "UDDDUDUU")); // Output should be 1
    // console.log(this.test_3([0, 0, 1, 0, 0, 1, 0])); // Output should be 4
    // console.log(this.test_3([0, 0, 0, 0, 1, 0])); // Output should be 3
    // console.log(this.test_4("aba", 10)); // Output should be 7

    // Arrays
    // const arr = [
    //     [1, 1, 1, 0, 0, 0],
    //     [0, 1, 0, 0, 0, 0],
    //     [1, 1, 1, 0, 0, 0],
    //     [0, 0, 2, 4, 4, 0],
    //     [0, 0, 0, 2, 0, 0],
    //     [0, 0, 1, 2, 4, 0]
    // ];
    // console.log(this.test_5(arr)); // Output should be 19
    // console.log(this.test_6([1, 2, 3, 4, 5], 2));
    // const q1 = [2, 1, 5, 3, 4];
    // this.test_7(q1); // Output should be 3
    // const q2 = [2, 5, 1, 3, 4];
    // this.test_7(q2); // Output should be Too chaotic
}

/**
 * Sock Merchant.
 *
 * @param n the amount of socks
 * @param ar the array of socks
 * @returns {number}
 */
function test_1(n, ar) {
    const sorted = ar.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < n - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            count += 1;
            i += 1;
        }
    }
    return count;
}

/**
 * Counting Valleys.
 *
 * @param n the number of steps
 * @param s string describing his path
 * @returns {number}
 */
function test_2(n, s) {
    const sealevel = 0;
    let currentHeight = 0;
    let valleys = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (s.charAt(i) === "D") {
            if (currentHeight === sealevel) {
                currentHeight -= 1; // Down
                valleys += 1;
            } else {
                currentHeight -= 1; // Down
            }
        }
        if (s.charAt(i) === "U") {
            currentHeight += 1; // Up
        }
    }
    return valleys;
}

/**
 * Jumping Clouds.
 *
 * @param c
 * @returns {number}
 */
function test_3(c) {
    const min = 2;
    const max = 100;
    let jump = 0;

    if (c.length >= min && c.length <= max) {
        for (let i = 0; i < c.length - 1;) {
            if (c[i + 2] === 0) {
                jump++;
                i += 2;
            } else {
                if (c[i + 1] === 0) {
                    jump++;
                    i += 1;
                }
            }
        }
    }

    return jump;
}

/**
 * Repeated String.
 *
 * @param s a string with english letters in lowercase, repeated infinite times
 * @param n amount of letters to check
 * @returns {number} number of 'a' occurrences
 */
function test_4(s, n) {
    const min = 1;
    const maxs = 100;
    const maxn = 1000000000000;
    let countA = 0;

    if (s.length >= min && s.length <= maxs && n <= maxn) {
        const repeats = Math.floor(n / s.length) + 1; // Math.floor rundet ab
        console.log(repeats);
        let repeatedStringArr = [];

        for (let ir = 0; ir < repeats; ir++) {
            console.log('repeated: ', ir);
            repeatedStringArr.push(s);
        }
        const repeatedString = repeatedStringArr.join('');
        console.log(repeatedString);

        for (let i = 0; i < n; i++) {
            if (repeatedString.charAt(i) === "a") {
                countA += 1;
            }
        }
    }

    return countA;
}

/**
 * 2D Array - DS.
 *
 * @param arr 2D Array
 * @returns {number} returns the highest number found
 */
function test_5(arr) {
    let resultArr = [];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let result = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] // row 1
                + arr[i + 1][j + 1] // row 2
                + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]; // row 3
            resultArr.push(result);
        }
    }

    return Math.max(...resultArr);
}

/**
 * Left Rotation.
 *
 * @param a sorted array with numbers
 * @param d amount of rotations
 * @returns {*} returns the array which values has been rotated
 */
function test_6(a, d) {
    for (let i = 0; i < d; i++) {
        a.push(a[0]);
        a.shift();
    }

    return a;
}

/**
 *  * New Year Chaos.
 *
 * @param q array of numbers
 */
function test_7(q) {
    let counter = 0;
    let currentPosition = q.length - 1;
    let bribes;

    while (currentPosition >= 0) {
        const current = q[currentPosition];
        const orderPosition = currentPosition + 1;
        const briberPosition = current - 2;
        bribes = current - orderPosition;

        if (bribes >= 3) {
            console.log("Too chaotic");
            return;
        }

        for (let comparePosition = Math.max(0, briberPosition);
             comparePosition < currentPosition;
             comparePosition++) {
            const compare = q[comparePosition];

            if (compare > current) {
                counter++;
            }
        }

        currentPosition--;
    }

    console.log(counter);
}
