import Nav from '../../components/nav/Nav'

import newdad from '../../assets/albums-assets/NEWDAD-Madra-cover.webp'
import clairo from '../../assets/albums-assets/https___images.genius.com_6725f1000db2e875f4ce966f4144d41a.1000x1000x1-1200x1200.webp'
import ocean from '../../assets/albums-assets/71D8TMuqaPS.webp'

import toliver from '../../assets/albums-assets/91vobbxGA0L.webp'
import doom from '../../assets/albums-assets/376-1999.webp'

import '../../Home.css'
import { Link } from 'react-router-dom'

function App() {
 return (
    <>
    <header>
      <Nav/>
    </header>
    <main className='text-main'>
      <div className='text-hero'>
      <h1>Tired of don't know what to listen to?</h1>
      <p>here are the solution, vpm will recomend a new artist based on your mood.</p>
      <Link to = "/discover">
      <button className='button-home' >Find out</button>
      </Link>
      </div>
      <div className='columns'>
      <div className='column1'>
      <img className='newdad' src={newdad} alt="" />
      <img className='clairo'  src={clairo} alt="" />
      <img className='ocean' src={ocean} alt="" />
      </div>
      <div className='column2'>
        <img className='doom' src={doom} alt="" />
        <img className='toliver' src={toliver} alt="" />
      </div>
      </div>
    </main>
    </>
  )
}

export default App
