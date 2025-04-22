
const quotes = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    text: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.",
    author: "John Doe",
    role: "UI Designer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    text: "An intuitive interface and fantastic features. It's everything I need to manage my work more efficiently.",
    author: "Jane Smith",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    logo: "https://pngimg.com/uploads/google/google_PNG19644.png",
    text: "Beautiful design and user-friendly. It has streamlined my workflow like never before.",
    author: "Emily Johnson",
    role: "Developer",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

// DOM elements
const logo = document.querySelector(".logo img");
const quote = document.getElementById("quote");
const authorName = document.getElementById("author-name");
const authorRole = document.getElementById("author-role");
const photo = document.querySelector(".author img");
const dots = document.querySelectorAll(".dot");
const box = document.getElementById("carousel");

// Show a slide
function showSlide(index) {
  const data = quotes[index];

  // Update content
  logo.src = data.logo;
  quote.textContent = data.text;
  authorName.textContent = data.author;
  authorRole.textContent = data.role;
  photo.src = data.img;

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.remove("active");
    dot.style.backgroundColor = "#2091F9"; // white color for inactive dots
  });

  dots[index].classList.add("active");
  dots[index].style.backgroundColor = "#FFFFFF"; // blue color for active dot
}

// Initial slide
let current = 0;
showSlide(current);

// Auto slide
setInterval(() => {
  current = (current + 1) % quotes.length;
  showSlide(current);
}, 5000);
