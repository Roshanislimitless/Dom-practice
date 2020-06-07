//for finding weather of the cities of the array with latitude and longitude
const countriesList = [{
        name: 'kathmandu',
        latitude: '27.717245',
        longitude: '85.323959'

    },

    {
        name: 'newyork',
        latitude: '40.712776',
        longitude: '-74.005974'

    },
    {
        name: 'oslo',
        latitude: '59.9139',
        longitude: '10.7522'

    },

    {
        name: 'madrid',
        latitude: '40.416775',
        longitude: '-3.703790'

    },
    {
        name: 'benidorm',
        latitude: '38.536900',
        longitude: '-0.129120'

    },
    {
        name: 'vegas',
        latitude: '36.1699',
        longitude: '115.1398'

    },
    {
        name: 'pokhara',
        latitude: '28.237988',
        longitude: '83.995590'

    },
    {
        name: 'barcelona',
        latitude: '41.3851',
        longitude: '2.1734'

    },

]
//apikey
const myApiKey = '8d225d0502734c62a9b896007eec0157'

function addNewObject(event) {
    const nameInput = document.querySelector('#inputForNew1');
    const latInput = document.querySelector('#inputForNew2');
    const longInput = document.querySelector('#inputForNew3');
    event.preventDefault()
    let a = {
        name: '',
        latitude: '',
        longitude: ''

    }
    var nameInputValue = nameInput.value;
    var latInputValue = latInput.value;
    var longInputValue = longInput.value;
    a.name = nameInputValue;
    a.latitude = latInputValue;
    a.longitude = longInputValue;
    countriesList.push(a);
    onSuccessNewSingle();
}
const latLong = document.querySelector('#latLong')
latLong.addEventListener('click', addNewObject)






const onSuccess = (position) => {

    //console.log(position);


    for (let i = 0; i < countriesList.length; i++) {
        const myLatitude = countriesList[i].latitude
        const myLongitude = countriesList[i].longitude

        const apiUrl = `https://api.weatherbit.io/v2.0/current?&lat=${myLatitude}&lon=${myLongitude}&key=${myApiKey}`;
        fetch(apiUrl)
            .then((response) => storeAndCallResponse(response))
            .catch(error => console.error(error))


    }



}

const storeAndCallResponse = (response) => {
    response.json().then((myJson) => callResponse(myJson))

}

const callResponse = (objectInfo) => {
    //console.log(objectInfo)
    //console.log(objectInfo.data[0].weather.icon);


    const weatherContainer = document.querySelector('.weather-container')

    const cityName = document.createElement('p');
    cityName.className = 'cityName'
    cityName.innerHTML = objectInfo.data[0].city_name;
    cityName.style.marginTop = '18%';



    const singlecountryData = document.createElement('div');
    singlecountryData.className = 'inner-container';

    const image = document.createElement('img');
    image.src = `icons/${objectInfo.data[0].weather.icon}.png`
    image.style.maxHeight = '80px'

    const tempreature = document.createElement('p');
    tempreature.className = 'temp';
    tempreature.innerHTML = `${objectInfo.data[0].temp}°C`;


    const description = document.createElement('p');
    description.className = 'description';
    description.innerHTML = objectInfo.data[0].weather.description;


    singlecountryData.appendChild(cityName);
    singlecountryData.appendChild(image);
    singlecountryData.appendChild(tempreature)
    singlecountryData.appendChild(description)


    weatherContainer.appendChild(singlecountryData)
}



onSuccess();


const input = document.querySelector('#input');
const getNode = (event) => {
    event.preventDefault()
    const paragraphNode = document.querySelectorAll('.cityName');
    const paragraphArray = Array.from(paragraphNode);

    for (let i = 0; i < paragraphArray.length; i++) {
        inputvalue = input.value.toLowerCase();
        console.log(inputvalue);


        const cityName = paragraphArray[i].textContent.toLowerCase();


        if (cityName.indexOf(inputvalue) > -1) {
            paragraphArray[i].parentElement.style.display = 'block';
        } else {
            paragraphArray[i].parentElement.style.display = 'none';
        }
    }
}

input.addEventListener('keyup', getNode)



//.........................................................................................
//for fetching the additional cities 
const onSuccessNewSingle = (position) => {

    const myLatitude = countriesList[countriesList.length - 1].latitude;
    const myLongitude = countriesList[countriesList.length - 1].longitude;

    const apiUrl = `https://api.weatherbit.io/v2.0/current?&lat=${myLatitude}&lon=${myLongitude}&key=${myApiKey}`;
    fetch(apiUrl)
        .then((response) => storeAndCallResponseNew(response))
        .catch(error => console.error('yoo hora', error))

}

const storeAndCallResponseNew = (response) => {
    response.json().then((myJson) => callResponseNew(myJson))

}

const callResponseNew = (objectInfo) => {
    //console.log(objectInfo)
    //console.log(objectInfo.data[0].weather.icon);
    const weatherContainer = document.querySelector('.weather-container')

    const cityName = document.createElement('p');
    cityName.className = 'cityName'
    cityName.innerHTML = objectInfo.data[0].city_name;
    cityName.style.marginTop = '18%';


    const singlecountryData = document.createElement('div');
    singlecountryData.className = 'inner-container';

    const image = document.createElement('img');
    image.src = `icons/${objectInfo.data[0].weather.icon}.png`
    image.style.maxHeight = '80px'

    const tempreature = document.createElement('p');
    tempreature.className = 'temp';
    tempreature.innerHTML = `${objectInfo.data[0].temp}°C`;


    const description = document.createElement('p');
    description.className = 'description';
    description.innerHTML = objectInfo.data[0].weather.description;


    singlecountryData.appendChild(cityName);
    singlecountryData.appendChild(image);
    singlecountryData.appendChild(tempreature)
    singlecountryData.appendChild(description)


    weatherContainer.appendChild(singlecountryData)

}