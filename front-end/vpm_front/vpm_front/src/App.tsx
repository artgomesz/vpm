import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pagess/Home/Home'
import About from './pagess/About/About'
import Discover from "./pagess/discover/discover";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Discover" element={<Discover/>}/>
      </Routes>
    </Router>
  )
}

export default App;