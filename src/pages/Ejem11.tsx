import { useState } from "react"

export default function Ejem11() {
    const [pulsado, setPulsado] = useState(false) 

    const handleClick = () => {
        setPulsado(!pulsado)
    }

    return <button onClick={handleClick} 
        className={`${pulsado&& 'bg-green-500'} border rounded-lg p-2 shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-500`}>
        {pulsado ? "Pulsado" : "Sin pulsar"}
    </button>

}