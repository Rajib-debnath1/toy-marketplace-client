import { useEffect } from "react"

const  useTitleRoutes =title =>{
    useEffect(()=>{
        document.title = `FunnyToy/${title}`
    },[title])
}
export default useTitleRoutes