const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

const morseToChar = {
    '**********': ' ',
};
for (const morseKey in MORSE_TABLE) {
    if (MORSE_TABLE.hasOwnProperty(morseKey)) {
        let newKey = morseKey.replace(/\./g, '10').replace(/-/g, '11'); 
        while (newKey.length < 10) {
            newKey = '0' + newKey; 
        }
        morseToChar[newKey] = MORSE_TABLE[morseKey];
    }
}

const chunks = expr.match(/.{10}/g);
const decoded = chunks.map(chunk => {
    if (chunk in morseToChar) {
        return morseToChar[chunk];
    }
    return '';
});

return decoded.join('');
}

module.exports = {
    decode
}