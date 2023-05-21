import { useEffect } from "react"

const  useTitleRoutes =title =>{
    useEffect(()=>{
        document.title = title
    },[title])
}
export default useTitleRoutes