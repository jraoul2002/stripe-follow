'use strict';

import { handleEnter } from '../handlers/handleEnter.js';


const triggers = document.querySelectorAll('.cool > li');
  //const background  = document.querySelector('.dropdownBackground');
  //const nav  = document.querySelector('.top');


triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));