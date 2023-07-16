window.onload = function(){

    var out_location= document.getElementById("location");
    var out_temp= document.getElementById("temperature");
    var out_conditions= document.getElementById("conditions");

// variable for my api key
const myAPiKey="4c51310474d005c1278f123382cd14f3"; //this is the deafualt key i am using 

//variable for desired url
const url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=" + myAPiKey + "&units=metric";

let xhr= new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){

            if (xhr.status === 200){

                const data = xhr.response;
                console.log(data);

                out_location.innerHTML = "Name of the City: "+data.name;
                out_temp.innerHTML = "Current Temperature (Celcius): "+data.main.temp;
                out_conditions.innerHTML = "Current weather conditions: " + data.weather[0].description;


            }
            else{
                out_conditions.innerHTML = "API call Unsuccessful";
                console.log(xhr.status);
                
            }
        }
    }
    //secifying the response type
    xhr.open('GET', url);
    xhr.responseType = "json";
    xhr.send(null);

}