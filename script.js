const comprarCasco = new Promise((resolve, reject)=>{
    setTimeout(()=>{
                resolve("comprar casco")
    }, 1000)
})

const comprarGuanates = new Promise((resolve, reject)=>{
    setTimeout(()=>{
                resolve("comprar guantes")
    }, 2000)
})

const irPaseo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
                 resolve("paseo en bici")
    }, 8000)
})

const pasearEnBici = () => {
    comprarCasco
        .then(infoCasco=>{
            console.log(infoCasco)
            return comprarGuanates;
        })
        .then(infoGuantes => {
             console.log(infoGuantes)
             return irPaseo;
        })
        .then(infoPaseo => {
             console.log(infoPaseo)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=> console.log("Proceso finalizado"))
}

pasearEnBici();