import './MyPromise';
import './algorithms';
import './binaryTree';
import './simple';

/** 1
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
 */

export const alphabetPosition = str => {
    const offset = 64;

    return str
        .split('')
        .filter(c => c.toLowerCase() != c.toUpperCase())
        .map(c => c.toUpperCase().charCodeAt(0) - offset)
        .join(' ');
};

/** 2
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
 */
export const sumTwoSmallestNumbers = numbers => {
    const sorted = numbers
    .sort((a, b) => a - b);

    return sorted[0] + sorted[1];
};

/** 3
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

export const order = words => {
    return words
        .split(' ')
        .sort((a, b) => {
            const getInt = word => {
                for(let i = 0; i < str.length; i++) {
                    if(!isNaN(word[i])) {
                        return word[i];
                    }
                }

                return 0;
            };

            return getInt(a) - getInt(b);
        })
        .join(' ');
};

/** 4
 Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

export const findShort = words => {
    return words
        .split(' ')
        .sort((a, b) => {
            return a.length > b.length;
        })[0].length;
};

/** 5
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

export const spinWords = words => {
    return words
        .split(' ')
        .map(word => {
            return word.length < 5
            ? word
            : word.split('').reverse().join('');
        })
        .join(' ');
};

/** 6
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

export const rowSumOddNumbers = n => {
    if(n === 1) return 1;

    const first = n * (n - 1) + 1;

    return (first * n) + (n * (n - 1));
};

/** 7
You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect
*/

export const findNextSquare = sq => {
    const sqrt = Math.sqrt(sq);

    switch(true) {
        case Number.isInteger(sqrt):
            return Math.pow(sqrt + 1, 2);
        default: 
            return -1;
    }
};

/** 8
 This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

export const accum = s => {
    return s
        .split('')
        .map((c, i) => {
            let str = '';

            for(let j = 0; j < i + 1; j++) {
                if(j === 0) {
                    str = str.concat('', c.toUpperCase());
                }else {
                    str = str.concat('', c.toLowerCase()); 
                }
            }

            return str;
        })
        .join('-');
};

/** 9
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

#Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output
The middle character(s) of the word represented as a string.
*/

export const getMiddle = s => {
    const length = s.length;
    if(length === 1) return s;

    const isEven = length % 2 === 0;
    const first = isEven ? (length / 2) - 1 : (length - 1) / 2;
    const second = isEven ? first + 2 : first + 1;

    return s.substring(first, second);
};

/** 10
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/

export const squareDigits = num => {
    return parseInt(num
        .toString()
        .split('')
        .map(n => Math.pow(n, 2).toString())
        .join(''));
};

/** 11
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers ar
*/

export const iqTest = numbers => {
    const arr = numbers.split(' ');
    if(arr.length === 1) return 1;

    const isEven = n => n % 2 === 0;
    let even = [], odd = [];
    for(let i = 0; i < arr.length; i++) {
        isEven(arr[i]) ? even.push(i + 1) : odd.push(i + 1);

        if(even.length > 1 && odd.length > 0) {
            return odd[0];
        }

        if(odd.length > 1 && even.length > 0) {
            return even[0];
        }
    }

    return 1;
};

/** 12
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants
At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213
It will need 3 entire years.

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
the function nb_year should return n number of entire years needed to get a population greater or equal to p.
aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/

export const nbYear = (p0, percent, aug, p) => {
    let years = 0, pTemp = p0;

    while(pTemp < p) {
        pTemp += parseInt(pTemp * percent / 100) + aug;
        years++;
    }

    return years;
}; 

/**
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
The string has a length greater or equal to one and contains only letters from ato z.

#Examples:
s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"
*/

export const printerError = s => {
    return `${
        s.toLowerCase()
        .split('')
        .filter(c => c.charCodeAt(0) > 'm'.charCodeAt(0))
        .length
    }/${s.length}`;

    // const sLower = s.toLowerCase();
    // let errorsCount = 0;

    // for(let i = 0; i < sLower.length; i++) {
    //     const c = sLower[i].charCodeAt(i);
    //     const mCode = 'm'.charCodeAt(0);

    //     if(c > mCode) {
    //         errorsCount++;
    //     }
    // }

    // return `${errorsCount}/${sLower.length}`;
};

/**
You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
Note
consecutive strings : follow one after another without an interruption
*/

export const longestConsec = (strarr, k) => {
    if(strarr.length === 0 || k <= 0) return '';

    let longest = '';
    for(let i = 0; i <= strarr.length - k; i++) {
        const str = strarr.slice(i, i + k).join('');

        if(str.length > longest.length) {
            longest = str;
        }
    }

    return longest;
};