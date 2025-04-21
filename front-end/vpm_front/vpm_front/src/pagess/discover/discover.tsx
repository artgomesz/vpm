import Nav from "../../components/nav/Nav"
import './discover.css'
import { EmotionButtons } from "../../components/EmotionButtons/EmotionButton"

function discover(){
    return(
        <>
        <Nav/>
        <div className="discover-container">
        <div className="txt-container">
        <h1 className="discover-txt">How u feeling?</h1>
        <h2 className="discover-h2">choose one of these emotions </h2>
        </div>
        <div className="buttons">
              <EmotionButtons/>
        </div>
        </div>
        </>
    )
}

export default discover