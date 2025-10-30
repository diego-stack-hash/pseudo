
const misterios = document.querySelectorAll('.misterio');
const clave = document.getElementById('clave');

misterios.forEach(m => {
  m.addEventListener('click', () => {
    misterios.forEach(i => i.classList.remove('activo'));
    m.classList.add('activo');
    clave.textContent = `🔍 El misterio de ${m.dataset.nombre} — Clave: ${m.dataset.clave}`;
  });
});

const boton = document.querySelector('.boton');
const mensaje = document.getElementById('mensajeCurioso');
let modo = false;

const audioAmbiental = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
audioAmbiental.loop = true;
audioAmbiental.volume = 0.15; 

boton.addEventListener('click', () => {
  modo = !modo;
  document.body.classList.toggle('modo-misterioso', modo);

  if (modo) {
    mensaje.textContent = "“A veces el miedo no viene de lo que ves, sino de lo que imaginas…”";
    audioAmbiental.play();
  } else {
    mensaje.textContent = "“El silencio también puede gritar.”";
    audioAmbiental.pause();
  }

  mensaje.classList.add('visible');
  setTimeout(() => mensaje.classList.remove('visible'), 6000);
});

const verificar = document.getElementById('verificarClave');
const input = document.getElementById('inputClave');
const resultado = document.getElementById('resultado');

verificar.addEventListener('click', () => {
  const valor = input.value.trim().toUpperCase();
  let texto = "";

  switch(valor) {
    case "OCÉANO01":
      texto = "Dicen que la Atlántida no se hundió... simplemente cambió de dimensión. Algunos registros antiguos sugieren que civilizaciones avanzadas la habitaban y que su conocimiento se perdió en el tiempo.";
      break;
    case "BERMUDA22":
      texto = "Los pilotos del Triángulo de las Bermudas hablaban de un túnel de luz y tiempo... Testimonios recientes siguen describiendo desapariciones misteriosas y extraños fenómenos meteorológicos que no tienen explicación.";
      break;
    case "NAZCA33":
      texto = "Las líneas de Nazca podrían ser un mapa estelar... pero ¿hacia qué destino? Se cree que tenían un significado ceremonial o astronómico, y aún hoy los científicos debaten su propósito exacto.";
      break;
    case "NESS44":
      texto = "El lago Ness fue vaciado en 2025, pero los sensores aún registran movimiento... Algunas fotografías muestran siluetas que desafían toda lógica, y los locales continúan relatando historias de encuentros extraños.";
      break;
    case "FRÍO55":
      texto = "Los cuerpos del Paso Dyatlov mostraban radiación... ¿una prueba nuclear o algo más? Los diarios encontrados y los relatos de testigos generan más preguntas que respuestas, manteniendo el misterio vivo hasta hoy.";
      break;
    default:
      texto = "Esa clave no existe... o quizás aún no estás listo para conocer el secreto.";
  }

  resultado.textContent = texto;
  resultado.classList.add("mostrar");
});


