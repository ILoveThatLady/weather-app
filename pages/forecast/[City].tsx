import { useRouter } from 'next/router';
import styles from "@/pages/forecast/City.module.css"
import { WeatherData } from '@/types/WeatherData';
import Image from "next/image"
import GetDate from '@/components/GetDate/GetDate';
import SunriseSet from '@/components/SunriseSet/SunriseSet';

interface Backgrounds {
  [key: string]: string
}

const City = () => {
  const router = useRouter();
  const data: WeatherData = router.query.data ? JSON.parse(router.query.data as string) : null;

  const backgrounds: Backgrounds = { 
    Clear: '/sunny.png',
    Rain: '/rain.png',
    Clouds: '/cloudy.png',
    Snow: '/snow.png',
    Thunderstorm: "/thunderstorm.png",
    default: '/mist.png'
  }

  const backgroundUrl = data?.weather?.[0]?.main ? backgrounds[data.weather[0].main] : backgrounds.default;

  if (!data || !data.weather) {
    return <div>Sorry, there was an error loading the weather data.</div>;
  }

  return (
    <div className={styles.container} style={{
      backgroundImage: `url(${backgroundUrl})`
      }}>
      <GetDate />
      <div className={styles.cityName}>
        <h1> {data.name} </h1>
        <div className={styles.infoCont}>
          <div className={styles.temCont}>
            <Image src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon" width={100} height={100} />
            <span className={styles.temp}> {data.main.temp} °</span>
          </div>
          <div className={styles.generalCont}>
            <span> {(data.weather[0].description).charAt(0).toUpperCase() + (data.weather[0].description).slice(1)} </span>
            <p> H: {data.main.temp_max}°   L: {data.main.temp_min}° </p>
          </div>
        </div>
      </div>
      <div className={styles.moreInfo}>
          <div>
            <p>Feels Like: </p>
            <p>{data.main.feels_like}°</p>
          </div>
          <div>
            <p>Humidity: </p>
            <p>{data.main.humidity}%</p>
          </div>
          <div>
            <p>Pressure: </p>
            <p>{data.main.pressure}</p>
          </div>
          <SunriseSet data={data}/>
      </div>
    </div>
  )
}

export default City