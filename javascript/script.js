const iconsArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//array corrispondenti alle categorie degli oggetti dell'array principale
const arrAnimal = iconsArray.filter(arrAnimal => arrAnimal.type === 'animal');
console.table(arrAnimal); //DEBUG
const arrVegetable = iconsArray.filter(arrAnimal => arrAnimal.type === 'vegetable');
console.table(arrVegetable); //DEBUG
const arrUser = iconsArray.filter(arrAnimal => arrAnimal.type === 'user');
console.table(arrUser); //DEBUG

//creo elementi option in modo dinamico
function optionElement() {
	return `
	<option value="all">All</option>
	<option value="animal">Animal</option>
	<option value="vegetable">Vegetable </option>
	<option value="person">persona</option>`
}

//funzione che crea le card in base al parametro Array
const cardContainer = document.querySelector('.card__container');
function createElement(myArray) {
	myArray.forEach(element => {
		cardContainer.innerHTML += `
		<div class="card">
		<i class="fa-solid fa-${element.name}" style="color: ${element.color}"></i>
		<p>${element.name}</p>
		</div>` 
	});
}

// inserisco gli option all'interno di select
let filterSelect = document.querySelector('#filter');
filterSelect.innerHTML = optionElement();

//imposto la visualizzazione di default su all (tutti gli elementi dell'Array originale)
createElement(iconsArray);

//cambio il contenuto della pagina in base al filtro scelto
filterSelect.addEventListener('change', () => {
	let valueOfFilter = filterSelect.options[filterSelect.selectedIndex].value;
	
	cardContainer.innerHTML = '';
	if (valueOfFilter === 'all'){
		createElement(iconsArray);

	} else if (valueOfFilter === 'animal') {
		createElement(arrAnimal);

	} else if (valueOfFilter === 'vegetable') {
		createElement(arrVegetable)

	} else if (valueOfFilter === 'person') {
		createElement(arrUser);

	}
	console.log(valueOfFilter);
})