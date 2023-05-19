import { useEffect, useState } from "react"

const useGetToyData = url =>{
    const [toy, setToy] = useState({})
    const [refresh,setRefresh] = useState(null)

    const refetch =(unique)=>{
        setRefresh(unique)
    }
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToy(data))
    },[url,setRefresh,refresh])
    if(toy.length>1){
        return {data:toy,refetch}
    }
    else{
        return [{}]
    }
}

export default useGetToyData