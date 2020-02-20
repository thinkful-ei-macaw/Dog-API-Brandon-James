'use strict';

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson, num))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, num) {
  console.log(responseJson);
  for(let i = 0; i < num; i++) {
    const message = `${responseJson.message[i]}`;
    $('.results').html($('.results').html() + generateImg(message));
  }
  //replace the existing image with the new one
  //display the results section
  $('.results').removeClass('hidden');
}

function generateImg(mes) {
  return `<img src="${mes}" class="results-img" alt="placeholder">
          `;
}

function watchForm() {
  $('form').submit(event => {
    $('.results').html("");
    event.preventDefault();
    const num = $('#num').val();
    getDogImage(num);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});