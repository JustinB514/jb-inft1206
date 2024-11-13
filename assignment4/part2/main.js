const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* TO DO: Declaring the alternative text for each image file */
const altText = ['A closeup of an eye', '', 'Some pretty flowers', 'Ancient Egyptian artwork', 'A butterfly resting on a leaf']

/* Looping through images */
for (let i = 0; i < imgArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imgArray[i]);
    newImage.setAttribute('alt', '');
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
        displayedImage.src = e.target.src
        //TO DO: altText for each displayedImage
    }
}


// TO DO:
/* Wiring up the Darken/Lighten button */
