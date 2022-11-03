import { getWeatherDay } from "../api-calls/weather";

export async function beerCalc(date, hour, invited, country){
  const weatherApi = await getWeatherDay({country, date, hour})
  let temperature = weatherApi.forecast.forecastday[0].hour[0].temp_c
  let beer = 0
  if (temperature < 20 ){
    beer = (invited * 0.75) + 0.75
    return {beer, temperature}
  }
  if (temperature > 24){
    beer = (invited * 2) + 2
    return {beer, temperature}
  }
  beer = invited + 1
  return {beer, temperature}
} 

export function dateFormat(fecha, formato) {
  const map = {
      dd: fecha.getDate(),
      mm: (fecha.getMonth() + 1).toString().padStart(2, "0"),
      yyyy: fecha.getFullYear(),
      hh: (fecha.getHours()).toString().padStart(2,"0")
  }

  return formato.replace(/dd|mm|yyyy|hh/gi, matched => map[matched])
}