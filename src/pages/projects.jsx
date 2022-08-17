import './scss/projects.scss'
import BackgroundVideo from "./components/background";
import ProjectCard from "./components/projectCard";
import dark from '../templates/icons/dark.jpg'
import autobot from '../templates/icons/autobot.jpg'

function Projects(){
    return(
        <body>
        <BackgroundVideo/>
        <div className="content">
            <ProjectCard title="Dark world - chat bot" image={dark} description="This is a gaming chatbot for Telegram. The project was developed from scratch for about 3 months. The bot has a lot of entertainment, inventory system, chest opening system, business system. It also has an admin panel and a developer panel." technologies="Python, Aiogram, SQlite" links={['https://github.com/stonislaff/DarkWorld']}/>
            <ProjectCard title="Autobot - chat bot" image={autobot} description="Freelance project for selling cars. After development, I supported it for about a year, after which the owner closed the project. The user fills out the ad form, the form is sent to the administrator, the administrator can reject the ad and enter a comment, or accept it and the ad will be published in the channel." technologies="Python, Aiogram, MongoDB" links={['https://github.com/stonislaff/autobot']}/>
        </div>
        </body>
    )
}

export default Projects