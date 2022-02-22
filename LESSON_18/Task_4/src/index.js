import './index.css';
import image from '../assets/01-29-103958.jpeg';

console.log('Hello world form webpack');

const img = document.createElement('img');
img.src = image;

document.body.append(img);