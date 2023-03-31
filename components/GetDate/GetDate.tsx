import { useState, useEffect } from "react"
import styles from "@/components/GetDate/GetDate.module.css"

const GetDate = () => {
    const [currentDate, setCurrentDate] = useState<string>('')

    useEffect(() => {
        const dateOptions: Intl.DateTimeFormatOptions = {
            month: 'long',
            day: 'numeric'
        }
        const dayOptions: Intl.DateTimeFormatOptions = {
            weekday: 'long'
        }
        const currentDate: Date = new Date()
        const formattedDate: string = 
        `
        ${currentDate.toLocaleDateString('en-US', dateOptions)} -
        ${currentDate.toLocaleDateString('en-US', dayOptions)}
        `
        setCurrentDate(formattedDate)
    }, [])

  return (
    <div className={styles.date}>
        <p>{currentDate}</p>
    </div>
  )
}

export default GetDate
