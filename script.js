
//API key 2 0769e2bf45b1bdd60312773e8e0bf8ca
//API key 1 f9c2b13a6e4a4a816b266943697bd91e
var myKey = "f9c2b13a6e4a4a816b266943697bd91e";
//var mCity = "norfolk";

const stateFullName = new Map([
["AL", "Alabama"],
["AK", "Alaska"],
["AZ", "Arizona"],
["AR", "Arkansas"],
["CA", "California"],
["CO", "Colorado"],
["CT", "Connecticut"],
["DE", "Delaware"],
["FL", "Florida"],
["GA", "Georgia"],
["HI", "Hawaii"],
["ID", "Idaho"],
["IL", "Illinois"],
["IN", "Indiana"],
["IA", "Iowa"],
["KS", "Kansas"],
["KY", "Kentucky"],
["LA", "Louisiana"],
["ME", "Maine"],
["MD", "Maryland"],
["MA", "Massachusetts"],
["MI", "Michigan"],
["MN", "Minnesota"],
["MS", "Mississippi"],
["MO", "Missouri"],
["MT", "Montana"],
["NE", "Nebraska"],
["NV", "Nevada"],
["NH", "New Hampshire"],
["NJ", "New Jersey"],
["NM", "New Mexico"],
["NY", "New York"],
["NC", "North Carolina"],
["ND", "North Dakota"],
["OH", "Ohio"],
["OK", "Oklahoma"],
["OR", "Oregon"],
["PA", "Pennsylvania"],
["RI", "Rhode Island"],
["SC", "South Carolina"],
["SD", "South Dakota"],
["TN", "Tennessee"],
["TX", "Texas"],
["UT", "Utah"],
["VT", "Vermonth"],
["VA", "Virginia"],
["WA", "Washington"],
["WV", "West Virginia"],
["WI", "Wisconsin"],
["WY", "Wyoming"],
["NL", "Newfoundland and Labrador"],
["PE", "Prince Edward Island"],
["NS", "Nova Scotia"],
["NB", "New Brunswick"],
["QC", "Quebec"],
["ON", "Ontario"],
["MB", "Manitoba"],
["SK", "Saskatchewan"],
["AB", "Alberta"],
["BC", "British Columbia"],
["YT", "Yukon"],
["NT", "Northwest Territories"],
["NU", "Nunavut"],

]);
//var lat = 40;
//var lon = 40;

async function getWeather(){
    var myCity = document.querySelector("#cityInput").value;
    console.log("searching for " + myCity);
    const reply = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&APPID=${myKey}&units=metric`)//fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}`)
    const data = await reply.json();
    console.log(data);
    document.querySelector("#cityName").textContent = data["name"];
    document.querySelector("#cityTemp").textContent = data["main"]["temp"];
    //console.log(myWeather);
}

getWeather("Norfolk");


function prepPage(){
    console.log("prepaing page");
    document.querySelector("#searchButton").addEventListener("click", function(){
        console.log("searching...");
        getWeather();
    });

    document.querySelector("#cityInput").addEventListener("keypress", function(e){
        var key = e.which;
        if (key == 13){
            getWeather();
        }
    });
}

prepPage();
