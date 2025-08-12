const countries = {
  "україна": {
    name: "Україна",
    capital: "Київ",
    language: "Українська",
    government: "Парламентсько-президентська республіка",
    independence: "24 серпня 1991",
    area: "603 628 км²"
  },
  "німеччина": {
    name: "Німеччина",
    capital: "Берлін",
    language: "Німецька",
    government: "Федеративна парламентська республіка",
    independence: "3 жовтня 1990",
    area: "357 588 км²"
  },
  "франція": {
    name: "Франція",
    capital: "Париж",
    language: "Французька",
    government: "Унітарна напівпрезидентська республіка",
    independence: "4 жовтня 1958",
    area: "643 801 км²"
  },
  "австрія": {
    name: "Австрія",
    capital: "Відень",
    language: "Німецька",
    government: "Федеративна парламентська республіка",
    independence: "12 листопада 1918",
    area: "83 879 км²"
  },
  "болгарія": {
    name: "Болгарія",
    capital: "Софія",
    language: "Болгарська",
    government: "Парламентська республіка",
    independence: "22 вересня 1908",
    area: "110 994 км²"
  }
};

let userCountry = prompt("Виберіть країну:\nУкраїна\nНімеччина\nФранція\nАвстрія\nБолгарія");

if (userCountry) {
  userCountry = userCountry.trim().toLowerCase();
  if (countries[userCountry]) {
    const c = countries[userCountry];
    document.getElementById("coutry-card").innerHTML = `
      <h2 class="c-name">${c.name}</h2>
      <p class="title">Столиця</p>
      <p class="value">${c.capital}</p>
      <p class="title">Офіційні мови</p>
      <p class="value">${c.language}</p>
      <p class="title">Державний устрій</p>
      <p class="value">${c.government}</p>
      <p class="title">Незалежність</p>
      <p class="value">${c.independence}</p>
      <p class="title">Площа</p>
      <p class="value">${c.area}</p>
    `;
  } else {
    document.getElementById("coutry-card").innerHTML = `<p>Країну не знайдено.</p>`;
  }
}