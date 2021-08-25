/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
const stringLength = require('./stringLength.js');
const reverseString = require('./reverseString.js');
const calculator = require('./calculator.js');
const capitalize = require('./capitalize.js');

const myStringLength = document.getElementById('stringLength');
myStringLength.innerHTML = `${stringLength('Hello')}`;

const myReverseString = document.getElementById('reverseString');
myReverseString.innerHTML = `${reverseString('Wait')}`;

const myAdd = document.getElementById('add');
myAdd.innerHTML = `${calculator.add(1, 2)}`;

const mySubtract = document.getElementById('subtract');
mySubtract.innerHTML = `${calculator.subtract(1, 2)}`;

const myMultiply = document.getElementById('multiply');
myMultiply.innerHTML = `${calculator.multiply(1, 2)}`;

const myDivide = document.getElementById('divide');
myDivide.innerHTML = `${calculator.divide(1, 2)}`;

const myCapitalize = document.getElementById('capitalize');
myCapitalize.innerHTML = `${capitalize('good')}`;
