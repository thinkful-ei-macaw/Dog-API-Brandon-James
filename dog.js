'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  const message = `${responseJson.message}`;
  $('.results').html(generateImg(message));
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
    const breed = $('#breed').val();
    getDogImage(breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});