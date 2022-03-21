import React from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

// const element = React.createElement('h1', null, 'Hello world!');
const element = <h1>Hello world!</h1>;

console.log(element);

reactDom.render(element, document.getElementById('root'))
