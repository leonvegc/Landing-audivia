/* =============================================
   main.js — Modo oscuro / claro con localStorage
   ============================================= */

/* Referencia al botón de cambio de tema */
const btnTema = document.getElementById('btn-tema');

/* Aplica el tema recibido: agrega o quita la clase "dark" en <body>
   y actualiza el ícono y el aria-label del botón */
function aplicarTema(tema) {
  if (tema === 'oscuro') {
    document.body.classList.add('dark');
    btnTema.textContent = '☀️';
    btnTema.setAttribute('aria-label', 'Activar modo claro');
  } else {
    document.body.classList.remove('dark');
    btnTema.textContent = '🌙';
    btnTema.setAttribute('aria-label', 'Activar modo oscuro');
  }
}

/* Al cargar la página: leer el tema guardado en localStorage y aplicarlo.
   Si no hay nada guardado, se usa "claro" por defecto. */
const temaGuardado = localStorage.getItem('tema') || 'claro';
aplicarTema(temaGuardado);

/* Evento clic: alterna entre claro y oscuro, guarda en localStorage */
btnTema.addEventListener('click', function () {
  const temaActual = localStorage.getItem('tema') || 'claro';
  const nuevoTema = temaActual === 'claro' ? 'oscuro' : 'claro';
  localStorage.setItem('tema', nuevoTema);
  aplicarTema(nuevoTema);
});
