const conexiones = [
{ id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" },
{ id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" },
{ id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" },
{ id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" },
{ id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" },
{ id: 6, origen: "192.168.1.6", destino: "192.168.1.10", protocolo: "FTP" },
{ id: 7, origen: "192.168.1.9", destino: "192.168.1.15", protocolo: "SSH" },
{ id: 8, origen: "192.168.1.4", destino: "192.168.1.11", protocolo: "HTTP" }
];

//manera 1 

let conexioneshttp = conexiones.filter(conexion=> conexion.protocolo==="HTTP");

contadorhttp=0
conexioneshttp.forEach(conexion => {
    contadorhttp=contadorhttp+1
})
console.log(conexioneshttp, contadorhttp);

let conexionesssh = conexiones.filter(conexion=> conexion.protocolo==="SSH");

contadorssh=0
conexionesssh.forEach(conexion => {
    contadorssh=contadorssh+1
})
console.log(conexionesssh, contadorssh);

let conexionesftp = conexiones.filter(conexion=> conexion.protocolo==="FTP");

contadorftp=0
conexionesftp.forEach(conexion => {
    contadorftp=contadorftp+1
})
console.log(conexionesftp, contadorftp);

let conexioneshttps = conexiones.filter(conexion=> conexion.protocolo==="HTTPS");

contadorhttps=0
conexioneshttps.forEach(conexion => {
    contadorhttps=contadorhttps+1
})

//manera 2

conexionesProtocolo = {};

conexiones.forEach(conexion=> {
    const protocolo=conexion.protocolo;
    if (conexionesProtocolo[protocolo]) {
        conexionesProtocolo[protocolo]+=1
    }
    else{conexionesProtocolo[protocolo]=1} 
});
console.log(conexionesProtocolo);