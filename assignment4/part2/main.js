/*
Name: Justin Bourne
File: main.js
Date: 22 November 2024
An image gallery that can loop through the list of images and darken/lighten the selected image
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/*Declaring the alternative text for each image file */
const altText = ['A close-up of an eye', 'A random image', 'Some pretty flowers', 'Ancient Egyptian artwork', 'A butterfly resting on a leaf']

/* Looping through images */
for (let i = 0; i < imgArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imgArray[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
        displayedImage.src = e.target.src
        displayedImage.altText = e.target.altText
    }
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const classBtn = btn.getAttribute('class')
    if (classBtn === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 50%)';
    } 
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0%)';
    }
});



