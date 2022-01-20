const transpose = require ('../../d2/matrix_transposition');

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (x of horizontalJoin) {
        if (x.includes(word)) return true
    }
    const transposedArray = transpose(letters);
    const verticalJoin = transposedArray.map(ls => ls.join(''))
    for (y of verticalJoin) {
        if (y.includes(word)) return true
    }
    return false;
}


module.exports = wordSearch