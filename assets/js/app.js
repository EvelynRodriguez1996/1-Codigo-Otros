const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//añadi un punto que faltaba antes de la letra n de name por que es una clase
const $b = document.querySelector('.blog');//sustitui "#" por "." porque es una clase
const $l = document.querySelector('.location');

//Cambie de lugar la palabra async y la coloque antes de function ya que solo se puede usar await si es una funcion asincrona
async function displayUser(username) {
  
  $n.textContent = 'cargando...';
  // try {
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();  // Escribí  "await response.json()" para esperar la respuesta del servidor y guardar la informacion en la constante "data"
  console.log(data); 

  $n.textContent = data.name;
  $b.textContent = data.blog; 
  $l.textContent = data.location;
} //La sintaxis fue modificada

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` // Coloque "$" antes de la n.
}

displayUser('stolinski').catch(handleError);
/* Este codigo se utiliza para llamar a la función "displayUser" pasando como argumento el nombre 'stolinski'. Luego, si se produce un error durante la ejecución de la función 'handleError' para manejar el error.*/