// Copies

function copyDecimal() {

    let copyText = document.getElementById("decimalForm");
    copy(copyText)
}

function copyHexa() {

    let copyText = document.getElementById("hexadecimalForm");
    copy(copyText)
}

function copyBin() {

    let copyText = document.getElementById("binForm");
    copy(copyText)
}

function copyOcta() {

    let copyText = document.getElementById("octalForm");
    copy(copyText)
}

function copy(copyText) {
    copyText.prevent
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// Conversion
//Decimal - To...
function decaHex(decimal) {
    return parseInt(decimal, 10).toString(16)
}

function decaBin(decimal) {
    return parseInt(decimal, 10).toString(2)
}

function decaOct(decimal) {
    return parseInt(decimal, 10).toString(8)
}

//...To -  Decimal

function hexaDec(hexa) {
    return parseInt(hexa, 16);
}

function binDec(binary) {
    return parseInt(binary, 2);
}

function octDec(octal) {
    return parseInt(octal, 8);
}

let dec = document.getElementById("decimalForm");
let hexa = document.getElementById("hexadecimalForm");
let bin = document.getElementById("binForm");
let octal = document.getElementById("octalForm");

document.getElementById("decimalForm").addEventListener('change', function () {
//OK
    hexa.value = decaHex(dec.value).toUpperCase();
    bin.value =  decaBin(dec.value);
    octal.value =  decaOct(dec.value);

});


document.getElementById("hexadecimalForm").addEventListener('change', function () {
//Ok
   
    dec.value = hexaDec(hexa.value);
    bin.value =  decaBin(dec.value);
    octal.value =  decaOct(dec.value);
});



document.getElementById("binForm").addEventListener('change', function () {

    dec.value = binDec(bin.value);
    hexa.value = decaHex(dec.value).toUpperCase();
    octal.value =  decaOct(dec.value);
});


document.getElementById("octalForm").addEventListener('change', function () {

    dec.value = octDec(octal.value);
    hexa.value = decaHex(dec.value).toUpperCase();
    bin.value =  decaBin(dec.value);
});
