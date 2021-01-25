function descargarPlatillos() {

  return new Promise((resolve, reject) => {
    const error = true

    setTimeout(() => {
      if(!error) {
        resolve('Los platillos se descargaron correctamente')
      } else {
        reject('Error al descargar platillos')
      }
    }, 5000);
  })

}

//Async await
async function ejecutar() {
  try {
    console.log('Esto se ejecuta y no espera el termino de la promesa')
    const platillos = await descargarPlatillos()

    console.log('Ejecutado una vez que terminó la promesa de descargarPlatillos')
    console.log(platillos)
  } catch (error) {
    console.log(error)
  }
}

ejecutar()