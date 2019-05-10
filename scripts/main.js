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

    // Dictionaries and HashMaps
    // const magazine = ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"];
    // const note = ["ive", "got", "some", "coconuts"];
    // this.test_8(magazine, note); // Output should be "No"

    // Two String
    // const s1 = "coconuts";
    // const s2 = "columbia";
    // console.log(this.test_9(s1, s2));

    // Count Triplets
    // const arr = [1, 2, 2, 4];
    // const r = 2; // Output should be 2
    // const arr = [1, 3, 9, 9, 27, 81];
    // const r = 3; // Output should be 6
    // console.log(this.test_10(arr, r));

    // Mark and Toys
    // const k = 50;
    // const prices = [1, 12, 5, 111, 200, 1000, 10];
    // console.log(test_11(prices, k)); // Output should be 4
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

/**
 * HashTables: Ransom Note.
 *
 * @param magazine the magazine to copy the words
 * @param note the handwritten notes to hide
 */
function test_8(magazine, note) {
    if (magazine.length >= 1 && magazine.length <= 30000 &&
        note.length >= 1 && note.length <= 30000) {
        let noteMap = new Map();

        for (let i = 0; i < note.length; i++) {
            const word = note[i];

            if (word.length >= 1 && word.length <= 5 && /^[a-zA-Z]+$/.test(word)) {
                const index = magazine.indexOf(word);

                if (index !== -1) {
                    if (!noteMap.has(word)) {
                        noteMap.set(word, true);
                    }
                } else {
                    break;
                }
            } else {
                break;
            }
        }
        let magazineIsValid = magazineValidation(magazine);

        if (note.length === noteMap.size && magazineIsValid) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    } else {
        console.log("No");
    }
}

/**
 * Helper Function for test_8().
 *
 * @param magazine the magazine to copy the words
 * @returns {boolean}
 */
function magazineValidation(magazine) {
    for (let mName of magazine) {
        if (mName.length >= 1 && mName <= 5 && !/^[a-zA-Z]+$/.test(mName)) {

            return false;
        }
    }

    return true;
}

/**
 * Two Strings.
 *
 * @param s1 substring to find a pair with substring of s2
 * @param s2 substring to find a pair with substring of s1
 */
function test_9(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        const letter = s1.charAt(i);
        if (s2.includes(letter)) {

            return "YES"
        }
    }

    return "NO";
}

/**
 * Count Triplets.
 *
 * @param arr array of triplets
 * @param r multiplication
 * @returns {number}
 */
function test_10(arr, r) {
    let t2 = new Map();
    let t3 = new Map();
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        result += t3.has(a) ? t3.get(a) : 0;

        if (i < arr.length - 1) {
            if (t2.has(a)) {
                t3.set(a * r, t3.has(a * r) ? t3.get(a * r) + t2.get(a) : t2.get(a));
            }
            t2.set(a * r, t2.has(a * r) ? t2.get(a * r) + 1 : 1);
        }
    }

    return result;

    // let tripletsArray = [];
    //
    // for (let i = 0; i < arr.length - 2; i++) {
    //     for (let j = 1; j < arr.length - 1; j++) {
    //         for (let k = 2; k < arr.length; k++) {
    //             if ((arr[i] * r) === arr[j] && (r * arr[j]) === arr[k] &&
    //                 arr[i] < arr[j] && arr[i] < arr[k] && arr[j] < arr[k]) {
    //                 tripletsArray.push(arr[i].toString() +  arr[j].toString() +  arr[k].toString());
    //             }
    //         }
    //     }
    // }
    //
    // return tripletsArray.length;
}

/**
 * Mark and Toys.
 *
 * @param prices toy prices
 * @param k amount of cash
 * @returns {number}
 */
function test_11(prices, k) {
    let cash = k;
    let count = 0;

    prices.sort((a, b) => a - b);
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        if (price < cash) {
            cash -= price;
            count += 1;
        } else {
            break;
        }
    }

    return count;
}
