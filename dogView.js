const breedName = document.getElementById('breed-name');
const dogImage = document.getElementById('dog-image');

breedName.innerText = 'Doggo loader';

const urlParams = new URLSearchParams(window.location.search);
const breed = urlParams.get('dogbreed');

fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((res) => res.json())
    .then((res) => {
        const dogBreedCapitalize =
            breed.charAt(0).toUpperCase() + breed.slice(1);
        breedName.innerText = dogBreedCapitalize;
        dogImage.src = res.message;
    })
    .catch((err) => console.log(err));

setTimeout(() => {}, 500);
