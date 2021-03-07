let str = document.getElementById('haiku');
function count() {
    str.match(/-/gi).length;
}
let haiku = [
    ["act", "blonde", "boot"],
    ["pur-ple", "mon-day", "hap-py"],
    ["fam-il-y", "cho-co-late", "ach-ieve-ment"],
    ["i-den-ti-cal", "a-mer-i-ca", "lit-er-a-ture"],
    ["a-bom-i-na-tion", "cal-i-for-n-ia", "un-con-ven-ti-onal"],
]

function addWord() {
    haiku.push(document.getElementById("haikuGen"));
    if (count = 0) {
        haiku.push(haiku[0]);
    }
    if (count = 1) {
        haiku.push(haiku[1]);
    }
    if (count = 2) {
        haiku.push(haiku[2]);
    }
    if (count = 3) {
        haiku.push(haiku[3]);
    }
    if (count = 4) {
        haiku.push(haiku[4]);
    }
    else
        return("Invalid Number of Syllables");
}


function generateHaiku() {
    let word0 = (Math.floor(Math.random() * haiku.length) % haiku[0].length);
    let word1 = (Math.floor(Math.random() * haiku.length) % haiku[1].length);
    let word2 = (Math.floor(Math.random() * haiku.length) % haiku[2].length);
    let word3 = (Math.floor(Math.random() * haiku.length) % haiku[3].length);
    let word4 = (Math.floor(Math.random() * haiku.length) % haiku[4].length);


    let poem = document.getElementById("poem").innerHTMl = haiku[word1] + " " + haiku[word0] + " " + haiku[word1] + "<br>"
    + haiku[word4] + " " + haiku[word1] + "<br>" + haiku[word3] + " " + haiku[word0];
}