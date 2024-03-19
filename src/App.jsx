import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Trips from "./routes/Trips";
import Contact from "./routes/Contact";
import Destination from './components/Destination';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/trips" element={<Trips/>} />
        <Route path="/destination" element={<Destination/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
