import '../scss/background.scss'
import background from "../../templates/background.mp4";

function BackgroundVideo(){
    return(
        <video autoPlay muted loop id="myVideo">
            <source src={background} type="video/mp4"/>
        </video>
    )
}

export default BackgroundVideo