export default async function fetchWeather(query: string) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`);
  const data = await response.json();
  return data;
}
