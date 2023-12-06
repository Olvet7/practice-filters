import axios from "axios";

// Константи:
const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_3D2cMhQlEJ7vd6aSoPS7npBO0fxZO1welUEt4RfV4cU4u5uSgA89im82uOpSVcxT';
const ENDPOINT = '/breeds'
const ENDPOINTCAT = '/images/search' 
axios.defaults.headers.common['x-api-key'] = API_KEY;

// Напиши функцію fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід - результатом запиту. Винеси її у файл cat-api.js та зроби іменований експорт.
export function fetchBreeds(){
    // https://api.thecatapi.com/v1/breeds?api_key=live_3D2cMhQlEJ7vd6aSoPS7npBO0fxZO1welUEt4RfV4cU4u5uSgA89im82uOpSVcxT:
    return axios.get((`${BASE_URL}/breeds?api_key=${API_KEY}`));
};

// Напиши функцію fetchCatByBreed(breedId), яка очікує ідентифікатор породи, робить HTTP-запит і повертає проміс із даними про кота - результатом запиту. Винеси її у файл cat-api.js і зроби іменований експорт.
export function fetchCatByBreed(breedId){
  // https://api.thecatapi.com/v1/images/search?breed_ids=breedId
  return axios.get(`${BASE_URL}${ENDPOINTCAT}?breed_ids=${breedId}`)
  .then(response => response.data)
  .catch(error => {
    throw error;
  });
};

