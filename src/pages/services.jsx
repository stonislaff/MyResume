import ServiceCard from "./components/serviceCard";
import './scss/services.scss'
import BackgroundVideo from "./components/background";
import test from '../templates/servicesImage/test.png'

function Services(){
    return(
        <body>
            <BackgroundVideo/>
            <div className="content">
                <ServiceCard name="Telegram chat-bot" description="I provide the service of writing a chat bot for Telegram of any complexity." image={test} technologies="Python, C#"/>
            </div>
        </body>
    )
}

export default Services