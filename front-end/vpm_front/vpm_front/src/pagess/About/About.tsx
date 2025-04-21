import Nav from "../../components/nav/Nav"
import './About.css'

function About(){
    return(
        <> 
        <header>
            <Nav/>
        </header>
        <main className="about-main">
            <h1>About</h1>
            <div className="txt-main">
            <p>This site was created without any lucrative intent. It is, first of all, a  heart project made by someone who loves technology, vibrates with innovation and breathes music every day. The idea was born from the desire to unite two of my greatest passions: the universe of programming and the transformative power of sound art. It works to introduce you to new artists based on your mood, as if you were a geek friend who knows you well and loves to surprise you with new sounds. Every bit of this site, from code to design, was made by me with affection, trying to express what moves me the most in everyday life: the curiosity to learn, the pleasure of creating and the joy of sharing something unique.</p>
            </div>
        </main>
        </>
    )
}

export default About