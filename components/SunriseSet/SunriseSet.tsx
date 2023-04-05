import { WeatherData } from '@/types/WeatherData';
import Image from "next/image"

type Props = {
    data: WeatherData
    style: string
}

const SunriseSet = ({ data, style }: Props) => {
    const sunset = new Date(data.sys.sunset * 1000)
    const sunrise = new Date(data.sys.sunrise * 1000)

    const sunsetHours = sunset.getHours()
    const sunsetMinutes = sunset.getMinutes()
    const sunsetPeriod = sunsetHours >= 12 ? 'pm' : 'am'

    const formattedSunsetHours = sunsetHours % 12 || 12 
    const formattedSunsetMinutes = sunsetMinutes.toString().padStart(2, '0')

    const sunsetTime = `${formattedSunsetHours}:${formattedSunsetMinutes} ${sunsetPeriod}`

    const sunriseHours = sunrise.getHours()
    const sunriseMinutes = sunrise.getMinutes()
    const sunrisePeriod = sunriseHours >= 12 ? 'pm' : 'am'

    const formattedSunriseHours = sunriseHours % 12 || 12 
    const formattedSunriseMinutes = sunriseMinutes.toString().padStart(2, '0')

    const sunriseTime = `${formattedSunriseHours}:${formattedSunriseMinutes} ${sunrisePeriod}`

  return (
    <div style={{
        backgroundColor:`${style}`
    }}>
        <div>
            <Image src="/weather-sunset-down.svg" alt="sunset icon" width={24} height={24}/>
            <div>
                <p>Sunset</p>
                <span> {sunsetTime} </span>
            </div>
        </div>
        <div>
        <Image src="/weather-sunset-up.svg" alt="sunrise icon" width={24} height={24}/>
            <div>
                <p>Sunrise</p>
                <span> {sunriseTime} </span>
            </div>
        </div>
    </div>
  )
}

export default SunriseSet

