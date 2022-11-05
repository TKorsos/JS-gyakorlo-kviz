
// első feladat helyes megfejtése változóba deklarálása
const elsoFeladat = document.getElementById("megoldas1").innerHTML;
let tipp;

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

// válaszokra kattintás
// válasz után inaktívak legyenek a "gombok", de írja ki hogy talált vagy nem
document.getElementById("megoldas1").addEventListener('click', function(){
    tipp = document.getElementById('megoldas1').innerHTML;
    ellenorzo();
});

document.getElementById("megoldas2").addEventListener('click', function(){
    tipp = document.getElementById('megoldas2').innerHTML;
    ellenorzo();
});

document.getElementById("megoldas3").addEventListener('click', function(){
    tipp = document.getElementById('megoldas3').innerHTML;
    ellenorzo();
});

document.getElementById("megoldas4").addEventListener('click', function(){
    tipp = document.getElementById('megoldas4').innerHTML;
    ellenorzo();
});

// lejárati idő?
let ido = 10;
ido *= 1000;

(function timer() {
    const lejaratiIdo = new Date(ido).toLocaleTimeString(navigator.language, {second: "2-digit"});

    document.getElementById("eredmeny").innerHTML = lejaratiIdo;

    ido -= 1000;
    
    if(ido >= 0) {
        setTimeout(() => timer(), 1000);
        // lejárat után inaktívak legyenek a "gombok"
    }
    else {
        document.getElementById("eredmeny").innerHTML = "Sajnos lejárt az időd"
        document.getElementById("eredmeny").style.color = "red";
    }

}());