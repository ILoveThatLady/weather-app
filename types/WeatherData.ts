export type WeatherData = {
    name: string
    main: {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      humidity: number
    }
    weather: [
      {
        main: string
        description: string
        icon: string
      }
    ]
    sys: {
      country: string
      sunrise: number
      sunset: number 
    }
    wind: {
      speed: number
      deg: number
    }
    
  }

export type Backgrounds = {
  [key: string] : string
}