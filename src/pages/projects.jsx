import './scss/projects.scss'
import BackgroundVideo from "./components/background";
import ProjectCard from "./components/projectCard";
import dark from '../templates/icons/dark.jpg'
import autobot from '../templates/icons/autobot.jpg'
import resume from '../templates/resume.png'
import noimg from '../templates/noimg.png'
function Projects(){
    document.title = 'Stanislav Sobkovich - Projects'
    return(
        <body>
            <BackgroundVideo/>
            <div className="content">
                <ProjectCard title="Dark world - chat bot" image={dark} description="This is a gaming chatbot for Telegram. The project was developed from scratch for about 3 months. The bot has a lot of entertainment, inventory system, chest opening system, business system. It also has an admin panel and a developer panel." technologies="Python, Aiogram, SQlite" links={['https://github.com/stonislaff/DarkWorld']}/>
                <ProjectCard title="Autobot - chat bot" image={autobot} description="Freelance project for selling cars. After development, I supported it for about a year, after which the owner closed the project. The user fills out the ad form, the form is sent to the administrator, the administrator can reject the ad and enter a comment, or accept it and the ad will be published in the channel." technologies="Python, Aiogram, MongoDB" links={['https://github.com/stonislaff/autobot']}/>
                <ProjectCard title="Resume - website" image={resume} description="The resume site where you read it. I hope the font is readable enough :)" technologies="JS, React, SCSS" links={['https://github.com/stonislaff/MyResume','https://my-resume-stonislaff.vercel.app/resume']}/>
                <ProjectCard title="Vickladach - website" image={noimg} description="Now in development. The main task of the site is to allow grading and writing comments to Ukrainian teachers of academies, colleges, universities, schools. The user can rate a teacher/add a teacher/find a teacher by name or university." technologies="TS, React, SCSS " links={['https://github.com/stonislaff/Vickladach','https://vickladach.vercel.app/']}/>
            </div>
        </body>
    )
}

export default Projects