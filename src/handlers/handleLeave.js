'use strict';


//const triggers = document.querySelectorAll('.cool > li');
  const background  = document.querySelector('.dropdownBackground');
  //const nav  = document.querySelector('.top');


export  function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}