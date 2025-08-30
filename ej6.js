const traficoRed = {
"08:00": 1250, // MB transferidos
"09:00": 1870,
"10:00": 2100,
"11:00": 1950,
"12:00": 1600,
"13:00": 1300,
"14:00": 1700,
"15:00": 2200,
"16:00": 1800,
"17:00": 1500
};

let total=0;

for (let hora in traficoRed) {
    total+=traficoRed[hora];
}
console.log("el total de datos es de ", total);

let maxhora= "";
let maxmb=0;

for (let hora in traficoRed) {
    if (traficoRed[hora]>maxmb) {
        maxmb = traficoRed[hora],
        maxhora = hora
    }
}
console.log("mayor trafico: ", maxhora, maxmb);