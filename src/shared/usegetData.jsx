import { useEffect, useState } from "react"

const useGetToyData = url =>{
    const [toy, setToy] = useState({})
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToy(data))
    },[url])
    if(toy.length>1){
        return toy
    }
    else{
        return [{}]
    }
}

export default useGetToyData