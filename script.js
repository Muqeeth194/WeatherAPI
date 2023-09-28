const temp_field = document.querySelector('.temp')
const place = document.querySelector('.temp_location p')
const dateField = document.querySelector(".temp_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");

const searchfield = document.querySelector('.searchField')

const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const cityName = searchfield.value
    getWeatherInfo(cityName)
})

let cityName = 'Hyderabad'

async function getWeatherInfo(cityName) {
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f184ff4151a8490dafe161023232309&q=${cityName}&aqi=no`);
        mode: "no-cors"
        const weatherData = await response.json();
        console.log(weatherData);
    
        let temp = weatherData.current.temp_c
        let name = weatherData.location.name
        let condition = weatherData.current.condition.text
        let url = weatherData.current.condition.icon
        let date = weatherData.current.last_updated
    
        console.log(temp, name, condition, url, date)
    
        let splitTime = date.split(" ")
    
        let exactDate = splitTime[0]
        let exactTime = splitTime[1]
    
        const d = new Date(exactDate)
    
        let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = weekdays[d.getDay()]
        console.log(day);

        temp_field.innerText = `${temp} ${'°'}`
        place.innerText = name
        dateField.innerText = `${exactDate}  ${day}  ${exactTime}`
        emojiField.src = url
        weatherField.innerText = condition
    }

    catch(error){
        console.log('I am catching an error',error);

    }

}

getWeatherInfo(cityName)