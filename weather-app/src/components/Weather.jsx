import { useState, useEffect } from "react";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("Lahore");
  const [searchInput, setSearchInput] = useState("");

  const cities = {
    Lahore: { lat: 31.5204, lon: 74.3587 },
    Karachi: { lat: 24.8607, lon: 67.0011 },
    Islamabad: { lat: 33.6844, lon: 73.0479 },
    Rawalpindi: { lat: 33.5651, lon: 73.1896 },
    Multan: { lat: 30.1575, lon: 71.4454 },
    Faisalabad: { lat: 31.418, lon: 72.3457 },
    Peshawar: { lat: 34.0151, lon: 71.5249 },
    Quetta: { lat: 30.1798, lon: 66.975 },
    Hyderabad: { lat: 25.396, lon: 68.4626 },
    Gujranwala: { lat: 32.1814, lon: 74.1856 },
  };
  const getWeatherIcon = (code) => {
    if (code === 0) return { emoji: "☀️", text: "Clear Sky" };
    if (code === 1 || code === 2) return { emoji: "🌤️", text: "Mostly Clear" };
    if (code === 3) return { emoji: "☁️", text: "Overcast" };
    if (code === 45 || code === 48) return { emoji: "🌫️", text: "Foggy" };
    if (code === 51 || code === 53 || code === 55)
      return { emoji: "🌧️", text: "Drizzle" };
    if (code === 61 || code === 63 || code === 65)
      return { emoji: "🌧️", text: "Rain" };
    if (code === 71 || code === 73 || code === 75)
      return { emoji: "❄️", text: "Snow" };
    if (code === 80 || code === 81 || code === 82)
      return { emoji: "⛈️", text: "Rain Showers" };
    if (code === 85 || code === 86)
      return { emoji: "❄️", text: "Snow Showers" };
    if (code === 95 || code === 96 || code === 99)
      return { emoji: "⚡", text: "Thunderstorm" };
    return { emoji: "❓", text: "Unknown" };
  };

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError(false);

      let city = cities[cityName]; //Delhi
      // for debugging
      // console.log(city)

      if (!city) {
        setError("City not found");
        setLoading(false);
        return;
      }

      let apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,precipitation,is_day`;

      // for debugging
      console.log(`Loading data from ${apiUrl}`);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      // converting data into Javascript Object (JSON Format)
      let data = await response.json();

      // passing values to states
      setWeather(data);
      setSelectedCity(city);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


useEffect(() => {
    fetchWeather('Lahore')
}, [])

// dropdown
const handleCityChange = (e) => {
    const city = e.target.value
    fetchWeather(city)
}
// input field
const handleSearch = (e) => {
    e.preventDefault()

    if(searchInput.trim() === ''){
        setError('City cannot be empty');
        return;
    }
}
if(cities[searchInput]){
    fetchWeather(searchInput)
    setSearchInput('')
}else{
    setError(`Error: City not found. Enter Lahore, Karachi or any other city`)
}

return(
    <>
            <input 
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            //   setSearchInput  -> searchInput
              placeholder="Search city... (e.g., Karachi)"
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
            />
            {/* onChange -> function call -> */}
    
    </>
)

};