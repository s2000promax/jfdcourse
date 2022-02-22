import './index.css';
import image from './assets/01-29-103958.jpeg';

console.log('Hello world');

const divContainer = document.createElement('div');
divContainer.className = 'container';

const h1 = document.createElement('h1');
h1.innerText = 'I love JavaScript';

const img = document.createElement('img');
img.className = 'img-image';
img.src = image;

divContainer.append(h1, img);

document.body.append(divContainer);