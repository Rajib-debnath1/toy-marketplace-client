import { useEffect, useState } from "react"

const useGetToyData = url =>{
    const [toy, setToy] = useState({})
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToy(data))
    },[url])
    return toy
}

export default useGetToyData