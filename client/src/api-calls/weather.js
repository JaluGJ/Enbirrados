import axios from 'axios'
const {REACT_APP_WEATHER_API_KEY} = process.env

export async function getWeatherDay (data) {
 try {
   const weather = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${REACT_APP_WEATHER_API_KEY}&days=1&aqi=no&alerts=no&q=${data.country}&dt=${data.date}&hour=${data.hour}`)
  return weather.data
 } catch (error) {
  console.log(error)
 }
}
