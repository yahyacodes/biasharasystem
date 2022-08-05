'use stirct';
//Index.html & Singup page
const email = document.querySelector("#email");
const invalid = document.querySelector("#invalid");
const password = document.querySelector("#password");
const feedback = document.querySelector("#feedback");
const btnLogin = document.querySelector(".btn-login");
const signup = document.querySelector("#signup");
const forgotPassword = document.querySelector("#forgot-password");
//sign Up Form
const signupForm = document.querySelector("#signup-form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const signupEmail = document.querySelector("#signup-email");
const signupPassword = document.querySelector("#signup-password");
const confirmPassword = document.querySelector("#confirm-password");
const selector = document.querySelector("#select");
const btnSignup = document.querySelector("#btn-signup");
const invalidSignup = document.querySelector("#invalid-signup");
const feedbackSignup = document.querySelector("#feedback-signup");
const feedbackConfirm = document.querySelector("#confirm-feedback");
const firstNameValid = document.querySelector("#name-valid");
const lastNameValid = document.querySelector("#last-valid");

//CheckIn page
const checkinModal = document.querySelector('#check-number')
const checkIn = document.querySelector('#check-in')
const searchNumber = document.querySelector('#number-input')
const closeModal = document.querySelector('#close')
const cancelModal = document.querySelector('.btn-close')
const patientDropdown = document.querySelector('#patients-dropdown')
const dropdownList = document.querySelector('#patient-list')
const serviceDropdown = document.querySelector('#services-dropdown')
const serviceList = document.querySelector('#service-list')
let section = document.querySelector('#section')
const navbarHeight = document.querySelector('#navbar').style.height
const footerHeight = document.querySelector('#footer').style.height
const list = document.querySelector('#list')

//Overview page
const overView = document.querySelector('#overview')
const overViewSection = document.querySelector('#overview-section')
const notes = document.querySelector('#notes')
const notesSection = document.querySelector('#notes-section')
const addNotes = document.querySelector('#add-notes')
const addComment = document.querySelector('#add-comment')
const transaction = document.querySelector('#transaction')
const procedures = document.querySelector('#procedures')
const appointments = document.querySelector('#appointments')
const prescriptions = document.querySelector('#prescriptions')
const labTests = document.querySelector('#lab-tests')
const checkInHistory = document.querySelector('#history')
const sidebar = document.querySelector('#sidebar')

//Registration page 
//Registration modal
const modal2 = document.querySelector('#modal');
const close = document.querySelector('#close');
const cancelRgistrationModal = document.querySelector('#cancel');
const save = document.querySelector('#save');
// section1
const select = document.querySelector('#select-service');
const providers = document.querySelector('#select-provider');
const locationInput = document.querySelector('#select-location');
const addbtn = document.querySelector('#button-addon');
const input = document.querySelector('#input');
const dataPrice = document.querySelector('#select-value');
// const priceData = dataPrice.getAttribute('data-price');
const alertMss = document.querySelector('.alert');
const message = document.querySelector('.message');
// section2
let amount = document.querySelector('#amount');
const discount = document.querySelector('#discount');
const piadinitial = document.querySelector('#paid-initial');
const balance = document.querySelector('#balance');

searchNumber.onclick = function () {
checkinModal.style.display = 'block'
}

closeModal.onclick = function () {
checkinModal.style.display = 'none'
}

cancelModal.onclick = function () {
checkinModal.style.display = 'none'
}

window.onclick = function (event) {
if(event.target === checkinModal) {
checkinModal.style.display = 'none'
}
}

function getDimensions() {
    const sectionHeight = window.innerHeight - (footerHeight + navbarHeight) - 160
    const listHeight = window.innerHeight - (footerHeight + navbarHeight) - 160
    section.style.height = sectionHeight + 'px'
    list.style.height = listHeight + 'px'
  }

  window.addEventListener('resize', getDimensions)

  getDimensions()

  patientDropdown.onclick = function () {
    dropdownList.style.display = 'block'
    }

  modal2.style.display = 'block'

close.onclick = function () {
modal2.style.display = 'none'
}

cancelRgistrationModal.onclick = function () {
modal2.style.display = 'none'
}

window.onclick = function (event) {
if(event.target === modal2) {
modal2.style.display = 'none'
}
}
