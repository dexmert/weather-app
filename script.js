// const url = 'https://api.openweathermap.org/data/2.5/'
// const key = '7e6614e46f4dee42acabffda35366c66x'

// const setQuery = (e) => {
//     if (e.keyCode == '13')
//         getResult(searchBar.value)
// }

const url = "http://dataservice.accuweather.com/locations/v1/{locationKey}"
const API_KEY = 'Rvl9YfgHAXmb8GiBoldG7CSaSMgVrx9s';

function getWeather(cityName) {
    return fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityName}`
    )
        .then((response) => response.json())
        .then((data) => {
            const cityKey = data[0].Key;
            return fetch(
                `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`
            )
                .then((response) => response.json())
                .then((data) => {
                    return data;
                });
        });
}

// const getResult = (cityName) => {
//     let query = `${url}weather?q=${cityName}&appid=key${key}&units=metric&lang=tr`
//     // let query = `https://goweather.herokuapp.com/weather/${cityName}`
//     console.log(query)
//     fetch(query)
//         .then(weather => {
//             console.log(weather)
//             return weather.json()
//         })
//         .then(displayResult)
// }
// const displayResult = (result) => {
//     let city = document.querySelector('.city')
//     city.innerText = `${result.name},${result.sys.city}`

//     let temp = document.querySelector('.temp')
//     temp.innerText = `${Math, round(result.main.temp)}`
//     let desc = document.querySelector('.desc')
//     desc.innerHTML = result.weather[0].description
//     let minmax = document.querySelector('.minmax')
//     minmax.innerText = `${Math, round(result.main.temp_min)}` /
//         `${Math, round(result.main.temp_max)}`
// }



// const searchBar = document.getElementById('searchBar')
// searchBar.addEventListener('keypress', setQuery)