// Temple data array
const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "images/temple1.jpg"},
  {
    templeName: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois, United States",
    dedicated: "2002-06-27",
    area: 54000,
    imageUrl: "images/temple2.jpg"},
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836-03-27",
    area: 16800,
    imageUrl: "images/temple3.jpg"},
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41010,
    imageUrl: "images/temple4.jpg" },
  {
    templeName: "Provo Utah Temple",
    location: "Provo, Utah, United States",
    dedicated: "1972-02-09",
    area: 130825,
    imageUrl: "images/temple5.jpg"  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44175,
    imageUrl: "images/temple6.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 52900,
    imageUrl: "images/temple7.jpg"
  },
  // Added three more
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1985-08-24",
    area: 19184,
    imageUrl: "images/temple8.jpg"
  },
  {
    templeName: "Mesa Arizona Temple",
    location: "Mesa, Arizona, United States",
    dedicated: "1927-10-23",
    area: 113916,
    imageUrl: "images/temple9.jpg"
  },
  {
    templeName: "Kinshasa Democratic Republic of the Congo Temple",
    location: "Kinshasa, DR Congo",
    dedicated: "2019-04-14",
    area: 12177,
    imageUrl: "images/temple1.jpg"
  }
];

// DOM references
const gallery = document.getElementById("temple-gallery");
const yearSpan = document.getElementById("year");
const modifiedSpan = document.getElementById("last-modified");

// Functions
function createTempleCard(temple) {
  const card = document.createElement("figure");
  card.classList.add("temple-card");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";

  const caption = document.createElement("figcaption");
  caption.innerHTML = `
    <h3>${temple.templeName}</h3>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
  `;

  card.appendChild(img);
  card.appendChild(caption);

  return card;
}

function displayTemples(filteredTemples) {
  gallery.innerHTML = "";
  filteredTemples.forEach(t => gallery.appendChild(createTempleCard(t)));
}

// Filters
function filterTemples(criteria) {
  let filtered = [];
  switch (criteria) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default: // home
      filtered = temples;
  }
  displayTemples(filtered);
}

// Events
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    filterTemples(link.dataset.filter);
  });
});

// Footer info
yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

// Initialize
displayTemples(temples);
