// If it it works, don't fix it

const div1 = document.getElementById('div-1');
const div2 = document.getElementById('div-2');
const div3 = document.getElementById('div-3');
const div4 = document.getElementById('div-4');

function noneAll(){
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'none';
  div4.style.display = 'none';
}

function button1(){
  noneAll();
  div1.style.display = 'flex'; 
}

function button2(){
  noneAll();
  div2.style.display = 'flex'; 
}

function button3(){
  noneAll();
  div3.style.display = 'flex'; 
}

function button4(){
  noneAll();
  div4.style.display = 'flex'; 
}
