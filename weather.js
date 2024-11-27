const apikey = "641f2b52bd1b430455e6a5136d9d4cd7";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
// const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
// const apiKey = "641f2b52bd1b430455e6a5136d9d4cd7";
// const city = "Delhi";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button i");
const weather = document.querySelector(" weather i");

async function checkweather(city) {
  const response = await fetch(`${baseUrl}?q=${city}&appid=${apikey}`);

  const data = await response.json();
  console.log(data);
  console.log(data.name);
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;
  document.getElementById("humidity").innerHTML = data.main.humidity + "%";
  document.getElementById("wind").innerHTML = data.wind.speed + "km/h";
}

checkweather();

searchbtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
