function GetInfo() {
  var newName = document.getElementById("cityInput");
  var cityName = document.getElementById("cityName");
  cityName.innerHTML = "" + newName.value + "";

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      newName.value +
      "&appid=32ba0bfed592484379e51106cef3f204"
  )
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Min").innerHTML =
          " " + Number(data.list[i].main.temp_min - 273.15).toFixed(0) + "°";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Max").innerHTML =
          " " + Number(data.list[i].main.temp_max - 273.15).toFixed(0) + "°";
      }

      for (i = 0; i < 5; i++) {
        document.getElementById("img" + (i + 1)).src =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }
      tempp = document.getElementById("current_temp").innerHTML;
      document.getElementById("current_temp").innerHTML =
        Number(data.list[1].main.temp_min - 273.15).toFixed(1) + " C ";

      humid = document.getElementById("humidity").innerHTML;
      document.getElementById("humidity").innerHTML = "Humidity: " +Number(
        data.list[1].main.humidity
      ).toFixed(1)  + "%";

      pressure = document.getElementById("pressure").innerHTML;
      document.getElementById("pressure").innerHTML = "Pressure: " +Number(
        data.list[1].main.pressure
      ).toFixed(2) + " hPa";

      winnd = document.getElementById("windSpeed").innerHTML;
      document.getElementById("windSpeed").innerHTML = "Wind Speed: " +Number(
        data.list[1].wind.speed
      ).toFixed(2) + " ms";


      console.log(data);
    })

    .catch((err) => alert("Error 404"));
}

function DefaultScreen() {
  document.getElementById("cityInput").defaultValue = "Islamabad";
  GetInfo();
}

var d = new Date();
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function CheckDay(day) {
  if (day + d.getDay() > 6) {
    return day + d.getDay() - 7;
  } else {
    return day + d.getDay();
  }
}

for (i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}
date = new Date();
dayz = weekday[date.getDay()];
document.getElementById("current_day").innerHTML = dayz;

tempp = document.getElementById("current_temp").innerHTML;
document.getElementById("current_temp").innerHTML = Number(
  data.list[1].main.temp_min - 273.15
).toFixed(1);
