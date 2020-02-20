//'use strict';

function getDogImage(input) {
  if(input < 1 || input > 50 || input === NaN)
  {
    throw new TypeError('number must be 1 - 50');
  } else {
  let dogApi = `https://dog.ceo/api/breeds/image/random/${inputValue}`;
  fetch(dogApi)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson)) 
    
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`);
  $('.results').removeClass('hidden');
}

function generateDogs(num) {
  let returnImg = 0;
  for (let i = 0; i < num; i++){
    returnImg += `<img src="${num[i]}" class="results-img">`
  }
  return returnImg;
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const num = $('#num').val();
    getDogImage(num);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});