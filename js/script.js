const time = document.querySelector('.time');
const dateTag = document.querySelector('.date');
const greetings = document.querySelector(".greeting");
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');



let hoursGreeting = "not work";
let randomNum = (Math.round(Math.random() * (20 - 1)) + 1).toString();;


function showTime() {
const date = new Date();
const currentTime = date.toLocaleTimeString();
setTimeout(showTime, 1000);
time.textContent=currentTime;

function showDate(){
const date = new Date();
const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
const currentDate = date.toLocaleDateString('en-Us', options);

dateTag.textContent=currentDate;}
function showGreetings(){
    function getTimeOfDay(){
        const date = new Date();
const hours = date.getHours();

        switch (true){
            case (hours > 17) : {hoursGreeting = 'one';break;} 
            case (hours > 11) : {hoursGreeting = 'tho';break;} 
            case (hours > 5) : {hoursGreeting = 'free';break;} 
            case (hours >= 0) : {hoursGreeting = 'reee';break;} 
            
        }
        return hoursGreeting;
    }
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greetings.textContent = greetings;
}
showDate();
showGreetings();
}
showTime();
async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Brest&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
    weatherIcon.className = 'weather-icon owf';
  
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
  }
  getWeather();
  async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    switch (nextData){
        case 0:
            nextData = 1;
            quote.textContent = `"${data[nextData].text}"`;
            author.textContent = data[nextData].author;
            break;
        case 1:
            nextData = 2;
            quote.textContent = `"${data[nextData].text}"`;
            author.textContent = data[nextData].author;
            break;
        case 2:
            nextData = 0;
            quote.textContent = `"${data[nextData].text}"`;
            author.textContent = data[nextData].author;
            break;
    }
}
getQuotes();
