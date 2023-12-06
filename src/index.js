import axios from 'axios';
import SlimSelect from 'slim-select';
import {fetchBreeds} from './cat-api';
import {fetchCatByBreed} from './cat-api';

// Стартові посилання 
const refs = {
  selectBreed: document.querySelector('.breed-select'),
  selectEl: document.querySelector('.breed-select'),
  loaderEl: document.querySelector('.loader'),
  errorEl: document.querySelector('.error'),
  divEl: document.querySelector('.cat-info')
}
// Показати загрузку, приховати помилку
hideSelect()
showLoader();
hideError() 

// Функція з підгрузки всіх порід в select
fetchBreeds() 
  .then((response) => {
    showSelect() 
    const breeds = response.data;
    const optionsMarkup = breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`).join('');
    refs.selectBreed.innerHTML = optionsMarkup;
  })
  .catch(error => {
      console.error('Error fetching breeds:', error);
  })
  .finally(() => {
    hideLoader(); // Ховаємо loader після завершення запиту
  });


// Функція для показу випадаючого меню
function hideSelect() {
  refs.selectBreed.style.display = 'none';
}

// Функція для приховання випадаючого меню
function showSelect() {
  refs.selectBreed.style.display = 'block';
}


// Функція для показу loader
function showLoader() {
  document.querySelector('.loader').style.display = 'block';
}

// Функція для приховання loader
function hideLoader() {
  document.querySelector('.loader').style.display = 'none';
}

// Функція для показу error
function showError() {
  document.querySelector('.error').style.display = 'block';
}

// Функція для приховання error
function hideError() {
  document.querySelector('.error').style.display = 'none';
}

// Обробник подій для вибору породи
refs.selectEl.addEventListener('change', onShowCat);
showLoader(); 

// Функція при виборі потрібної породи із select (показує розмітку з картинкою, назвою, описом та інформацію про темперамент)
function onShowCat(evt) {
  hideError()
  showLoader()
  refs.divEl.innerHTML = '';
  const breedId = evt.target.value;
  fetchCatByBreed(breedId)
  .then(data => {
    const markupCat = createMarcupCat(data)
    refs.divEl.innerHTML = markupCat;
    hideLoader(); 
  })
  .catch(error => {
    console.error('Error fetching cat data:', error);
    showError()
    hideLoader(); 
  })
}

// Функція відмальовує в дом інформацію про кота
function createMarcupCat(data){
  const { url } = data[0];
  const { name, description, temperament } = data[0].breeds[0];

  return `<div class="container">
  <img src="${url}" alt="${name}" height="300">
  <div class="info">
    <h1 class="titleName">${name}</h1>
    <p class="description">${description}</p>
    <p><span class="temperament">Temperament:</span> ${temperament}</p>
  </div>
</div>`
}

function createMarcupBreeds(allBreeds) {
  return allBreeds.map(({ name }) => `<option value="${name}">${name}</option>`).join('');
}