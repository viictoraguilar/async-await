function actualizarTweets() {
  return new Promise((resuelta, rechazada) => {
    const error = false

    setTimeout(() => {
      if(!error) {
        resuelta('Los tweets se actualizaron correctamente')
      } else {
        rechazada('Error al actualizar los tweets')
      }
    }, 5000);
  })
}

const ejecutarActualizacion = async () => {
  try {
    console.log('Bienvenido vamos a actualizar los Tweets')
    const tweets = await actualizarTweets()
    console.log('Gracias por esperar')
    console.log(tweets)
  } catch(error) {
    console.log(error)
  }
}

ejecutarActualizacion()
