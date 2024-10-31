import { useEffect, useState } from "react"

export function useWidth () {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('resize', () => setWidth(window.innerWidth))
        }
    }, [])
    
    return width
}