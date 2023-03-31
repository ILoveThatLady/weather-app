import { useState } from "react"
import styles from "@/components/InputCity/InputCity.module.css"
import fetchWeather from "@/pages/api/weather";
import { useRouter } from "next/router";

const InputCity = () => {
    const router = useRouter()
    const [query, setQuery] = useState<string>('')
    const [weather, setWeather] = useState<any>(null)

    const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query)
            setWeather(data)
            setQuery('')
            router.push({
              pathname: `/forecast/${query}`,
              query: {data: JSON.stringify(data)}
            })
        }
    }

  return (
    <div className={styles.search}>
        <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search city..." 
        onKeyUp={search} 
        className={styles.location} />        
    </div>
  )
}

export default InputCity
