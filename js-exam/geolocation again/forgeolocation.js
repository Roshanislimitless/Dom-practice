
//self done from the scratch by fetching API from weatherbit.io 
const myApiKey = '94732983488740c7ac18361880e08e1d'
const getLocation = ( ) => {
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }
}

const onError = (error) => {
    //console.log('errortest', error);
    const {message } = error;
    //console.log(message);
    const notificationDiv = document.querySelector('.notification');

    const errorText = document.createElement('p');
    errorText.innerHTML = message;

    notificationDiv.appendChild(errorText);
    
}


const onSuccess = (position) =>{
    //console.log(position);
const myLatitude = position.coords.latitude;
const myLongitude = position.coords.longitude;

const apiUrl = `https://api.weatherbit.io/v2.0/current?&lat=${myLatitude}&lon=${myLongitude}&key=${myApiKey}`;
fetch(apiUrl)
.then((response) => storeAndCallResponse(response))
.catch(error => console.error(error))

}


const storeAndCallResponse = (response) => {
    response.json().then((myJson) => callResponse(myJson))

}

const callResponse = (objectInfo) => {
    console.log(objectInfo)
const image = document.querySelector('img');
image.src = `/icons/${objectInfo.data[0].weather.icon}.png`

const temperature = document.querySelector('.temperature-value').firstElementChild
temperature.innerHTML = `${objectInfo.data[0].temp}ºC `;
    

//retriving temperature description 
const Description = document.querySelector('.temperature-description').firstElementChild;
Description.innerHTML = objectInfo.data[0].weather.description

//retriving the city name 
 const location = document.querySelector('.location').firstElementChild;
 location.innerHTML = objectInfo.data[0].city_name;


    

    

}



getLocation();
