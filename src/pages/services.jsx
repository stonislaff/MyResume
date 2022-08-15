import ServiceCard from "./components/serviceCard";
import './scss/services.scss'
import BackgroundVideo from "./components/background";
import test from '../templates/servicesImage/test.png'

function Services(){
    return(
        <body>
            <BackgroundVideo/>
            <div className="content">
                <ServiceCard name="Test Name" description="some description about this card" image={test} technologies="Python, C#"/>
            </div>
        </body>
    )
}

export default Services