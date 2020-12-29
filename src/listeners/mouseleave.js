'use strict';

import { handleLeave } from '../handlers/handleLeave.js';


const triggers = document.querySelectorAll('.cool > li');
  //const background  = document.querySelector('.dropdownBackground');
 // const nav  = document.querySelector('.top');

triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));