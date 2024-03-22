/* 
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

 */

/* Arreglo  */

document.addEventListener('DOMContentLoaded', function() { 
  const baseEndpoint = 'https://api.github.com';
  const usersEndpoint = `${baseEndpoint}/users`;
  const $n = document.querySelector('.name');
  const $b = document.querySelector('.blog'); // Cambiado de #blog a .blog 
  const $l = document.querySelector('.location'); // Agregado selector para .location
  // Verifica si los elementos del DOM están disponibles antes de llamar a displayUser
  if ($n && $b && $l) {
    displayUser('stolinski').catch(handleError);
  } else {
    console.error('Uno o más elementos del DOM no encontrados');
  }
  async function displayUser(username) {
    $n.textContent = 'Cargando...';
    try {
      const response = await fetch(`${usersEndpoint}/${username}`);
      if (!response.ok) {
        throw new Error('Hubo un problema al obtener los datos del usuario.');
      }
      const data = await response.json();
      $n.textContent = data.name || 'Nombre no disponible';
      $b.textContent = data.blog || 'Blog no disponible';
      $l.textContent = data.location || 'Ubicación no disponible';
    } catch (error) {
      handleError(error);
    }
  }
  function handleError(err) {
    console.error('OH NO!');
    console.error(err);
    if ($n) {
      $n.textContent = `Algo salió mal: ${err.message}`;
    } else {
      console.error('Elemento .name no encontrado en el DOM');
    }
  }
});
