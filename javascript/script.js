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

const cardContainer = document.querySelector('.card__container');
let filterSelect = document.querySelector('#filter');

//creo elementi option (non do fino a che punto abbia senso...)
const filterAnimalOption = document.createElement('option');
filterAnimalOption.value = 'Animal';
filterAnimalOption.innerHTML = 'Animal';

const filterVegetableOption = document.createElement('option');
filterVegetableOption.value = 'Vegetable';
filterVegetableOption.innerHTML = 'Vegetable';

const filterUserOption = document.createElement('option');
filterUserOption.value = 'User';
filterUserOption.innerHTML = 'User';

filterSelect.append(filterAnimalOption, filterVegetableOption, filterUserOption);

//array corrispondenti alle categorie degli oggetti dell'array principale
const arrAnimal = iconsArray.filter(arrAnimal => arrAnimal.type === 'animal');
console.table(arrAnimal);

const arrVegetable = iconsArray.filter(arrAnimal => arrAnimal.type === 'vegetable');
console.table(arrVegetable);

const arrUser = iconsArray.filter(arrAnimal => arrAnimal.type === 'user');
console.table(arrUser);

//funzione che crea le card in base al parametro Array
function changeFilter(myArray) {
	myArray.forEach(element => {
		cardContainer.innerHTML += `
		<div class="card">
			<i class="fa-solid fa-${element.name}"></i>
			<p>${element.name}</p>
		</div>` 
	});
}

changeFilter(iconsArray);

//elementi visibili se il filtro è su All
// iconsArray.forEach(element => {
//     cardContainer.innerHTML += `
//     <div class="card">
//         <i class="fa-solid fa-${element.name}"></i>
//         <p>${element.name}</p>
//     </div>`

// });