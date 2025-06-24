// Api from = openweathermap


const apikey = "ca0196bbae1483526e92b03198d53e0a";
  const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

  const searchbox = document.querySelector(".search input");
  const searchbtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon");

  async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}&units=metric`);
    var data = await response.json();

    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML =
        data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = Math.round(data.wind.speed * 3.6) + " km/h";;

      if (data.weather[0].main == "clouds") {
        weatherIcon.src = "clouds.png";
      } else if (data.weather[1].main == "clear") {
        weatherIcon.src = "clear.png";
      } else if (data.weather[2].main == "Rain") {
        weatherIcon.src = "rain.png";
      } else if (data.weather[3].main == "Rrizzle") {
        weatherIcon.src = "drizzle.png";
      } else if (data.weather[4].main == "Mist") {
        weatherIcon.src = "mist.png";
      }

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  }

  searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
  });
