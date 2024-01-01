//api key b9a4f72a91e77850a702fa845a3cc793
//https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid=b9a4f72a91e77850a702fa845a3cc793&units=metric

const apiKey="b9a4f72a91e77850a702fa845a3cc793";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore ";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/hr";

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

checkWeather();

