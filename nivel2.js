

export function juegoTriviaNivelDos(preguntas) {
    let puntaje = 0;
  
    console.log("Bienvenido al nivel 2");
  
    for (let i = 0; i < preguntas.length; i++) {
      const respuestaUsuario = prompt(preguntas[i][0]);
      if (respuestaUsuario.toLowerCase() === preguntas[i][1].toLowerCase()) {
        puntaje++;
        console.log('¡Respuesta correcta! Tu puntaje es = ' + puntaje);
      } else {
        console.log('Respuesta incorrecta. Tu puntaje es = ' + puntaje);
      }
    }
  
    console.log(`Tu puntaje final es ${puntaje} de ${preguntas.length}. ¡Gracias por jugar!`);
  }
  
  const preguntasNivel2 = [
    ['¿A qué edad murió Juice Wrld?', '21 años'],
    ['¿Qué banda creó la canción "Bohemian Rhapsody"?', 'Queen'],
    ['¿Quién de estos artistas se dedica al género Trap?', 'Lil Xan'],
    ['¿En qué año se estrenó la canción "Someone like you" de Adele?', '2011'],
    ['Actualmente, ¿qué artista tiene el mayor número de premios Grammy?', 'Beyonce']
  ];
  
  juegoTriviaNivelDos(preguntasNivel2);