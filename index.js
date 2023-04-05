const orderedList = document.getElementById('ordered-list');

let breed;
fetch('https://dog.ceo/api/breeds/list')
    .then((res) => res.json())
    .then((res) => (breed = res.message))
    .catch((err) => console.log(err));

setTimeout(() => {
    for (let i = 0; i < breed.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = `./dogView.html?dogbreed=${breed[i]}`;
        a.ariaLabel;
        li.innerText = breed[i];
        orderedList.appendChild(a).appendChild(li);
    }
}, 1000);
