import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from "./components/Footer/Footer"
import {Routes ,Route} from "react-router-dom"
function App() {

  return (
    <>
    <Navbar/>
    
    <Routes>


<Route path="/" element={<Home/>}>  </Route>
<Route path="/Projects" element={<Projects/>}>  </Route>
<Route path="/Contact" element={<Contact/>}> </Route>
<Route path="/About" element={<About/>}>  </Route> 

    </Routes>

    <Footer/>

    </>
  )
}

export default App
