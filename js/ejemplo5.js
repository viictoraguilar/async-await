function servirCroquetas() {
  return new Promise((resuelta, rechazada) => {
    const error = false
    setTimeout(() => {
      if(!error) {
        resuelta('Las croquetitas se sirvieron correctamente en el plato')
      } else {
        rechazada('Error al servir, se acabaron las croquetitas')
      }
    }, 4000);
  })
}

async function servirCroquetasDeLosGatos() {
  try {
    console.log('Sentaditos gatitos para poder servirles sus croquetitas')
    const croquetas = await servirCroquetas()
    console.log('Gracias por esperar ches gatos')
    console.log(croquetas)
  } catch (error) {
    console.log(error)
  }
}

servirCroquetasDeLosGatos()