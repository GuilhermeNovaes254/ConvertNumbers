// Copies

function copyDecimal() {

    let copyText = document.getElementById("decimalForm");
    return copyText;
}

function copyHexa() {

    let copyText = document.getElementById("hexadecimalForm");
    hexaDec(copyText.value)
    return copyText;
}

function copyBin() {

    let copyText = document.getElementById("binForm");
    return copyText;
}

function copyOcta() {

    let copyText = document.getElementById("octalForm");
    return copyText;
}

function copy(copyText){
    copyText.prevent
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

// Conversion
//Decimal - To...
function decaHex(decimal){
    return decimal.toString(16)
}

function decaBin(decimal){
    return decimal.toString(2)
}

function decaOct(decimal){
    return decimal.toString(8)
}

//...To -  Decimal

function hexaDec(hexadecimal){
    return parseInt(hexadecimal, 16);
}

function binDec(binary){
    return parseInt(binary, 2);
}

function octDec(octal){
    return parseInt(octal, 8);
}
let id  = 0
document.addEventListener('keyup',  function() {
    id++
    console.log(id)
});