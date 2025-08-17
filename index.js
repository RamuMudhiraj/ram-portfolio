
// document.querySelector(".navbars").innerHTML=`
//   <div class="navbar">
//   <div class="logo">
//       <a href="index.html">Ram</a>
//   </div>
//     <div class="hamburger" id="hamburger">
//       &#9776;
//     </div>
//     <ul class="nav-links" id="navLinks">
//       <li><a href="Aboutme.html">About me</a></li>
//       <li><a href="Projects.html">Projects</a></li>
//       <li><a href="Resume.html">Resume</a></li>
//     </ul>
//   </div>   

// `

// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.getElementById('hamburger');
//   const navLinks = document.getElementById('navLinks');

//   if (hamburger && navLinks) {  // Check if elements exist before using them
//     hamburger.addEventListener('click', () => {
//       navLinks.classList.toggle('active');
//     });
//   }
// });


document.querySelector(".navbars").innerHTML = `
  <div class="navbar"> <!-- Main navbar container -->
    <div class="logo"> <!-- Logo container -->
      <a href="index.html">Ram</a> <!-- Logo link to the homepage -->
    </div>
    
    <div class="hamburger" id="hamburger"> <!-- Hamburger menu icon (used for mobile view) -->
      &#9776; <!-- Unicode character for the hamburger icon (three horizontal bars) -->
    </div>

    <!-- Navigation links for the website -->
    <ul class="nav-links" id="navLinks">
      <li><a href="Aboutme.html">About me</a></li> <!-- Link to the "About me" page -->
      <li><a href="Projects.html">Projects</a></li> <!-- Link to the "Projects" page -->
      <li><a href="Resume.html">Resume</a></li> <!-- Link to the "Resume" page -->
    </ul>
  </div>
`;

// Wait for the DOM to load completely before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Get the hamburger menu icon and nav links
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Check if both hamburger and navLinks exist in the DOM before proceeding
  if (hamburger && navLinks) {
    // Add a click event listener to the hamburger menu
    hamburger.addEventListener('click', () => {
      // Toggle the 'active' class on the navLinks element to show/hide the menu
      navLinks.classList.toggle('active');
    });
  }
});




// 

// tell why i used addEventListener, classList and toggle


// ChatGPT said:
// Good follow-up — let’s break down why you used addEventListener, classList, and toggle in this context:

// ✅ 1️⃣ addEventListener
// Why you used it:

// addEventListener lets you run some code when something happens on the page.

// Here, you used:

// js
// Copy
// Edit
// hamburger.addEventListener('click', () => { ... });
// → This means when the hamburger icon is clicked, run this function.

// Without addEventListener, your hamburger icon wouldn’t do anything when clicked.

// It’s better than inline onclick because it separates HTML and JS — which is a good practice.

// ✅ 2️⃣ classList
// Why you used it:

// classList is an object that lets you work with the list of classes on an HTML element.

// Example:

// js
// Copy
// Edit
// navLinks.classList
// → This represents the class="nav-links" on your <ul>.

// With classList you can:

// .add() → Add a class.

// .remove() → Remove a class.

// .toggle() → Add or remove a class automatically.

// ✅ 3️⃣ toggle
// Why you used it:

// .toggle('active') means:

// If navLinks doesn’t have the active class → add it.

// If navLinks already has the active class → remove it.

// This is perfect for showing/hiding things like dropdowns or menus.

// Here, when you click the hamburger:

// If the menu is hidden, active gets added → menu shows.

// If the menu is visible, active gets removed → menu hides.

// ✅ In short:
// addEventListener → Listen for user actions (clicks, scrolls, keys, etc).

// classList → Manage CSS classes on elements.

// toggle → Switch classes on/off easily for things like show/hide.



// project.js

let itemContainer= document.querySelector('.cart')


let item=[{
  id:1,
  title:'portfolio',
  title_data:'portfolio  shows my working experince.',
  img:'1.jpg',
  link:''
},
{
  id:2,
  title:'Smart-ticketing',
  title_data:'A event ticket booking system',
  img:'2.jpg',
  link:''
},
{
  id:3,
  title:'Healthybowl',
  title_data:'healthybowl is a food delivery website',
  img:'3.jpg',
  link:''
},
{
  id:4,
  title:'dreamz_detailing',
  title_data:'dreamz_detailing is a car servicing website',
  img:'dreamz_detailing.png',
  link:''
},
{
  id:5,
  title:'Cricket-game',
  title_data:' cricket- game is gaming website',
  img:'4.jpg',
  link:''
},
{
  id:6,
  title:'Calculator',
  title_data:'a basic calculator',
  img:'5.jpg',
  link:''
}
]

let innerhtml='';
item.forEach(item =>{
  innerhtml +=`
  <div class="product-card">
            <img src="${item.img}" alt="Product Image">
            <h3>${item.title}</h3>
            <p>${item.title_data}</p>
            <a href="${item.link}"><button>view website</button></a>
          </div>`;
})



itemContainer.innerHTML=innerhtml;

