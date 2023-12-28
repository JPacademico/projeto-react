import {useState} from "react"

const useCount = (date) => {

    const [day,setDay] = useState()
    const [hour,setHour] = useState()
    const [min,setMin] = useState()
    const [sec,setSec] = useState()

    const countDown = () =>{

        const countDate = new Date(date).getTime();
        const now = new Date().getTime();
        const interval = countDate - now

        const sec = 1000
        const min = sec*60
        const hour = min*60
        const day = hour*24

        const dayNumber = Math.floor(interval/day)
        const hourNumber= Math.floor((interval % day) /hour)
        const minNumber= Math.floor((interval % hour) /min)
        const secNumber= Math.floor((interval % min) /sec)

        setDay(dayNumber)
        setHour(hourNumber)
        setMin(minNumber)
        setSec(secNumber)
    }
    setInterval(countDown, 1000)
    
    return [day,hour,min,sec];
    
}

export default useCount