
// első feladat helyes megfejtése változóba deklarálása
const elsoFeladat = document.getElementById("megoldas1").innerHTML;
let tipp;
let ido = 10;
let test;

// ellenőrző function hogy jóra vagy rosszra kattintott a felhasználó
function ellenorzo() {
    if(tipp == elsoFeladat) {
        document.getElementById("eredmeny").innerHTML = "Eltaláltad";
        document.getElementById("eredmeny").style.color = "lime";
    }
    else {
        document.getElementById("eredmeny").innerHTML = "Rossz válasz";
        document.getElementById("eredmeny").style.color = "red";
    }
}

// válaszokra kattintás utana inaktívvá váljanak
function removeEvent() {
    document.getElementById("megoldas1").removeEventListener('click', megold1);
    document.getElementById("megoldas2").removeEventListener('click', megold2);
    document.getElementById("megoldas3").removeEventListener('click', megold3);
    document.getElementById("megoldas4").removeEventListener('click', megold4);
}

const megold1 = function megold1() {
    clearTimeout(test);
    tipp = this.innerHTML;
    ellenorzo();
    removeEvent();
}
document.getElementById("megoldas1").addEventListener('click', megold1);

const megold2 = function megold2() {
    clearTimeout(test);
    tipp = this.innerHTML;
    ellenorzo();
    removeEvent()
}
document.getElementById("megoldas2").addEventListener('click', megold2);

const megold3 = function megold3() {
    clearTimeout(test);
    tipp = this.innerHTML;
    ellenorzo();
    removeEvent()
}
document.getElementById("megoldas3").addEventListener('click', megold3);

const megold4 = function megold4() {
    clearTimeout(test);
    tipp = this.innerHTML;
    ellenorzo();
    removeEvent()
}
document.getElementById("megoldas4").addEventListener('click', megold4);

// lejárati idő?
ido *= 1000;

(function timer() {
    const lejaratiIdo = new Date(ido).toLocaleTimeString(navigator.language, {second: "2-digit"});

    document.getElementById("eredmeny").innerHTML = lejaratiIdo;

    ido -= 1000;
    
    if(ido >= 0) {
        // test változóba tettem clearTimeouthoz
        test = setTimeout(() => timer(), 1000);
    }
    else {
        document.getElementById("eredmeny").innerHTML = "Sajnos lejárt az időd"
        document.getElementById("eredmeny").style.color = "red";
        removeEvent()
    }

}());

