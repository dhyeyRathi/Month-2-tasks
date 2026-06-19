import { useState , useEffect} from 'react'
import './index.css'
import {Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Settings from './pages/Settings'
import Myprofile from './pages/Myprofile'
import { LoaderCircle } from 'lucide-react'

function App() {

  const[loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  },[])


  if(loading){
    return(<>
    <div className='w-screen h-screen flex justify-center items-center text-8xl text-primary font-bold'>
      <LoaderCircle size={50} strokeWidth={3} className='animate-spin'/>
    </div></>);
  }
  else{ 
  return (
    <>
    <Navbar className={`animate-slide-down shadow-lg shadow-black/20`}>
    </Navbar>
    <div className=''>
       <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
        <Route path="/cart" element={<Cart></Cart>}/>
        <Route path="/mysetting" element={<Settings></Settings>}/>
        <Route path="/myprofile" element={<Myprofile></Myprofile>}/>
      </Routes>

    </div>
     
    </>
  )}
}

export default App
