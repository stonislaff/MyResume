import ServiceCard from "./components/serviceCard";
import './scss/services.scss'
import BackgroundVideo from "./components/background";
import bot from '../templates/servicesImage/bot.png'
import desktop from '../templates/servicesImage/desktop.png'
import web from '../templates/servicesImage/web.png'
import parse from '../templates/servicesImage/parse.png'

function Services(){
    document.title = "Stanislav Sobkovich - Services"
    return(
        <body>
            <BackgroundVideo/>
            <div className="content">
                <ServiceCard name="Telegram chat-bot" description="I provide the service of writing a chat bot for Telegram of any complexity." image={bot} technologies="Python, Aiogram"/>
                <ServiceCard name="Website" description="I offer the service of writing the front-end part of the site. It is desirable to provide a layout in PSD or Figma." image={web} technologies="JS, React, HTML, SCSS"/>
                <ServiceCard name="Data parsing" description="I offer a service for parsing data from various sites. Any difficulty." image={parse} technologies="Python"/>
                <ServiceCard name="Desktop app" description="I offer the service of writing a desktop application of medium complexity." image={desktop} technologies="C#, WPF"/>
            </div>
        </body>
    )
}

export default Services