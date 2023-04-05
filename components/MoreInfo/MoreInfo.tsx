import SunriseSet from "../SunriseSet/SunriseSet"
import styles from "@/components/MoreInfo/MoreInfo.module.css"
import {Backgrounds, WeatherData} from "@/types/WeatherData"

type Props = {
    data: WeatherData
}

const MoreInfo = ({ data }: Props) => {

    const backgroundsInfo: Backgrounds = {
        Clear: '#EC6E4C',
        Rain: '#498CDD',
        Clouds: '#9488D7',
        Snow: '#74CAF2',
        Thunderstorm: '#9488D7',
        default: '#5E5E63',
      }

    const backgroundInfoUrl = data?.weather?.[0]?.main ? backgroundsInfo[data.weather[0].main] : backgroundsInfo.default

  return (
    <div className={styles.moreInfo}>
      <div style={{
              backgroundColor: `${backgroundInfoUrl ?? '#5E5E63' }`
            }}>
              <p>Feels Like: </p>
              <p>{data.main.feels_like}°</p>
            </div>
            <div style={{
              backgroundColor: `${backgroundInfoUrl ??'#5E5E63' }`
            }}>
              <p>Humidity: </p>
              <p>{data.main.humidity}%</p>
            </div>
            <div style={{
              backgroundColor: `${backgroundInfoUrl ?? '#5E5E63' }`
            }}>
              <p>Pressure: </p>
              <p>{data.main.pressure}</p>
            </div>
            <SunriseSet style={backgroundInfoUrl ?? '#5E5E63'} data={data}/>
    </div>
  )
}

export default MoreInfo
