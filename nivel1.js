


export function juegoTrivia(preguntas) {
  let puntaje = 0;

  for (let i = 0; i < preguntas.length; i++) {
    const respuestaUsuario = prompt(preguntas[i][0]);
    if (respuestaUsuario.toLowerCase() === preguntas[i][1].toLowerCase()) {
      puntaje++;
      console.log('¡Respuesta correcta! tu puntaje es = ' + puntaje);
    } else {
      console.log('Respuesta incorrecta. , tu puntaje es = ' + puntaje);
    }
  }

  console.log(`Tu puntaje final es ${puntaje} de ${preguntas.length}. Ahora pasaras al nivel 2`);
}

const preguntas = [
  ['¿Que musico reconocido tiene como apodo "El principe de las tinieblas"? Ozzy Osbourne // Roger Waters // Marilyn Manson ', 'Ozzy Osbourne'],
  ['¿A que banda pertenece la cancion "Another brick in the wall"? 30 Seconds to mars //Pink Floyd //Rammstein  ', 'Pink Floyd'],
  ['¿En que año murio Gustavo Cerati? 2012 // 2013 // 2014 ', '2014'],
  ['¿Quien fue el lider de la banda Pescado rabioso? Spinetta // Cerati // Charly Garcia  ', 'Spinetta'],
  ['¿Que famosa artista pop se rapo la cabeza en los 2000 para evitar que le hagan un analisis de droga? Amy lee // Britney spears // Lady Gaga  ', 'Britney spears'],
  ['¿De que artista se trata la pelicula "8 Miles"? Eminem // 2pac // Biggie ', 'Eminem'],
  ['¿A quien se le adjudica el mito de sacarse una costilla? Marilyn manson // Till Lidenman // Justin Bieber ', 'Marilyn manson'],
  ['¿El vocalista de que banda murio en un accidente en motocicleta? Rammstein // Cannibal Corpse // Suicide Silence ', 'Suicide Silence'],
  ['¿Que artista argentino se tiro de un 7mo piso a la pileta? Pity Alvares // Charly Garcia // Indio Solari ', 'Charly Garcia'],
  ['¿Que conocido actor tambien forma parte de la banda 30 Seconds to mars? Jared leto // Chester Bennington //Justin Timberlake ', 'Jared leto']
];

juegoTrivia(preguntas);
