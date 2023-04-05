// Ejercicio 1

const sortAndFillNumbers = (arr) => {
    if (arr.find((el) => typeof el !== 'number'))
        return 'Incorrecto, ingrese un array de números';

    const sortedArr = arr.sort((a, b) => b - a);
    const numbersBetween = [];

    for (let i = sortedArr[0]; i > sortedArr[1]; i--) {
        if (i === sortedArr[0]) continue;

        numbersBetween.push(i);
    }
    return numbersBetween;
};

console.log(sortAndFillNumbers([10, 2]));

// Ejercicio 2
const sortArr = (arr, order) => {
    let sortedArr = [];
    if (order === 'Asc') {
        sortedArr = arr.sort((a, b) => a - b);
    } else {
        sortedArr = arr.sort((a, b) => b - a);
    }

    return sortedArr;
};

console.log(sortArr([5, 2, 7, 10], 'Asc'));

// Ejercicio 3

const calcWhoWinMoreTimes = (arr) => {
    let player1 = 0;
    let player2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 'S' && arr[i][1] === 'P') {
            player1++;
        } else if (arr[i][0] === 'R' && arr[i][1] === 'S') {
            player1++;
        } else if (arr[i][0] === 'P' && arr[i][1] === 'R') {
            player1++;
        } else if (arr[i][0] === arr[i][1]) {
            continue;
        } else {
            player2++;
        }
    }
    console.log(player1, player2);
    if (player1 === player2) return 'draw';

    return player1 > player2 ? 'player1' : 'player2';
};

console.log(
    calcWhoWinMoreTimes([
        ['R', 'S'],
        ['S', 'R'],
        ['P', 'S'],
        ['S', 'P'],
        ['R', 'S'],
        ['S', 'R'],
        ['S', 'R']
    ])
);

//Ejercicio 5

const calcMilisecondsFromDate = (days, hours, minutes, seconds) => {
    return (
        seconds * 1000 +
        minutes * 60 * 1000 +
        hours * 60 * 60 * 1000 +
        days * 24 * 60 * 60 * 1000
    );
};

console.log(calcMilisecondsFromDate(1, 24, 60, 60));

// Ejercicio 6

const convertFirstLetterToUppercase = (str) => {
    const alphabet = {
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D',
        e: 'E',
        f: 'F',
        g: 'G',
        h: 'H',
        i: 'I',
        j: 'J',
        k: 'K',
        l: 'L',
        m: 'M',
        n: 'N',
        o: 'O',
        p: 'P',
        q: 'Q',
        r: 'R',
        s: 'S',
        t: 'T',
        u: 'U',
        v: 'V',
        w: 'W',
        x: 'X',
        y: 'Y',
        z: 'Z'
    };
    let newWord = str;
    let newWordFirstLetter = newWord[0];
    newWordFirstLetter = alphabet[newWordFirstLetter];
    return newWordFirstLetter + newWord.slice(1);
};

console.log(convertFirstLetterToUppercase('santiago'));
