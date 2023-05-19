
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import { useContext } from 'react'
import { AuthContext } from './firebase/AuthProvider'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
// const data  = useContext(AuthContext)
// console.log(data)
  return (
    <>
      <div>
       <RouterProvider router={router}>
        
       </RouterProvider>
       <ToastContainer></ToastContainer>
      </div>
    
    </>
  )
}

export default App
