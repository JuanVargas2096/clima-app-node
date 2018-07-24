const axios = require('axios');



const getclima = async(lat, lng) => {

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=3f4d252728bfaf60942d3397cc85fec3`)


    return respuesta.data.main.temp;
}


module.exports = {

    getclima
}