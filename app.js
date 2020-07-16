const favorites = document.getElementById('favorite');
const catalog = document.getElementById('catalog');

function showul (event) {
	event.stopPropagation();
	let nextul = event.target.nextElementSibling;
	if(nextul.style.display == "block") {
	nextul.style.display = "none"; 
	} else {
	nextul.style.display = "block";
	}
}

function showFavorite() {
	catalog.style.display = 'none';
	if(favorites.style.display === 'none') {
		favorites.style.display = 'block';
	} else {
		favorites.style.display = 'none';
	}

	let  lsImages = localStorage.getItem('images');	
	
	if(lsImages) {		
		lsImages = localStorage.getItem('images').split(' ');	
		let removeImg = document.querySelectorAll('.img');
		removeImg.forEach(el => el.remove());
		
		lsImages.map(function(el) {
			let createImg = document.createElement('img');
			createImg.setAttribute('src', el );
			createImg.className = 'trigger';
			let favoriteUl = document.getElementById('favorite_ul');
			let newLi = document.createElement('li');
			newLi.className = 'img';
			newLi.innerHTML = `
			<i onclick="removeFromLS(event)" class="fa img fa-star star orange star-ls" aria-hidden="true"></i>`
			newLi.appendChild(createImg);
			favoriteUl.appendChild(newLi); 
		})		
	} else {		
		favorites.innerText = `Nothing Selected!`;
	} 
	
}

function showCatalog() {	
	favorites.style.display = 'none';
	
	if(catalog.style.display === 'none') {
		catalog.style.display = 'block';
	} else {
		catalog.style.display = 'none';
	}
}

function showImage (event) {
	let imageTo = event.target.nextElementSibling;
	imageTo = imageTo.src;
	imageToAdd(imageTo);
}

function imageToAdd (image) {
	let storage = localStorage.getItem('images');

	if (storage) {
		if (storage.includes(image)) {
			let splitStorage = storage.split(' ');
			storage = splitStorage.filter(item => item !== image).join(' ');
		} else {
		storage += ` ${image}`;
		}

		localStorage.setItem('images', storage);
	} else {
		localStorage.setItem('images', image);
	}
}

function removeFromLS(event) {
	
	event.target.parentElement.remove();
	let imageTo = event.target.nextElementSibling;
	imageTo = imageTo.src;
	imageToAdd(imageTo);

}


let modal = document.querySelector(".modal");
let trigger = document.querySelectorAll(".trigger");
let closeButton = document.querySelector(".close-button");

trigger.forEach(function(el){
	el.addEventListener("click", function() {
		modal.classList.toggle("show-modal");
		let modalContent = document.querySelector('.modal-content');
		let url = el.src;
		url = url.replace('/150/', '/600/');
		let newImg = document.createElement('img');
		newImg.src = url;
		newImg.id = 'newImg';
		modalContent.appendChild(newImg);		
	});
});
closeButton.addEventListener("click", function() {
	modal.classList.toggle("show-modal");
	let modalContent = document.querySelector('.modal-content');
	let myImg = document.querySelector('#newImg');
	modalContent.removeChild(myImg);
});
window.addEventListener("click", function(event) {
	    if (event.target === modal) {
			modal.classList.toggle("show-modal");
			let modalContent = document.querySelector('.modal-content');
			let myImg = document.querySelector('#newImg');
			modalContent.removeChild(myImg);
	}
});



