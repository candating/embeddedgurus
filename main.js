//paarllax effect
var heroText = document.querySelector('.hero-content');
var heroImage = document.querySelector('.hero-bg');

window.addEventListener("scroll", function() {
  var value = window.scrollY;
    console.log(value)
  heroImage.style.transform = 'translateY(' + value * 0.1 + '%)';
});

// Get DOM Elements
const cbaaModal = document.querySelector('#cbaaModal');
const cbaaBtn = document.querySelector('#cbaaBtn');
const cteModal = document.querySelector('#cteModal');
const cteBtn = document.querySelector('#cteBtn');
const casModal = document.querySelector('#casModal');
const casBtn = document.querySelector('#casBtn');
const citModal = document.querySelector('#citModal');
const citBtn = document.querySelector('#citBtn');
const ccjeModal = document.querySelector('#ccjeModal');
const ccjeBtn = document.querySelector('#ccjeBtn');
const conahModal = document.querySelector('#conahModal');
const conahBtn = document.querySelector('#conahBtn');
const coeModal = document.querySelector('#coeModal');
const coeBtn = document.querySelector('#coeBtn');
const chmtModal = document.querySelector('#chmtModal');
const chmtBtn = document.querySelector('#chmtBtn');
const ccsModal = document.querySelector('#ccsModal');
const ccsBtn = document.querySelector('#ccsBtn');

const cbaaCloseBtn = document.querySelector('#closeCbaa');
const cteCloseBtn = document.querySelector('#closeCte');
const casCloseBtn = document.querySelector('#closeCas');
const citCloseBtn = document.querySelector('#closeCit');
const ccjeCloseBtn = document.querySelector('#closeCcje');
const conahCloseBtn = document.querySelector('#closeConah');
const coeCloseBtn = document.querySelector('#closeCoe');
const chmtCloseBtn = document.querySelector('#closeChmt');
const ccsCloseBtn = document.querySelector('#closeCcs');

//Events
cbaaBtn.addEventListener('click', openModalCbaa);
cteBtn.addEventListener('click', openModalCte);
casBtn.addEventListener('click', openModalCas);
citBtn.addEventListener('click', openModalCit);
ccjeBtn.addEventListener('click', openModalCcje);
conahBtn.addEventListener('click', openModalConah);
coeBtn.addEventListener('click', openModalCoe);
chmtBtn.addEventListener('click', openModalChmt);
ccsBtn.addEventListener('click', openModalCcs);

cbaaCloseBtn.addEventListener('click', closeModalCbaa);
cteCloseBtn.addEventListener('click', closeModalCte);  
casCloseBtn.addEventListener('click', closeModalCas);
citCloseBtn.addEventListener('click', closeModalCit);
ccjeCloseBtn.addEventListener('click', closeModalCcje);
conahCloseBtn.addEventListener('click', closeModalConah);
coeCloseBtn.addEventListener('click', closeModalCoe);
chmtCloseBtn.addEventListener('click', closeModalChmt);
ccsCloseBtn.addEventListener('click', closeModalCcs);


// Open
function openModalCbaa() {
  cbaaModal.style.display = 'block';
}
function openModalCte(){
  cteModal.style.display = 'block';
}
function openModalCas(){
  casModal.style.display = 'block';
}
function openModalCit(){
  citModal.style.display = 'block';
}
function openModalCcje(){
  ccjeModal.style.display = 'block';
}
function openModalConah(){
  conahModal.style.display = 'block';
}
function openModalCoe(){
  coeModal.style.display = 'block';
}
function openModalChmt(){
  chmtModal.style.display = 'block';
}
function openModalCcs(){
  ccsModal.style.display = 'block';
}

// Close
function closeModalCbaa() {
  cbaaModal.style.display = 'none';
}
function closeModalCte() {
  cteModal.style.display = 'none';
}
function closeModalCas() {
  casModal.style.display = 'none';
}
function closeModalCit() {
  citModal.style.display = 'none';
}
function closeModalCcje() {
  ccjeModal.style.display = 'none';
}
function closeModalConah() {
  conahModal.style.display = 'none';
}
function closeModalCoe() {
  coeModal.style.display = 'none';
}
function closeModalChmt() {
  chmtModal.style.display = 'none';
}
function closeModalCcs() {
  ccsModal.style.display = 'none';
}


// Close If Outside Click
window.onclick = function (event) {
  var modals = document.getElementsByClassName("modal");
  for (var i = 0; i < modals.length; i++) {
    var modal = modals[i];
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};

var currentLocation = location.href;
var menuItem = document.querySelectorAll('nav ul li a');
var menuLength = menuItem.length;
for (var i = 0; i<menuLength; i++){
  if(menuItem[i].href === currentLocation){
    menuItem[i].className = "active";
  }
}



