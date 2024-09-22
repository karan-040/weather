
const key = "4f5dd75e1c955666dd0e64e62387bc4e";
var url = "https://api.openweathermap.org/data/2.5/weather?q=";
const rem_url = "&appid="+key;
let city_name="";
let final_url="";
var data;
document.querySelector("button").addEventListener("click",(event)=>{
    event.preventDefault();
    city_name = document.querySelector("input").value;
    final_url = url + city_name + rem_url;
    getdata();
});
document.addEventListener("keydown",(event)=>{
    if(event.keyCode == 13){
        document.querySelector("button").click();
    }
});
async function getdata(){
    try{
        const response = await fetch(final_url);
        data = await response.json();

        //setting the page ready
        document.querySelector(".card").style.height = "90vh";
        document.querySelector(".weather").style.display = "flex";
        document.querySelector(".details").style.display = "flex";

        //setting all images to visible
        
        //setting the image of weather        
        document.querySelector(".weather img").src = "./assets/" + data.weather[0].main + ".png";
        //setting the name of city
        document.querySelector(".city").innerHTML = data.name;
        //setting the temperature
        document.querySelector(".temp").innerHTML = Math.floor(parseInt(data.main.temp) - 273.15) + "°c";
        //setting the humidity value
        document.querySelector(".humidity h1").innerHTML = data.main.humidity + "%";
        //setting the wind speed
        document.querySelector(".wind h1").innerHTML = data.wind.speed + "km/h";
    }catch(err){
        alert("enter a valid city name");
        location.reload();
    }    
}



