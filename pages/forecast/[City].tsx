import { useRouter } from 'next/router';
import styles from "@/pages/forecast/City.module.css"
import { WeatherData } from '@/types/WeatherData';
import Image from "next/image"
import GetDate from '@/components/GetDate/GetDate';
import MoreInfo from '@/components/MoreInfo/MoreInfo';
import { Backgrounds } from '@/types/WeatherData';



const City = () => {
  const router = useRouter();
  const data: WeatherData = router.query.data ? JSON.parse(router.query.data as string) : null;

  const backgrounds: Backgrounds = { 
    Clear: '#F0A995',
    Rain: '#1A3557',
    Clouds: '#251D57',
    Snow: '#145370',
    Thunderstorm: '#251D57',
    default: '#161617',
  }

  const backgroundIcons: Backgrounds = { 
    Clear: '/sun.svg',
    Rain: '/rain.svg',
    Clouds: '/cloud.svg',
    Snow: '/snow.svg',
    Thunderstorm: '/thunder.svg',
    default: '/dusty.svg',
  }

  const backgroundUrl = data?.weather?.[0]?.main ? backgrounds[data.weather[0].main] : backgrounds.default;

  const backgroundIconUrl = data?.weather?.[0]?.main ? backgroundIcons[data.weather[0].main] : backgroundIcons.default;

  

  if (!data || !data.weather) {
    return <div>Sorry, there was an error loading the weather data.</div>;
  }

  return (
    <div className={styles.container} style={{
      backgroundColor: `${backgroundUrl ?? '#161617'}`
      }}>
      <GetDate />
      <div className={styles.nameNIcon}>
        <div>
          <Image src={backgroundIconUrl ?? '/dusty.svg'} width={330} height={250}  alt="cloud icon" priority style={{
              top:"15%",
            }} />
        </div>
        <div className={styles.cityName}>
          <h1> {data.name} </h1>
          <div className={styles.infoCont}>
            <div className={styles.temCont}>
              <span className={styles.temp}> {data.main.temp} °</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.generalCont}>
              <span> {(data.weather[0].description).charAt(0).toUpperCase() + (data.weather[0].description).slice(1)} </span>
              <p> H: {data.main.temp_max}°   L: {data.main.temp_min}° </p>
        </div>
        <MoreInfo data={data} />
      </div>
    </div>
  )
}

export default City