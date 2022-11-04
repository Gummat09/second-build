"use script"

const btn_next1 = document.querySelector("#next1");
const btn_next2 = document.querySelector("#next2");
const btn_next3 = document.querySelector("#next3");
const btn_prev1 = document.querySelector("#prev1");
const btn_prev2 = document.querySelector("#prev2");
const btn_prev3 = document.querySelector("#prev3");
const form1 = document.querySelector('.form_page1');
const form2 = document.querySelector('.form_page2');
const form3 = document.querySelector('.form_page3');
const form4 = document.querySelector('.form_page4');

btn_next1.addEventListener('click', (e) => {
    e.preventDefault();
    form1.classList.toggle('active');
    form2.classList.toggle('active');
})
btn_next2.addEventListener('click', (e) => {
    e.preventDefault();
    form2.classList.toggle('active');
    form3.classList.toggle('active');
})
btn_next3.addEventListener('click', (e) => {
    e.preventDefault();
    form3.classList.toggle('active');
    form4.classList.toggle('active');
})

btn_prev3.addEventListener('click', (e) => {
    e.preventDefault();
    form3.classList.toggle('active');
    form4.classList.toggle('active');
})

btn_prev2.addEventListener('click', (e) => {
    e.preventDefault();
    form2.classList.toggle('active');
    form3.classList.toggle('active');
})
btn_prev1.addEventListener('click', (e) => {
    e.preventDefault();
    form1.classList.toggle('active');
    form2.classList.toggle('active');
})

